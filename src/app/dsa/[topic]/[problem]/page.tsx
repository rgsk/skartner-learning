const Page = async ({
  params,
}: {
  params: Promise<{ topic: string; problem: string }>;
}) => {
  const { topic, problem } = await params;
  const { default: Component } = await import(
    `@/markdown/${topic}/${problem}.mdx`
  );

  return (
    <div className="messageContent px-[32px]">
      <Component />
    </div>
  );
};
export default Page;
