import type { MDXComponents } from "mdx/types";
import ReactPlayer from "react-player";
import SyntaxHighlighter from "./components/Shared/SyntaxHighlighter";
import { checkIsYoutubeVideo, cn } from "./lib/utils";

const components: MDXComponents = {
  // Allows customizing built-in components, e.g. to add styling.
  a: ({ className, children, ...props }) => {
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
      </>
    );
  },
  code({ node, className, children, ...props }) {
    console.log({ node, className, children, props });
    const match = /language-(\w+)/.exec(className || "");
    const language = match?.[1];
    if (language) {
      return (
        <SyntaxHighlighter
          code={children}
          language={language}
          isCodeOutput={false}
        />
      );
    }

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
  },
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
