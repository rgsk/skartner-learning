import ImplementMergeSort from "@/components/DSA/Arrays/ImplementMergeSort";
import SearchingConcept from "@/components/DSA/Searching/SearchingConcept";
import { unslugify } from "@/lib/utils";

const Page = async ({
  params,
}: {
  params: Promise<{ topic: string; problem: string }>;
}) => {
  const { topic, problem } = await params;
  if (unslugify(topic) === "Arrays") {
    if (unslugify(problem) === "Implement Merge Sort") {
      return <ImplementMergeSort />;
    }
  } else if (unslugify(topic) === "Searching") {
    if (unslugify(problem) === "Concept") {
      return <SearchingConcept />;
    }
  }
  return <p className="p-4">Problem not added yet</p>;
};
export default Page;
