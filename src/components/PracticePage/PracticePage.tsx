"use client";
import CodeFetcher from "../Shared/CodeFetcher";

interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div>
      <CodeFetcher
        pythonFile="/dsa/arrays/merge_sort/sol/merge_sort.py"
        typescriptFile="/dsa/arrays/merge_sort/sol/merge_sort.ts"
        cppFile="/dsa/arrays/merge_sort/sol/merge_sort.cpp"
      />
    </div>
  );
};
export default PracticePage;
