import environmentVars from "@/lib/environmentVars";
import { useCallback } from "react";
import useCppRunner from "./useCppRunner";
import usePythonRunner from "./usePythonRunner";
import useTypeScriptRunner from "./useTypescriptRunner";
export const codeRunnerSupportedLanguages = [
  "node",
  "javascript",
  "python",
  "typescript",
  ...(environmentVars.APP_ENV === "development" ? ["cpp"] : []),
];
export type CodeRunnerSupportedLanguages =
  | "node"
  | "javascript"
  | "python"
  | "typescript"
  | "cpp";
const useCodeRunners = () => {
  const { loading: pythonRunnerLoading, runCode: runPythonCode } =
    usePythonRunner();
  const { loading: typeScriptRunnerLoading, runCode: runTypescriptCode } =
    useTypeScriptRunner();
  const { runCode: runCppCode } = useCppRunner();
  const loading = pythonRunnerLoading || typeScriptRunnerLoading;
  const runCode = useCallback(
    async ({
      code,
      language,
    }: {
      code: string;
      language: CodeRunnerSupportedLanguages;
    }) => {
      console.log({ code, language });
      if (loading) {
        throw new Error("code runners are loading");
      }
      if (language === "python") {
        return runPythonCode(code);
      } else if (
        language === "node" ||
        language === "javascript" ||
        language === "typescript"
      ) {
        return runTypescriptCode(code);
      } else if (language === "cpp") {
        return runCppCode(code);
      }
    },
    [loading, runCppCode, runPythonCode, runTypescriptCode]
  );
  return {
    loading: loading,
    runCode,
  };
};
export default useCodeRunners;
