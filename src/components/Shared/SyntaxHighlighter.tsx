import CsvRenderer from "@/components/Shared/CsvRenderer";
import { LoadingSpinner } from "@/components/Shared/LoadingSpinner";
import usePythonRunner, {
  getCSVContents,
  pythonCSVPrefix,
  pythonImagePrefix,
} from "@/hooks/codeRunners/usePythonRunner";
import Editor from "@monaco-editor/react";
import { Check, Copy, Play, RotateCcw } from "lucide-react";
import React, { useRef, useState } from "react";
import { isMobile } from "react-device-detect";

import useBreakpoints from "@/hooks/useBreakpoints";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import useEventListener from "@/hooks/useEventListener";
import useGlobalContext from "@/hooks/useGlobalContext";
import { cn, getCsvFile } from "@/lib/utils";
interface SyntaxHighlighterProps {
  language: string;
  code?: string;
  isCodeOutput: boolean;
  heading?: string;
  disableHeader?: boolean;
  defaultOutput?: string;
}
const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  language,
  code: initialCode,
  isCodeOutput,
  heading,
  disableHeader,
  defaultOutput,
}) => {
  const { loading: codeRunnersLoading, runCode } = usePythonRunner();
  const [executeCodeDetails, setExecuteCodeDetails] = useState({
    loading: false,
    output: "",
    error: "",
  });
  const { md } = useBreakpoints();
  if (initialCode) {
    if (!initialCode.startsWith("\n")) {
      initialCode = "\n" + initialCode;
    }
    if (!initialCode.endsWith("\n")) {
      initialCode = initialCode + "\n";
    }
  }

  const [code, setCode] = useState(initialCode);
  const [disabledPointerEvents, setDisabledPointerEvents] = useState(true);

  const codeRef = useRef(code);
  codeRef.current = code;
  const { copied, copiedText, copy } = useCopyToClipboard();

  const [editorContentHeight, setEditorContentHeight] = useState(0);

  const { currentExecuteCodeRef } = useGlobalContext();

  const executeCode = async () => {
    if (code) {
      if (["python"].includes(language as any)) {
        setExecuteCodeDetails({ loading: true, output: "", error: "" });
        try {
          const output = await runCode(code);
          setExecuteCodeDetails({ loading: false, output: output, error: "" });
        } catch (err: any) {
          setExecuteCodeDetails({
            loading: false,
            output: "",
            error: err.message,
          });
        }
      } else {
        alert(`${language} isn't supported for code execution`);
      }
    }
  };
  const executeCodeRef = useRef(executeCode);
  executeCodeRef.current = executeCode;
  const monacoFontSize = 14;

  useEventListener("click", () => {
    if (isMobile) {
      setDisabledPointerEvents(true);
    }
  });
  const allowCodeRunning = !isCodeOutput && language === "python";
  return (
    <div>
      <div>
        {disableHeader ? (
          <></>
        ) : (
          <div
            className={cn(
              "bg-[#50505a] w-full",
              "flex justify-between items-center",
              "px-[16px] py-[8px]",
              "sticky top-[0px] z-50"
            )}
          >
            <span className={cn("text-white", heading ? "text-sm" : "text-xs")}>
              {heading ? heading : language === "default" ? "" : language}
            </span>
            <div className="flex gap-3">
              <CodeButton
                onClick={() => {
                  if (code) {
                    copy(code);
                  }
                }}
              >
                {copied && copiedText === code ? (
                  <Check size={12} />
                ) : (
                  <Copy size={12} />
                )}
                {md && (
                  <span>
                    {copied && copiedText === code ? "Copied!" : "Copy"}
                  </span>
                )}
              </CodeButton>

              {/* <CodeButton
                onClick={() => {
                  setWordWrap((prev) => !prev);
                }}
                active={wordWrap}
              >
                <WrapText size={12} />
                {md && <span>Word Wrap</span>}
              </CodeButton> */}

              {allowCodeRunning && (
                <>
                  <>
                    <CodeButton
                      disabled={codeRunnersLoading}
                      onClick={executeCode}
                    >
                      {codeRunnersLoading ? (
                        <LoadingSpinner size={12} />
                      ) : (
                        <Play size={12} />
                      )}
                      {md && <span>Run</span>}
                    </CodeButton>
                  </>

                  {code !== initialCode && (
                    <CodeButton
                      onClick={() => {
                        setCode(initialCode);
                      }}
                    >
                      <RotateCcw size={12} />
                      {md && <span>Reset</span>}
                    </CodeButton>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        <div
          onClick={(e) => {
            if (isMobile) {
              e.stopPropagation();
              setDisabledPointerEvents(false);
            }
          }}
        >
          <div
            className={cn(
              isMobile && disabledPointerEvents && "pointer-events-none"
            )}
            onWheelCapture={(e) => {
              // Check if vertical scrolling is dominant
              if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                // stopPropagation only for vertical scroll (allow horizontal scroll)
                e.stopPropagation();
              }
            }}
          >
            <Editor
              defaultLanguage={language}
              value={code}
              theme="vs-dark"
              height={editorContentHeight}
              options={{
                domReadOnly: !allowCodeRunning,
                fontSize: monacoFontSize,
                scrollBeyondLastLine: false,
                lineNumbers: "off",
                minimap: {
                  enabled: false,
                },
                padding: {
                  // top: paddingTop,
                  // bottom: paddingTop,
                },
                // wordWrap: wordWrap ? "on" : "off",
                readOnly: isCodeOutput, // Ensure output is read-only
              }}
              onChange={(newValue) => setCode(newValue || "")}
              onMount={(editor, monaco) => {
                if (!isCodeOutput) {
                  editor.onDidFocusEditorWidget(() => {
                    currentExecuteCodeRef.current = executeCodeRef;
                  });
                  editor.addCommand(
                    monaco.KeyMod.Shift | monaco.KeyCode.Enter,
                    () => {
                      currentExecuteCodeRef.current?.current();
                    }
                  );
                }
                const updateEditorHeight = () => {
                  const contentHeight = editor.getContentHeight();
                  setEditorContentHeight(contentHeight);
                };
                // Initial update of the container's height
                updateEditorHeight();

                // Listen for changes in content size and update the height accordingly
                editor.onDidContentSizeChange(() => {
                  updateEditorHeight();
                });
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        {executeCodeDetails.loading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : executeCodeDetails.output ? (
          <>
            {(() => {
              const outputLines = executeCodeDetails.output.split("\n");
              let normalTextBuffer: string[] = [];

              return outputLines
                .map((line, index) => {
                  if (!line) return null;

                  if (line.startsWith(pythonImagePrefix)) {
                    const syntaxHighlighter =
                      normalTextBuffer.length > 0 ? (
                        <RenderOutput
                          key={`code-${index}`}
                          code={normalTextBuffer.join("\n")}
                        />
                      ) : null;
                    normalTextBuffer = [];

                    return (
                      <React.Fragment key={`fragment-${index}`}>
                        {syntaxHighlighter}
                        <img key={`img-${index}`} src={line} />
                      </React.Fragment>
                    );
                  } else if (line.startsWith(pythonCSVPrefix)) {
                    const syntaxHighlighter =
                      normalTextBuffer.length > 0 ? (
                        <RenderOutput
                          key={`code-${index}`}
                          code={normalTextBuffer.join("\n")}
                        />
                      ) : null;
                    normalTextBuffer = [];

                    const { fileName, csvContent } = getCSVContents(line);
                    const file = getCsvFile({
                      filename: fileName,
                      csvContent,
                    });
                    return (
                      <React.Fragment key={`fragment-${index}`}>
                        {syntaxHighlighter}
                        <CsvRenderer key={`csv-${index}`} file={file} />
                      </React.Fragment>
                    );
                  } else {
                    normalTextBuffer.push(line);
                    return null;
                  }
                })
                .concat(
                  normalTextBuffer.length > 0 ? (
                    <RenderOutput code={normalTextBuffer.join("\n")} />
                  ) : null
                );
            })()}
          </>
        ) : defaultOutput ? (
          <>
            <RenderOutput code={defaultOutput} />
          </>
        ) : (
          <></>
        )}

        {executeCodeDetails.error && (
          <div>
            <p>Execute Code Error: </p>
            <p>{executeCodeDetails.error}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default SyntaxHighlighter;

interface RenderOutputProps {
  code: string;
}
const RenderOutput: React.FC<RenderOutputProps> = ({ code }) => {
  return (
    <SyntaxHighlighter
      key="final-code"
      code={code}
      language={"run output"}
      isCodeOutput={true}
    />
  );
};

interface CodeButtonProps {
  onClick?: () => void;
  children: any;
  disabled?: boolean;
  active?: boolean;
}
const CodeButton: React.FC<CodeButtonProps> = ({
  onClick,
  children,
  disabled,
  active,
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        "text-white text-xs border border-white rounded-md px-2 flex items-center gap-2 py-1",
        active && "bg-white text-black"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
