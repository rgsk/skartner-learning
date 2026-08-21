"use client";
import type { PreparedOutput } from "@/lib/ipynb";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import TargetBlankLink from "../Shared/TargetBlankLink";

// matches the shiki themes used for code cells, so output sits flush with the code
const preClasses =
  "bg-[#f6f8fa] text-[#24292e] dark:bg-[#1E1E1E] dark:text-[#D4D4D4] text-sm leading-relaxed font-mono px-4 py-3 overflow-x-auto whitespace-pre";

type TextOutput = Extract<PreparedOutput, { kind: "text" }>;

function TextOutputView({ output }: { output: TextOutput }) {
  const { head, tail, totalLines, truncated, isError, fullUrl } = output;
  const [full, setFull] = useState<string>();
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);
  // the collapsed preview's height, so expanding does not resize the page
  const [collapsedHeight, setCollapsedHeight] = useState<number>();

  const showScrollable = async () => {
    setCollapsedHeight(preRef.current?.offsetHeight);

    if (full !== undefined) {
      setExpanded(true);
      return;
    }

    setLoading(true);
    setError(false);
    try {
      const response = await fetch(fullUrl);
      if (!response.ok) throw new Error(String(response.status));
      setFull(await response.text());
      setExpanded(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (!truncated) {
    return (
      <pre className={cn(preClasses, isError && "text-red-600 dark:text-red-400")}>{head}</pre>
    );
  }

  return (
    <div>
      <pre
        ref={preRef}
        className={cn(
          preClasses,
          expanded && "overflow-y-auto",
          // only if the measurement was unavailable
          expanded && collapsedHeight === undefined && "max-h-[420px]",
          isError && "text-red-600 dark:text-red-400",
        )}
        style={expanded ? { height: collapsedHeight } : undefined}
      >
        {expanded ? full : `${head}\n...\n${tail}`}
      </pre>

      <div className="bg-[#f6f8fa] dark:bg-[#1E1E1E] text-muted-foreground text-sm italic px-4 pt-2 pb-3">
        {expanded ? (
          <>
            Showing all {totalLines.toLocaleString()} lines.{" "}
            <button
              className="underline hover:text-foreground cursor-pointer"
              onClick={() => setExpanded(false)}
            >
              Collapse
            </button>{" "}
            or <FullOutputLink href={fullUrl} />.
          </>
        ) : (
          <>
            Output is truncated ({totalLines.toLocaleString()} lines). View as a{" "}
            <button
              className="underline hover:text-foreground cursor-pointer disabled:no-underline"
              onClick={showScrollable}
              disabled={loading}
            >
              {loading ? "loading…" : "scrollable element"}
            </button>{" "}
            or <FullOutputLink href={fullUrl} />.
            {error && (
              <span className="text-red-600 dark:text-red-400">
                {" "}
                Could not load the full output.
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const FullOutputLink = ({ href }: { href: string }) => (
  <TargetBlankLink href={href}>
    <span className="underline hover:text-foreground">open in new tab</span>
  </TargetBlankLink>
);

const NotebookOutput: React.FC<{ output: PreparedOutput }> = ({ output }) => {
  if (output.kind === "text") return <TextOutputView output={output} />;

  if (output.kind === "image") {
    return <img src={output.src} alt="" className="max-w-full bg-white p-2" />;
  }

  return (
    <div
      className="messageContent overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: output.html }}
    />
  );
};

export default NotebookOutput;
