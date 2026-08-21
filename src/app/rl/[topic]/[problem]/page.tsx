import NotebookPage from "@/components/Notebook/NotebookPage";
import { notebookRoutes } from "@/lib/topics";

// github stays the source of truth, the page re-fetches on this interval
export const revalidate = 3600;

export function generateStaticParams() {
  return notebookRoutes("rl");
}

const Page = async ({
  params,
}: {
  params: Promise<{ topic: string; problem: string }>;
}) => {
  const { topic, problem } = await params;
  return (
    <NotebookPage
      category="rl"
      topic={topic}
      problem={problem}
      revalidate={revalidate}
    />
  );
};

export default Page;
