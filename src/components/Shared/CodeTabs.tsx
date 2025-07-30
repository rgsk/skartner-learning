"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocalStorage } from "@uidotdev/usehooks";
import SyntaxHighlighter from "../Shared/SyntaxHighlighter";

interface CodeTabsProps {
  python: {
    code: string;
    output: string;
  };
  cpp?: {
    code: string;
    output: string;
  };
}
const CodeTabs: React.FC<CodeTabsProps> = ({ python, cpp }) => {
  const [preferredTab, setPreferredTab] = useLocalStorage<"Python" | "C++">(
    "preferredTab",
    "Python"
  );

  return (
    <div className="my-[20px]">
      <Tabs
        value={preferredTab}
        onValueChange={(v) => setPreferredTab(v as any)}
      >
        <TabsList>
          <TabsTrigger value="Python">Python</TabsTrigger>
          {cpp && <TabsTrigger value="C++">C++</TabsTrigger>}
        </TabsList>
        <TabsContent value="Python">
          <SyntaxHighlighter
            isCodeOutput={false}
            language="python"
            defaultOutput={python.output}
            code={python.code}
          />
        </TabsContent>
        {cpp && (
          <TabsContent value="C++">
            <SyntaxHighlighter
              isCodeOutput={false}
              language="cpp"
              defaultOutput={cpp.output}
              code={cpp.code}
            />
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};
export default CodeTabs;
