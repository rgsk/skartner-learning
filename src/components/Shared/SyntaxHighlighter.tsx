/* eslint-disable @next/next/no-img-element */
"use client";
import CsvRenderer from "@/components/Shared/CsvRenderer";
import { LoadingSpinner } from "@/components/Shared/LoadingSpinner";
import {
  getCSVContents,
  pythonCSVPrefix,
  pythonImagePrefix,
} from "@/hooks/codeRunners/usePythonRunner";
import Editor from "@monaco-editor/react";
import { Check, Copy, Play, RotateCcw } from "lucide-react";
import React, { useMemo, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

import useCodeRunners, {
  CodeRunnerSupportedLanguages,
  codeRunnerSupportedLanguages,
} from "@/hooks/codeRunners/useCodeRunners";
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
  const { loading: codeRunnersLoading, runCode } = useCodeRunners();
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
  const [testsBlockExpanded, setTestsBlockExpanded] = useState(false);
  const [code, setCode] = useState(initialCode);
  const [disabledPointerEvents, setDisabledPointerEvents] = useState(true);

  const codeRef = useRef(code);
  codeRef.current = code;
  const { copied, copiedText, copy } = useCopyToClipboard();

  const [editorContentHeight, setEditorContentHeight] = useState(0);

  const { currentExecuteCodeRef } = useGlobalContext();

  const executeCode = async () => {
    if (code) {
      if (codeRunnerSupportedLanguages.includes(language)) {
        setExecuteCodeDetails({ loading: true, output: "", error: "" });
        try {
          const output = await runCode({
            code,
            language: language as CodeRunnerSupportedLanguages,
          });
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
  const allowCodeRunning =
    !isCodeOutput && codeRunnerSupportedLanguages.includes(language);

  const codeWithoutImportsAndTests = useMemo(() => {
    if (!code) return code;
    const cleaned = code.replace(rx, "");
    return cleaned;
  }, [code]);
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
              {codeWithoutImportsAndTests !== code ? (
                <>
                  <CodeButton
                    onClick={() => {
                      if (!codeWithoutImportsAndTests) return;

                      copy(codeWithoutImportsAndTests);
                    }}
                  >
                    {copied && copiedText === codeWithoutImportsAndTests ? (
                      <Check size={12} />
                    ) : (
                      <Copy size={12} />
                    )}
                    {md && (
                      <span>
                        {copied && copiedText === codeWithoutImportsAndTests
                          ? "Copied!"
                          : "Copy Solution"}
                      </span>
                    )}
                  </CodeButton>
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
                        {copied && copiedText === code
                          ? "Copied!"
                          : "Copy with Tests"}
                      </span>
                    )}
                  </CodeButton>
                </>
              ) : (
                <>
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
                </>
              )}

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
                      disabled={
                        codeRunnersLoading || executeCodeDetails.loading
                      }
                      onClick={executeCode}
                    >
                      {executeCodeDetails.loading ? (
                        <LoadingSpinner size={12} />
                      ) : (
                        <Play size={12} />
                      )}
                      {md && <span>Run</span>}
                    </CodeButton>
                  </>
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
                handleTestBlockCollapse(editor, monaco, setTestsBlockExpanded);

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
                        <img key={`img-${index}`} src={line} alt="hi" />
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
          <>{testsBlockExpanded && <RenderOutput code={defaultOutput} />}</>
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
      language={"output"}
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
        "text-white cursor-pointer text-xs border border-white rounded-md px-2 flex items-center gap-2 py-1",
        active && "bg-white text-black",
        "disabled:cursor-not-allowed"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
const rx =
  /(#|\/\/)\s*(?:imports|tests|defs)-start[\s\S]*?\1\s*(?:imports|tests|defs)-end/g;

const handleTestBlockCollapse = (
  editor: any,
  monaco: any,
  setTestsBlockExpanded: any
) => {
  // find your custom regions exactly
  function findCustomBlocks(model: any) {
    const text = model.getValue();
    let m: RegExpExecArray | null;
    const blocks: { start: number; end: number }[] = [];

    while ((m = rx.exec(text))) {
      const start = model.getPositionAt(m.index).lineNumber;
      const end = model.getPositionAt(m.index + m[0].length).lineNumber;
      if (end - start > 1) {
        blocks.push({ start: start - 1, end: end + 1 });
      }
    }
    return blocks;
  }

  const model = editor.getModel()!;
  const blocks = findCustomBlocks(model);
  const collapsed = new Set<number>(blocks.map((_, i) => i));

  function renderCollapseUI() {
    // 1) HIDE the inner lines of each collapsed block
    const hiddenAreas = blocks
      .map((b, i) =>
        collapsed.has(i)
          ? { startLineNumber: b.start + 1, endLineNumber: b.end - 1 }
          : null
      )
      .filter((r): r is any => !!r);

    editor.setHiddenAreas(hiddenAreas);

    // 2) REMOVE any existing widgets
    const oldWidgets = (editor as any)._myCollapseWidgets || [];
    oldWidgets.forEach((w: any) => editor.removeContentWidget(w));
    editor.setHiddenAreas(hiddenAreas);

    // 3) ADD new widgets
    const newWidgets: any[] = [];
    blocks.forEach((b, i) => {
      const dom = document.createElement("button");
      dom.textContent = collapsed.has(i) ? "➡️" : "⬇️";
      dom.style.background = "transparent";
      dom.style.border = "none";
      dom.style.padding = "0";
      dom.style.margin = "0";
      dom.style.width = "24px";
      dom.style.height = "18px"; // match editor line height
      dom.style.display = "flex";
      dom.style.alignItems = "center";
      dom.style.justifyContent = "center";
      dom.style.cursor = "pointer";
      dom.style.userSelect = "none";
      dom.style.color = "white";

      dom.onclick = () => {
        if (collapsed.has(i)) {
          collapsed.delete(i);
          setTestsBlockExpanded(true);
        } else {
          collapsed.add(i);
          setTestsBlockExpanded(false);
        }
        renderCollapseUI();
      };

      const widget = {
        getId: () => `collapse-widget-${i}`,
        getDomNode: () => dom,
        getPosition: () => ({
          position: { lineNumber: b.start, column: 1 },
          preference: [monaco.editor.ContentWidgetPositionPreference.EXACT],
        }),
      };

      editor.addContentWidget(widget);
      newWidgets.push(widget);
    });

    // stash for next removal
    (editor as any)._myCollapseWidgets = newWidgets;
  }

  editor.onDidChangeModelContent(renderCollapseUI);
  renderCollapseUI();
};
