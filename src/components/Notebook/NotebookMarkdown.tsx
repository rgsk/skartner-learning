"use client";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { scrollToAnchor } from "./scrollToAnchor";

// notebooks render their own markdown rather than going through the shared
// MarkdownRenderer, which was built for the chat app: it pulls in monaco,
// react-player and csv/png collapsibles that a notebook cell never needs, and
// wraps every fenced block in a header bar with a copy button

const components = {
  a: ({ className, children, href, ...props }: any) => {
    // a link the author wrote against another part of the same notebook. it
    // stays on the page: the anchor is somewhere in this render, and the url
    // is left alone so navigating away still resets the scroll
    const internal = typeof href === "string" && href.startsWith("#");

    return (
      <a
        {...props}
        href={href}
        target={internal ? undefined : "_blank"}
        rel={internal ? undefined : "noopener noreferrer"}
        onClick={
          internal
            ? (event) => {
                if (scrollToAnchor(href.slice(1))) event.preventDefault();
              }
            : undefined
        }
        className={cn(
          "text-blue-600 dark:text-blue-400 hover:underline",
          className,
        )}
      >
        {children}
      </a>
    );
  },

  code: ({ node, className, children, ...props }: any) => {
    // inline code cannot span lines; anything without a position is treated as
    // a block, since that is what raw <pre> passed through by rehypeRaw will be
    const position = node?.position;
    const inline = !!position && position.start.line === position.end.line;

    if (!inline) {
      return <code className="font-mono text-sm">{children}</code>;
    }

    return (
      <code
        {...props}
        className={cn(
          "rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]",
          className,
        )}
      >
        {children}
      </code>
    );
  },

  // a fenced block in prose reads as part of the prose - no header, no copy button
  pre: ({ children }: any) => (
    <pre className="my-4 overflow-x-auto rounded-md border bg-[#f6f8fa] px-4 py-3 text-[#24292e] dark:bg-[#1E1E1E] dark:text-[#D4D4D4]">
      {children}
    </pre>
  ),
};

const NotebookMarkdown: React.FC<{ source: string }> = ({ source }) => (
  <div className="messageContent">
    <Markdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      components={components}
    >
      {normalizeMath(source)}
    </Markdown>
  </div>
);

export default NotebookMarkdown;

// notebooks commonly write math as \[ ... \] or \( ... \); remark-math wants $$
function normalizeMath(markdown: string) {
  return markdown
    .replace(/\\\\\[/g, "$$$$")
    .replace(/\\\\\]/g, "$$$$")
    .replace(/\\\\\(/g, "$$$$")
    .replace(/\\\\\)/g, "$$$$")
    .replace(/\\\[/g, "$$$$")
    .replace(/\\\]/g, "$$$$")
    .replace(/\\\(/g, "$$$$")
    .replace(/\\\)/g, "$$$$");
}
