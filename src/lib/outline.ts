import type { Notebook, NotebookCell } from "./ipynb";

export interface OutlineNode {
  id: string;
  level: number;
  text: string;
  children: OutlineNode[];
}

const HEADING = /^(#{1,6})\s+(.*?)\s*#*$/;

// just enough inline markdown to read a heading as a plain label. underscores are
// left alone on purpose - the rl notebook's headings are full of value_iteration
// and pass_incumbent_policy, which stripping them would mangle
const plainText = (markdown: string) =>
  markdown
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[`*]/g, "")
    .trim();

// headings become siblings or children by comparing levels, so a notebook whose
// headings are all ### (the rl one) comes out as a flat list rather than nested
function nest(flat: OutlineNode[]): OutlineNode[] {
  const roots: OutlineNode[] = [];
  const stack: OutlineNode[] = [];

  for (const node of flat) {
    while (stack.length && stack[stack.length - 1].level >= node.level) {
      stack.pop();
    }
    (stack[stack.length - 1]?.children ?? roots).push(node);
    stack.push(node);
  }

  return roots;
}

/**
 * Rewrites markdown cells so every heading carries an anchor, and returns the
 * headings as a tree. The anchor is a <span> rather than an <a> because
 * MarkdownRenderer's link override reads props.href unconditionally.
 */
export function buildOutline(notebook: Notebook) {
  const flat: OutlineNode[] = [];

  const cells = notebook.cells.map<NotebookCell>((cell) => {
    if (cell.kind !== "markdown") return cell;

    let fenced = false;
    const source = cell.source
      .split("\n")
      .map((line) => {
        if (line.trimStart().startsWith("```")) {
          fenced = !fenced;
          return line;
        }
        if (fenced) return line;

        const match = HEADING.exec(line);
        if (!match) return line;

        const [, hashes, content] = match;
        const id = `nb-heading-${flat.length}`;
        flat.push({
          id,
          level: hashes.length,
          text: plainText(content),
          children: [],
        });
        return `${hashes} <span id="${id}"></span>${content}`;
      })
      .join("\n");

    return { ...cell, source };
  });

  return { notebook: { ...notebook, cells }, outline: nest(flat) };
}
