import ImplementMergeSort from "@/components/DSA/Arrays/ImplementMergeSort";
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
  }
  return <p className="p-4">Problem not added yet</p>;
};
export default Page;
