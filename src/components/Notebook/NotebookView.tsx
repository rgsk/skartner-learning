import { highlightToHtml } from "@/lib/highlight";
import { prepareOutput, type Notebook } from "@/lib/ipynb";
import { notebookOutputUrl } from "@/lib/notebooks";
import NotebookMarkdown from "./NotebookMarkdown";
import NotebookOutput from "./NotebookOutput";

interface NotebookViewProps {
  notebook: Notebook;
  category: string;
  topic: string;
  problem: string;
}

const NotebookView = async ({
  notebook,
  category,
  topic,
  problem,
}: NotebookViewProps) => {
  const cells = await Promise.all(
    notebook.cells.map(async (cell, cellIndex) => {
      if (cell.kind !== "code") return { cell, html: "", outputs: [] };

      return {
        cell,
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
      {cells.map(({ cell, html, outputs }, i) => {
        if (cell.kind === "markdown") {
          return <NotebookMarkdown key={i} source={cell.source} />;
        }

        return (
          <div key={i} className="rounded-md overflow-hidden border">
            <div
              className="notebook-code"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            {outputs.map((output, j) => (
              <div key={j} className="border-t">
                <NotebookOutput output={output} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default NotebookView;
