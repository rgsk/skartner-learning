import { parseNotebook } from "@/lib/ipynb";
import { getNotebook } from "@/lib/notebooks";
import { buildOutline } from "@/lib/outline";
import { getEntryForRoute } from "@/lib/topics";
import { FaGithub } from "react-icons/fa";
import TargetBlankLink from "../Shared/TargetBlankLink";
import NotebookOutline from "./NotebookOutline";
import NotebookView from "./NotebookView";

interface NotebookPageProps {
  category: string;
  topic: string;
  problem: string;
  revalidate: number;
}

const NotebookPage = async ({
  category,
  topic,
  problem,
  revalidate,
}: NotebookPageProps) => {
  const entry = getEntryForRoute(category, topic, problem);
  const source = getNotebook(
    typeof entry === "string" ? undefined : entry?.notebook,
  );

  if (!entry || !source) {
    return <div>Page not implemented</div>;
  }

  const githubUrl = source.url;
  const title = typeof entry === "string" ? entry : entry.name;

  const response = await fetch(source.rawUrl, {
    next: { revalidate },
  });

  // anchors are injected into the markdown cells here, so the outline in the
  // right column and the headings in the render share the same ids
  const parsed = response.ok
    ? buildOutline(parseNotebook(await response.text()))
    : undefined;

  return (
    <div className="flex items-start gap-10">
      <div className="flex-1 min-w-0 max-w-[900px]">
        <h1 className="text-3xl font-medium">{title}</h1>
        <div className="h-3"></div>
        <TargetBlankLink href={githubUrl}>
          <span className="flex gap-2">
            <FaGithub size={22} />
            <span>Github</span>
          </span>
        </TargetBlankLink>
        <div className="h-8"></div>
        {parsed ? (
          <NotebookView
            notebook={parsed.notebook}
            category={category}
            topic={topic}
            problem={problem}
          />
        ) : (
          <p className="text-red-500">
            Could not load this notebook from GitHub ({response.status}). Open it{" "}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              on GitHub
            </a>{" "}
            instead.
          </p>
        )}
      </div>

      {parsed && (
        <aside className="hidden xl:block w-[260px] shrink-0 sticky top-2 max-h-[calc(100vh-140px)] overflow-y-auto">
          <NotebookOutline nodes={parsed.outline} />
        </aside>
      )}
    </div>
  );
};

export default NotebookPage;
