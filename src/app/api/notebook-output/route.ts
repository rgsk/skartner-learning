import { outputText, parseNotebook } from "@/lib/ipynb";
import { getNotebook } from "@/lib/notebooks";
import { readNotebook } from "@/lib/readNotebook";
import { getEntryForRoute } from "@/lib/topics";
import type { NextRequest } from "next/server";

// matches the page, so both read the same cached copy of the notebook
export const revalidate = 3600;

const text = (body: string, status = 200) =>
  new Response(body, {
    status,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  const entry = getEntryForRoute(
    params.get("category") ?? "",
    params.get("topic") ?? "",
    params.get("problem") ?? "",
  );
  const source = getNotebook(entry);
  if (!source) return text("Notebook not found", 404);

  const cellIndex = Number(params.get("cell"));
  const outputIndex = Number(params.get("out"));
  if (!Number.isInteger(cellIndex) || !Number.isInteger(outputIndex)) {
    return text("Bad cell or output index", 400);
  }

  const read = await readNotebook(source, revalidate);
  if (!read.ok) {
    return text(`Could not load notebook from ${read.from} (${read.status})`, 502);
  }

  // the page renders the same parse, so indices line up
  const cell = parseNotebook(read.text).cells[cellIndex];
  if (cell?.kind !== "code") return text("Output not found", 404);

  const output = cell.outputs[outputIndex];
  if (!output) return text("Output not found", 404);

  const body = outputText(output);
  if (body === undefined) return text("Output not found", 404);

  return text(body);
}
