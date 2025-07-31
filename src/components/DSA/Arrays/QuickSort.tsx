"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Heading from "@/components/Shared/Heading";
import PracticeLinks from "@/components/Shared/PracticeLinks";

interface QuickSortProps {}
const QuickSort: React.FC<QuickSortProps> = ({}) => {
  return (
    <div>
      <Heading>Quick Sort</Heading>
      <PracticeLinks leetcode="sort-an-array" />
      <CodeFetcher
        pythonFile="/dsa/arrays/quick_sort/sol/quick_sort.py"
        cppFile="/dsa/arrays/quick_sort/sol/quick_sort.cpp"
      />
    </div>
  );
};
export default QuickSort;
