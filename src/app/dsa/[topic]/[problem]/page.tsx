import dsaComponentsMap from "@/components/DSA/dsaComponentsMap";

const Page = async ({
  params,
}: {
  params: Promise<{ topic: string; problem: string }>;
}) => {
  const { topic, problem } = await params;

  const Component = dsaComponentsMap[topic]?.[problem];
  return Component ?? <div className="p-[32px]">Page not implemented</div>;
};

export default Page;
