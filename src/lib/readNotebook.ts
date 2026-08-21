import { readFile } from "node:fs/promises";
import type { NotebookSource } from "./notebooks";

export type NotebookRead =
  | { ok: true; text: string }
  | { ok: false; from: "disk" | "github"; status: number };

// a local path is a working copy on the author's machine - it exists in dev and
// nowhere else, so a deployed build always reads from github
const readsFromDisk = (source: NotebookSource) =>
  Boolean(source.localPath) && process.env.NODE_ENV !== "production";

export async function readNotebook(
  source: NotebookSource,
  revalidate: number,
): Promise<NotebookRead> {
  if (readsFromDisk(source)) {
    try {
      // no cache to invalidate, so every refresh sees the file as it is now
      return { ok: true, text: await readFile(source.localPath!, "utf8") };
    } catch {
      // a bad path is reported rather than quietly falling back to github,
      // which would look like editing the notebook had stopped working
      return { ok: false, from: "disk", status: 404 };
    }
  }

  const response = await fetch(source.rawUrl, { next: { revalidate } });
  if (!response.ok) {
    return { ok: false, from: "github", status: response.status };
  }
  return { ok: true, text: await response.text() };
}
