import NotebookPage from "@/components/Notebook/NotebookPage";
import { notebookRoutes } from "@/lib/topics";

// github stays the source of truth, the page re-fetches on this interval
export const revalidate = 3600;

// anything outside generateStaticParams is a real 404, answered by the router
// before rendering starts - a notFound() thrown mid-render streams out as a 200.
// retired slugs never reach here: middleware redirects them to a url that is in
// the list. the cost is that a new notebook needs a build, which it needed anyway
export const dynamicParams = false;

export function generateStaticParams() {
  return notebookRoutes();
}

const Page = async ({
  params,
}: {
  params: Promise<{ category: string; topic: string; problem: string }>;
}) => {
  const { category, topic, problem } = await params;
  return (
    <NotebookPage
      category={category}
      topic={topic}
      problem={problem}
      revalidate={revalidate}
    />
  );
};

export default Page;
