"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useLocalStorageState from "@/hooks/useLocalStorageState";
import SyntaxHighlighter from "../Shared/SyntaxHighlighter";
interface CodeTabsProps {
  python?: {
    code: string;
    output: string;
  };
  cpp?: {
    code: string;
    output: string;
  };
  typescript?: {
    code: string;
    output: string;
  };
}
const CodeTabs: React.FC<CodeTabsProps> = ({ python, cpp, typescript }) => {
  const availableTabs: {
    label: "Python" | "C++" | "TypeScript";
    exists: boolean;
  }[] = [
    { label: "Python", exists: !!python },
    { label: "C++", exists: !!cpp },
    { label: "TypeScript", exists: !!typescript },
  ];

  const defaultTab = availableTabs.find((tab) => tab.exists)?.label;

  const [preferredTab, setPreferredTab] = useLocalStorageState<
    "Python" | "C++" | "TypeScript"
  >("preferredTab", defaultTab ?? "Python");

  if (!defaultTab) return null; // No tabs to render

  const activeTab = availableTabs.some(
    (tab) => tab.label === preferredTab && tab.exists
  )
    ? preferredTab
    : defaultTab;

  return (
    <div>
      <Tabs value={activeTab} onValueChange={(v) => setPreferredTab(v as any)}>
        <TabsList>
          {python && <TabsTrigger value="Python">Python</TabsTrigger>}
          {cpp && <TabsTrigger value="C++">C++</TabsTrigger>}
          {typescript && (
            <TabsTrigger value="TypeScript">TypeScript</TabsTrigger>
          )}
        </TabsList>
        {python && (
          <TabsContent value="Python">
            <SyntaxHighlighter
              isCodeOutput={false}
              language="python"
              defaultOutput={python.output}
              code={python.code}
            />
          </TabsContent>
        )}
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
        {typescript && (
          <TabsContent value="TypeScript">
            <SyntaxHighlighter
              isCodeOutput={false}
              language="typescript"
              defaultOutput={typescript.output}
              code={typescript.code}
            />
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};
export default CodeTabs;
