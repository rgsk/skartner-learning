// Minimal nbformat v4 reader - enough to render a notebook, not to round-trip one.

// long outputs collapse to this many lines, the way vscode does it
export const HEAD_LINES = 24;
export const TAIL_LINES = 12;

type Multiline = string | string[];

interface RawOutput {
  output_type: string;
  name?: string;
  text?: Multiline;
  data?: Record<string, Multiline>;
  ename?: string;
  evalue?: string;
  traceback?: string[];
}

interface RawCell {
  cell_type: string;
  source: Multiline;
  execution_count?: number | null;
  outputs?: RawOutput[];
}

interface RawNotebook {
  cells?: RawCell[];
  metadata?: { language_info?: { name?: string } };
}

export type NotebookOutput =
  | { kind: "text"; stream: "stdout" | "stderr" | "result"; text: string }
  | { kind: "image"; src: string }
  | { kind: "html"; html: string }
  | { kind: "error"; ename: string; evalue: string; text: string };

export type NotebookCell =
  | { kind: "markdown"; source: string }
  | {
      kind: "code";
      source: string;
      executionCount: number | null;
      outputs: NotebookOutput[];
    };

export interface Notebook {
  language: string;
  cells: NotebookCell[];
}

const join = (value?: Multiline) =>
  Array.isArray(value) ? value.join("") : (value ?? "");

const stripAnsi = (text: string) => text.replace(/\x1b\[[0-9;]*m/g, "");

// jupyter emits a placeholder repr for rich objects, there is nothing to show
const isPlaceholderRepr = (text: string) =>
  /^<IPython\.core\.display\.\w+ object>$/.test(text.trim());

// notebooks carry vscode-targeted <style> payloads for widgets, which are noise here
const stripStyleAndScript = (html: string) =>
  html.replace(/<(style|script)\b[\s\S]*?<\/\1>/gi, "").trim();

const IMAGE_MIMES = ["image/png", "image/jpeg", "image/gif"];

function normalizeRichOutput(
  data: Record<string, Multiline>,
): NotebookOutput | undefined {
  for (const mime of IMAGE_MIMES) {
    if (data[mime]) {
      const payload = join(data[mime]).replace(/\s/g, "");
      return { kind: "image", src: `data:${mime};base64,${payload}` };
    }
  }

  if (data["image/svg+xml"]) {
    const svg = join(data["image/svg+xml"]);
    return { kind: "image", src: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}` };
  }

  const plain = join(data["text/plain"]);
  if (plain && !isPlaceholderRepr(plain)) {
    return { kind: "text", stream: "result", text: stripAnsi(plain) };
  }

  if (data["text/html"]) {
    const html = stripStyleAndScript(join(data["text/html"]));
    if (html) return { kind: "html", html };
  }

  return undefined;
}

function normalizeOutputs(raw: RawOutput[]): NotebookOutput[] {
  const outputs: NotebookOutput[] = [];

  for (const output of raw) {
    if (output.output_type === "stream") {
      const stream = output.name === "stderr" ? "stderr" : "stdout";
      const text = stripAnsi(join(output.text));
      const previous = outputs[outputs.length - 1];
      // jupyter splits a single print run across many stream entries, so join them
      // back up before truncating, otherwise each fragment truncates on its own
      if (previous?.kind === "text" && previous.stream === stream) {
        previous.text += text;
      } else {
        outputs.push({ kind: "text", stream, text });
      }
      continue;
    }

    if (output.output_type === "error") {
      outputs.push({
        kind: "error",
        ename: output.ename ?? "Error",
        evalue: output.evalue ?? "",
        text: stripAnsi((output.traceback ?? []).join("\n")),
      });
      continue;
    }

    if (
      output.output_type === "execute_result" ||
      output.output_type === "display_data"
    ) {
      const normalized = normalizeRichOutput(output.data ?? {});
      if (normalized) outputs.push(normalized);
    }
    // anything else (widget views in particular) has no useful static rendering
  }

  return outputs;
}

export function parseNotebook(json: string): Notebook {
  const raw = JSON.parse(json) as RawNotebook;

  const cells = (raw.cells ?? []).flatMap<NotebookCell>((cell) => {
    const source = join(cell.source);

    if (cell.cell_type === "markdown") {
      if (!source.trim()) return [];
      return [{ kind: "markdown", source }];
    }

    if (cell.cell_type === "code") {
      const outputs = normalizeOutputs(cell.outputs ?? []);
      if (!source.trim() && outputs.length === 0) return [];
      return [
        {
          kind: "code",
          source: source.replace(/\n+$/, ""),
          executionCount: cell.execution_count ?? null,
          outputs,
        },
      ];
    }

    return [];
  });

  return {
    language: raw.metadata?.language_info?.name ?? "python",
    cells,
  };
}

export interface TruncatedText {
  head: string;
  tail: string;
  totalLines: number;
  truncated: boolean;
}

// a cell can print a single line megabytes long, so cap the preview by characters too
const MAX_PREVIEW_CHARS = 20_000;

const capChars = (text: string) =>
  text.length > MAX_PREVIEW_CHARS ? `${text.slice(0, MAX_PREVIEW_CHARS)}…` : text;

export function truncate(text: string): TruncatedText {
  const lines = text.replace(/\n+$/, "").split("\n");

  if (lines.length <= HEAD_LINES + TAIL_LINES + 1) {
    const whole = lines.join("\n");
    const capped = capChars(whole);
    return {
      head: capped,
      tail: "",
      totalLines: lines.length,
      truncated: capped !== whole,
    };
  }

  return {
    head: capChars(lines.slice(0, HEAD_LINES).join("\n")),
    tail: capChars(lines.slice(-TAIL_LINES).join("\n")),
    totalLines: lines.length,
    truncated: true,
  };
}

export function outputText(output: NotebookOutput): string | undefined {
  if (output.kind === "text") return output.text;
  if (output.kind === "error") {
    return output.text || `${output.ename}: ${output.evalue}`;
  }
  return undefined;
}

// what actually crosses to the browser: a preview plus a url for the rest
export type PreparedOutput =
  | {
      kind: "text";
      isError: boolean;
      // a returned value rather than printed output, so it earns an Out[] prompt
      isResult: boolean;
      head: string;
      tail: string;
      totalLines: number;
      truncated: boolean;
      fullUrl: string;
    }
  | { kind: "image"; src: string }
  | { kind: "html"; html: string };

export function prepareOutput(
  output: NotebookOutput,
  fullUrl: string,
): PreparedOutput {
  if (output.kind === "image" || output.kind === "html") return output;

  const text = outputText(output) ?? "";
  return {
    kind: "text",
    isError: output.kind === "error" || output.stream === "stderr",
    isResult: output.kind === "text" && output.stream === "result",
    fullUrl,
    ...truncate(text),
  };
}
