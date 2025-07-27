import CollapsibleWrapper from "@/components/Shared/CollapsibleWrapper";
import CsvRenderer from "@/components/Shared/CsvRenderer";
import { checkIsYoutubeVideo, cn } from "@/lib/utils";
import { memo } from "react";
import Markdown from "react-markdown";
import ReactPlayer from "react-player";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import SyntaxHighlighter from "./SyntaxHighlighter";

type MarkdownRendererProps = {
  children: string;
  collapsibleWrapperTriggerClassname?: string;
};

export function MarkdownRenderer({
  children: markdown,
  collapsibleWrapperTriggerClassname,
}: MarkdownRendererProps) {
  return (
    <div className="messageContent">
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={{
          a: ({ className, children, ...props }: any) => {
            const href = props.href as string;
            const hasTargetBlank = !href.startsWith(
              "https://pubbuckrah.s3.us-east-1.amazonaws.com"
            );
            const filename = href.split("/").pop();
            if (checkIsYoutubeVideo(href)) {
              return (
                <div className="aspect-video">
                  <ReactPlayer src={href} width="100%" height="100%" controls />
                </div>
              );
            }
            return (
              <>
                <a
                  {...props}
                  className={cn(
                    className,
                    "text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300"
                  )}
                  target={hasTargetBlank ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
                {href.endsWith(".csv") && (
                  <>
                    <div className="h-4"></div>
                    <CollapsibleWrapper
                      heading={`${filename}`}
                      type="left"
                      triggerClassName={collapsibleWrapperTriggerClassname}
                    >
                      <div className="pl-4">
                        <CsvRenderer url={href} />
                      </div>
                    </CollapsibleWrapper>
                  </>
                )}
                {href.endsWith(".png") && (
                  <>
                    <div className="h-4"></div>
                    <CollapsibleWrapper
                      heading={`${filename}`}
                      type="left"
                      triggerClassName={collapsibleWrapperTriggerClassname}
                    >
                      <div className="pl-4">
                        <img src={href} alt={filename} className="w-full" />
                      </div>
                    </CollapsibleWrapper>
                  </>
                )}
              </>
            );
          },
          code({ node, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            const language = match?.[1] ?? "default";
            const inline = node.position.start.line === node.position.end.line;
            if (inline) {
              return (
                <code
                  className={cn(
                    "bg-gray-200 px-[5px] py-[2px] text-red-500 rounded-sm text-sm",
                    className
                  )}
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <SyntaxHighlighter
                code={children}
                language={language}
                isCodeOutput={false}
              />
            );
          },
        }}
      >
        {processKatexInMarkdown(markdown)}
      </Markdown>
    </div>
  );
}

// IMPORTANT: using MemoizedMarkdownRenderer is essential, to prevent rerenders of code block
export const MemoizedMarkdownRenderer = memo(MarkdownRenderer);

function processKatexInMarkdown(markdown: string) {
  const markdownWithKatexSyntax = markdown
    .replace(/\\\\\[/g, "$$$$") // Replace '\\[' with '$$'
    .replace(/\\\\\]/g, "$$$$") // Replace '\\]' with '$$'
    .replace(/\\\\\(/g, "$$$$") // Replace '\\(' with '$$'
    .replace(/\\\\\)/g, "$$$$") // Replace '\\)' with '$$'
    .replace(/\\\[/g, "$$$$") // Replace '\[' with '$$'
    .replace(/\\\]/g, "$$$$") // Replace '\]' with '$$'
    .replace(/\\\(/g, "$$$$") // Replace '\(' with '$$'
    .replace(/\\\)/g, "$$$$"); // Replace '\)' with '$$';
  return markdownWithKatexSyntax;
}
