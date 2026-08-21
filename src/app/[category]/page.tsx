import DSAPage from "@/components/DSA/DSAPage";
import { notebookCategories } from "@/lib/topics";

// see the note in [topic]/[problem] - unknown categories 404 from the router,
// and a retired category slug is redirected by middleware before it gets here
export const dynamicParams = false;

export function generateStaticParams() {
  return notebookCategories.map((c) => ({ category: c.slug }));
}

const Page = () => <DSAPage />;

export default Page;
