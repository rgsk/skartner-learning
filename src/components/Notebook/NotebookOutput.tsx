"use client";
import type { PreparedOutput } from "@/lib/ipynb";
import { cn } from "@/lib/utils";
import { useState } from "react";

const preClasses =
  "bg-[#1E1E1E] text-[#D4D4D4] text-xs font-mono px-4 py-3 overflow-x-auto whitespace-pre";

type TextOutput = Extract<PreparedOutput, { kind: "text" }>;

function TextOutputView({ output }: { output: TextOutput }) {
  const { head, tail, totalLines, truncated, isError, fullUrl } = output;
  const [full, setFull] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const showScrollable = async () => {
    if (full !== undefined) return;
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(fullUrl);
      if (!response.ok) throw new Error(String(response.status));
      setFull(await response.text());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (!truncated) {
    return <pre className={cn(preClasses, isError && "text-red-400")}>{head}</pre>;
  }

  return (
    <div>
      {full !== undefined ? (
        <pre
          className={cn(
            preClasses,
            "max-h-[420px] overflow-y-auto",
            isError && "text-red-400",
          )}
        >
          {full}
        </pre>
      ) : (
        <pre className={cn(preClasses, isError && "text-red-400")}>
          {head}
          {"\n...\n"}
          {tail}
        </pre>
      )}

      <div className="bg-[#1E1E1E] text-[#9c9c9c] text-xs italic px-4 pb-3">
        {full !== undefined ? (
          <>
            Showing all {totalLines} lines.{" "}
            <button
              className="underline hover:text-white cursor-pointer"
              onClick={() => setFull(undefined)}
            >
              Collapse
            </button>{" "}
            or{" "}
            <FullOutputLink href={fullUrl} />.
          </>
        ) : (
          <>
            Output is truncated ({totalLines.toLocaleString()} lines). View as a{" "}
            <button
              className="underline hover:text-white cursor-pointer disabled:no-underline"
              onClick={showScrollable}
              disabled={loading}
            >
              {loading ? "loading…" : "scrollable element"}
            </button>{" "}
            or <FullOutputLink href={fullUrl} />.
            {error && (
              <span className="text-red-400"> Could not load the full output.</span>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const FullOutputLink = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-white"
  >
    open in a text editor
  </a>
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
