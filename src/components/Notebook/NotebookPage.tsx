import { parseNotebook } from "@/lib/ipynb";
import { getNotebook } from "@/lib/notebooks";
import { readNotebook } from "@/lib/readNotebook";
import { buildOutline } from "@/lib/outline";
import { resolveNotebookRoute } from "@/lib/topics";
import { notFound } from "next/navigation";
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
  // retired slugs never arrive here - middleware redirects them, and the route
  // only renders params from generateStaticParams. this is the type guard
  const resolved = resolveNotebookRoute(category, topic, problem);
  if (!resolved) notFound();

  const entry = resolved.entry;
  const source = getNotebook(entry);

  if (!source) {
    return <div>Page not implemented</div>;
  }

  const githubUrl = source.url;
  const title = typeof entry === "string" ? entry : entry.name;

  const read = await readNotebook(source, revalidate);

  // anchors are injected into the markdown cells here, so the outline in the
  // right column and the headings in the render share the same ids
  const parsed = read.ok ? buildOutline(parseNotebook(read.text)) : undefined;

  const failure = read.ok
    ? undefined
    : read.from === "disk"
      ? `Could not read this notebook from ${source.localPath} (${read.status}).`
      : `Could not load this notebook from GitHub (${read.status}).`;

  return (
    <div className="flex items-start justify-between gap-6 xl:gap-10">
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
            {failure} Open it{" "}
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
      {/* sticky  top-[32px] because layout has p-[32px] */}
      {parsed && (
        <aside className="hidden md:block w-[200px] lg:w-[230px] xl:w-[260px] shrink-0 sticky top-[32px] max-h-[calc(100vh-140px)] overflow-y-auto">
          <NotebookOutline nodes={parsed.outline} />
        </aside>
      )}
    </div>
  );
};

export default NotebookPage;
