import MergeSort from "@/components/DSA/Arrays/MergeSort";

const Page = async ({
  params,
}: {
  params: Promise<{ topic: string; problem: string }>;
}) => {
  const { topic, problem } = await params;
  if (topic === "arrays") {
    if (problem === "merge-sort") {
      return <MergeSort />;
    }
  }
  return <div className="p-[32px]">Page not implemented</div>;
};
export default Page;
