"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Heading from "@/components/Shared/Heading";
import PracticeLinks from "@/components/Shared/PracticeLinks";

interface MergeSortProps {}
const MergeSort: React.FC<MergeSortProps> = ({}) => {
  return (
    <div>
      <Heading>Merge Sort</Heading>
      <PracticeLinks leetcode="sort-an-array" />
      <CodeFetcher
        pythonFile="/dsa/arrays/merge_sort/sol/merge_sort.py"
        typescriptFile="/dsa/arrays/merge_sort/sol/merge_sort.ts"
        cppFile="/dsa/arrays/merge_sort/sol/merge_sort.cpp"
      />
    </div>
  );
};
export default MergeSort;
