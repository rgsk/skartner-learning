import NotebookView from "@/components/Notebook/NotebookView";
import { parseNotebook } from "@/lib/ipynb";
import {
  getNotebook,
  notebookGithubUrl,
  notebookRawUrl,
  notebookRoutes,
} from "@/lib/notebooks";
import { FaGithub } from "react-icons/fa";

// github stays the source of truth, the page re-fetches on this interval
export const revalidate = 3600;

export function generateStaticParams() {
  return notebookRoutes;
}

const Page = async ({
  params,
}: {
  params: Promise<{ topic: string; problem: string }>;
}) => {
  const { topic, problem } = await params;
  const source = getNotebook(topic, problem);

  if (!source) {
    return <div>Page not implemented</div>;
  }

  const githubUrl = notebookGithubUrl(source);
  const response = await fetch(notebookRawUrl(source), {
    next: { revalidate },
  });

  return (
    <div className="max-w-[900px]">
      <h1 className="text-3xl font-medium">{source.title}</h1>
      <div className="h-3"></div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        <FaGithub />
        <span>
          {source.owner}/{source.repo}/{source.path}
        </span>
      </a>
      <div className="h-8"></div>
      {response.ok ? (
        <NotebookView notebook={parseNotebook(await response.text())} />
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
  );
};

export default Page;
