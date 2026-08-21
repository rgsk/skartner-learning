import { highlightToHtml } from "@/lib/highlight";
import {
  prepareOutput,
  type Notebook,
  type PreparedOutput,
} from "@/lib/ipynb";
import { notebookOutputUrl } from "@/lib/notebooks";
import NotebookCode from "./NotebookCode";
import NotebookMarkdown from "./NotebookMarkdown";
import NotebookOutput from "./NotebookOutput";

interface NotebookViewProps {
  notebook: Notebook;
  category: string;
  topic: string;
  problem: string;
}

// jupyter's In/Out gutter. the notebook's own execution_count is ignored: it
// carries whatever the kernel session happened to be on (attention.ipynb starts
// at 1305) and changes on every re-run, which means nothing to a reader
const Prompt: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="hidden sm:block shrink-0 w-[72px] pt-3 text-right font-mono text-xs whitespace-nowrap text-muted-foreground select-none">
    {children}
  </div>
);

// all four labels are three characters wide so the brackets line up in a column.
// Inp is the source, a returned value is Out, a print is Log, stderr and
// tracebacks are Err, figures are Img; html output stays unlabelled
const outputPrompt = (output: PreparedOutput, n: number) => {
  if (output.kind === "image") return `Img[${n}]:`;
  if (output.kind !== "text") return "";
  if (output.isError) return `Err[${n}]:`;
  return output.isResult ? `Out[${n}]:` : `Log[${n}]:`;
};

const NotebookView = async ({
  notebook,
  category,
  topic,
  problem,
}: NotebookViewProps) => {
  let promptCounter = 0;

  const cells = await Promise.all(
    notebook.cells.map(async (cell, cellIndex) => {
      if (cell.kind !== "code") {
        return { cell, html: "", outputs: [], prompt: 0 };
      }

      return {
        cell,
        prompt: ++promptCounter,
        html: await highlightToHtml(cell.source, notebook.language),
        outputs: cell.outputs.map((output, out) =>
          prepareOutput(
            output,
            notebookOutputUrl({ category, topic, problem, cell: cellIndex, out }),
          ),
        ),
      };
    }),
  );

  return (
    <div className="flex flex-col gap-6">
      {cells.map(({ cell, html, outputs, prompt }, i) => {
        if (cell.kind === "markdown") {
          return (
            <NotebookMarkdown key={i} source={cell.source} />
          );
        }

        return (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex gap-3">
              <Prompt>Inp[{prompt}]:</Prompt>
              <div className="flex-1 min-w-0 rounded-md overflow-hidden border">
                <NotebookCode html={html} />
              </div>
            </div>

            {outputs.map((output, j) => (
              <div key={j} className="flex gap-3">
                <Prompt>{outputPrompt(output, prompt)}</Prompt>
                <div className="flex-1 min-w-0 rounded-md overflow-hidden border">
                  <NotebookOutput output={output} />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default NotebookView;
