import { useFetchPublicFile } from "@/hooks/useFetchPublicFile";
import CodeTabs from "./CodeTabs";
import { LoadingSpinner } from "./LoadingSpinner";

interface CodeFetcherProps {
  pythonFile?: string;
  typescriptFile?: string;
  cppFile?: string;
}

const CodeFetcher: React.FC<CodeFetcherProps> = ({
  pythonFile,
  typescriptFile,
  cppFile,
}) => {
  const pythonFetchResult = useFetchPublicFile(pythonFile);
  const typescriptFetchResult = useFetchPublicFile(typescriptFile);
  const cppFetchResult = useFetchPublicFile(cppFile);
  if (
    pythonFetchResult.loading ||
    typescriptFetchResult.loading ||
    cppFetchResult.loading
  ) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <CodeTabs
        python={extractLastOutputBlock(pythonFetchResult.fileContent)}
        typescript={extractLastOutputBlock(typescriptFetchResult.fileContent)}
        cpp={extractLastOutputBlock(cppFetchResult.fileContent)}
      />
    </div>
  );
};
export default CodeFetcher;

function extractLastOutputBlock(content?: string) {
  if (!content) return undefined;
  const patterns = [
    /''' *output\s*([\s\S]*?)\s*'''/g,
    /""" *output\s*([\s\S]*?)\s*"""/g,
    /\/\* *output\s*([\s\S]*?)\s*\*\//g,
  ];

  let lastMatch = null;
  let lastIndex = -1;
  let lastLength = 0;

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      lastMatch = match[1].trim();
      lastIndex = match.index;
      lastLength = match[0].length;
    }
  }

  if (lastMatch !== null) {
    const code = content.slice(0, lastIndex).trim();
    return { code, output: lastMatch };
  } else {
    return { code: content.trim(), output: "" };
  }
}
