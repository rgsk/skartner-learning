"use client";
import { truncate, type NotebookOutput as Output } from "@/lib/ipynb";
import { cn } from "@/lib/utils";
import { useState } from "react";

const preClasses =
  "bg-[#1E1E1E] text-[#D4D4D4] text-xs font-mono px-4 py-3 overflow-x-auto whitespace-pre";

function TextOutput({
  text,
  isError,
}: {
  text: string;
  isError?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const { head, tail, totalLines, truncated } = truncate(text);

  const openInNewTab = () => {
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    window.open(url, "_blank", "noopener,noreferrer");
    // the tab keeps its own reference, so this only drops ours
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
  };

  if (!truncated) {
    return (
      <pre className={cn(preClasses, isError && "text-red-400")}>{text}</pre>
    );
  }

  return (
    <div>
      {expanded ? (
        <pre className={cn(preClasses, "max-h-[420px] overflow-y-auto", isError && "text-red-400")}>
          {text}
        </pre>
      ) : (
        <pre className={cn(preClasses, isError && "text-red-400")}>
          {head}
          {"\n...\n"}
          {tail}
        </pre>
      )}
      <div className="bg-[#1E1E1E] text-[#9c9c9c] text-xs italic px-4 pb-3">
        {expanded ? (
          <>
            Showing all {totalLines} lines.{" "}
            <button
              className="underline hover:text-white cursor-pointer"
              onClick={() => setExpanded(false)}
            >
              Collapse
            </button>{" "}
            or{" "}
            <button
              className="underline hover:text-white cursor-pointer"
              onClick={openInNewTab}
            >
              open in a new tab
            </button>
            .
          </>
        ) : (
          <>
            Output is truncated ({totalLines} lines). View as a{" "}
            <button
              className="underline hover:text-white cursor-pointer"
              onClick={() => setExpanded(true)}
            >
              scrollable element
            </button>{" "}
            or{" "}
            <button
              className="underline hover:text-white cursor-pointer"
              onClick={openInNewTab}
            >
              open in a new tab
            </button>
            .
          </>
        )}
      </div>
    </div>
  );
}

const NotebookOutput: React.FC<{ output: Output }> = ({ output }) => {
  if (output.kind === "text") {
    return <TextOutput text={output.text} isError={output.stream === "stderr"} />;
  }

  if (output.kind === "error") {
    return (
      <TextOutput
        isError
        text={output.text || `${output.ename}: ${output.evalue}`}
      />
    );
  }

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
