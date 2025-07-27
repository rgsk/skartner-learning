import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";
import { readFile } from "fs/promises";
import path from "path";

const Page = async ({
  params,
}: {
  params: Promise<{ topic: string; problem: string }>;
}) => {
  const { topic, problem } = await params;
  const filePath = path.join(
    process.cwd(),
    "public",
    "markdown",
    topic,
    `${problem}.md`
  );
  const markdown = await readFile(filePath, "utf-8");

  return <MarkdownPage markdown={markdown} />;
};
export default Page;
