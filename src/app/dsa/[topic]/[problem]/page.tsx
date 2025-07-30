import MergeSort from "@/components/DSA/Arrays/MergeSort";
import QuickSort from "@/components/DSA/Arrays/QuickSort";
import BinarySearchConcept from "@/components/DSA/BinarySearch/BinarySearchConcept";

const Page = async ({
  params,
}: {
  params: Promise<{ topic: string; problem: string }>;
}) => {
  const { topic, problem } = await params;
  if (topic === "arrays") {
    if (problem === "merge-sort") {
      return <MergeSort />;
    } else if (problem === "quick-sort") {
      return <QuickSort />;
    }
  } else if (topic === "binary-search") {
    if (problem === "binary-search-concept") {
      return <BinarySearchConcept />;
    }
  }
  return <div className="p-[32px]">Page not implemented</div>;
};
export default Page;
