"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Heading from "@/components/Shared/Heading";
import PracticeLinks from "@/components/Shared/PracticeLinks";

interface QuickSortProps {}
const QuickSort: React.FC<QuickSortProps> = ({}) => {
  return (
    <div>
      <Heading>Implement Quicksort</Heading>
      <PracticeLinks
        leetcode="sort-an-array"
        workattech="implement-quicksort"
      />
      <CodeFetcher
        pythonFile="/dsa/arrays/quick_sort/sol/quick_sort.py"
        cppFile="/dsa/arrays/quick_sort/sol/quick_sort.cpp"
      />
    </div>
  );
};
export default QuickSort;
