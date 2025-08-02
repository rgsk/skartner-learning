"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Examples from "@/components/Shared/Examples";
import Heading from "@/components/Shared/Heading";
import MinorHeading from "@/components/Shared/MinorHeading";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Problem from "@/components/Shared/Problem";
import Section from "@/components/Shared/Section";
import Solution from "@/components/Shared/Solution";
import SubHeading from "@/components/Shared/SubHeading";
import UnorderedList from "@/components/Shared/UnorderedList";

interface QuickSortProps {}
const QuickSort: React.FC<QuickSortProps> = ({}) => {
  return (
    <Container>
      <Heading>Implement Quicksort</Heading>
      <PracticeLinks
        leetcode="sort-an-array"
        workattech="implement-quicksort"
      />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>Given an array, sort it using quick sort.</Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
            Input: nums = [5,2,3,1]
            Output: [1,2,3,5]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>Quicksort is a divide and conquer algorithm.</Paragraph>
          <UnorderedList
            items={[
              "The basic idea is to divide the array into two parts about an element(say pivot point) such that the pivoted element is at the same position as the sorted array and all elements before the pivot point are less than the pivoted element and all elements after the pivot point are greater than or equal to the pivoted element.",
              "Both the parts will be called recursively and the above process will be repeated. In this way, the array will break further until each partition becomes sorted.",
            ]}
          />
          <Paragraph>
            Note: Here, the last element of the partition is used as the pivoted
            element.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              {
                text: "Time Complexity",
                children: [
                  "Best Case: O(n * log(n))",
                  "Average Case: O(n * log(n))",
                  "Worst Case: O(n<sup>2</sup>)",
                ],
              },
              "Auxiliary Space Complexity: O(log(n))",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/quick_sort/sol/quick_sort.py"
            cppFile="/dsa/arrays/quick_sort/sol/quick_sort.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default QuickSort;
