import ArrayConcept from "@/components/DSA/Arrays/ArrayConcept";
import CumulativeSum from "@/components/DSA/Arrays/CumulativeSum";
import MergeSort from "@/components/DSA/Arrays/MergeSort";
import QuickSort from "@/components/DSA/Arrays/QuickSort";
import BinarySearchConcept from "@/components/DSA/Searching/BinarySearchConcept";

const Page = async ({
  params,
}: {
  params: Promise<{ topic: string; problem: string }>;
}) => {
  const { topic, problem } = await params;
  if (topic === "arrays") {
    if (problem === "array-concept") {
      return <ArrayConcept />;
    } else if (problem === "implement-merge-sort") {
      return <MergeSort />;
    } else if (problem === "implement-quicksort") {
      return <QuickSort />;
    } else if (problem === "cumulative-sum") {
      return <CumulativeSum />;
    }
  } else if (topic === "searching") {
    if (problem === "binary-search-concept") {
      return <BinarySearchConcept />;
    }
  }
  return <div className="p-[32px]">Page not implemented</div>;
};
export default Page;
