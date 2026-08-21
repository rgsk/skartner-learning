import { highlightToHtml } from "@/lib/highlight";
import type { Notebook } from "@/lib/ipynb";
import NotebookMarkdown from "./NotebookMarkdown";
import NotebookOutput from "./NotebookOutput";

interface NotebookViewProps {
  notebook: Notebook;
}

const NotebookView = async ({ notebook }: NotebookViewProps) => {
  const cells = await Promise.all(
    notebook.cells.map(async (cell) =>
      cell.kind === "code"
        ? { cell, html: await highlightToHtml(cell.source, notebook.language) }
        : { cell, html: "" },
    ),
  );

  return (
    <div className="flex flex-col gap-6">
      {cells.map(({ cell, html }, i) => {
        if (cell.kind === "markdown") {
          return <NotebookMarkdown key={i} source={cell.source} />;
        }

        return (
          <div key={i} className="rounded-md overflow-hidden border">
            <div className="notebook-code" dangerouslySetInnerHTML={{ __html: html }} />
            {cell.outputs.map((output, j) => (
              <div key={j} className="border-t border-[#333]">
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
