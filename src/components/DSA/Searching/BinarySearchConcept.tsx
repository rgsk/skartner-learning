"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Heading from "@/components/Shared/Heading";
import PracticeLinks from "@/components/Shared/PracticeLinks";

interface BinarySearchConceptProps {}
const BinarySearchConcept: React.FC<BinarySearchConceptProps> = ({}) => {
  return (
    <div>
      <Heading>Binary Search Concept</Heading>
      <PracticeLinks leetcode="binary-search" />
      <CodeFetcher
        pythonFile="/dsa/searching/binary_search_concept/sol/binary_search.py"
        typescriptFile="/dsa/searching/binary_search_concept/sol/binary_search.ts"
        cppFile="/dsa/searching/binary_search_concept/sol/binary_search.cpp"
      />
    </div>
  );
};
export default BinarySearchConcept;
