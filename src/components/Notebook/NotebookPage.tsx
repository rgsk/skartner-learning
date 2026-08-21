import { parseNotebook } from "@/lib/ipynb";
import { getNotebook } from "@/lib/notebooks";
import { getEntryForRoute } from "@/lib/topics";
import { FaGithub } from "react-icons/fa";
import TargetBlankLink from "../Shared/TargetBlankLink";
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

  return (
    <div className="max-w-[900px]">
      <h1 className="text-3xl font-medium">{title}</h1>
      <div className="h-3"></div>
      <TargetBlankLink href={githubUrl}>
        <span className="flex gap-2">
          <FaGithub size={22} />
          <span>Github</span>
        </span>
      </TargetBlankLink>
      <div className="h-8"></div>
      {response.ok ? (
        <NotebookView
          notebook={parseNotebook(await response.text())}
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
  );
};

export default NotebookPage;
