import randomComponentsMap from "@/components/Random/randomComponentsMap";

const Page = async ({
  params,
}: {
  params: Promise<{ topic: string; problem: string }>;
}) => {
  const { topic, problem } = await params;

  const Component = randomComponentsMap[topic]?.[problem];
  return Component ?? <div>Page not implemented</div>;
};

export default Page;
