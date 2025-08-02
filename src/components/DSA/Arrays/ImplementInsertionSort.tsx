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
import YoutubeVideo from "@/components/Shared/YoutubeVideo";

interface ImplementInsertionSortProps {}
const ImplementInsertionSort: React.FC<ImplementInsertionSortProps> = ({}) => {
  return (
    <Container>
      <Heading>Implement Insertion Sort</Heading>
      <PracticeLinks
        leetcode="sort-an-array"
        workattech="implement-insertion-sort"
      />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>Given an array, sort it using insertion sort.</Paragraph>
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
          <SubHeading>Variation 1</SubHeading>
          <Paragraph>
            In insertion sort, the basic idea is to divide the array into a
            sorted and an unsorted part. Elements from the unsorted part are
            picked one by one and placed at their correct position in the sorted
            part until the whole array is sorted.
          </Paragraph>
          <UnorderedList
            items={[
              "Iterate the array from i = 1 to i < n. Compare the i-th element to its previous elements one by one until it is less than its previous elements and keep moving the greater elements forward.",
              "Once the correct position for the i-th element is found (i.e. i-th element is greater than its previous element), place it at that position.",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n<sup>2</sup>)",
              "Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/insertion_sort/variation_1/insertion_sort.py"
            cppFile="/dsa/arrays/insertion_sort/variation_1/insertion_sort.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Variation 2</SubHeading>
          <Paragraph>
            Idea is same as Variation 1. Code is slightly different.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n<sup>2</sup>)",
              "Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/insertion_sort/variation_2/insertion_sort.py"
            cppFile="/dsa/arrays/insertion_sort/variation_2/insertion_sort.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="TOI8A8Qg0cg" />
      </Section>
    </Container>
  );
};
export default ImplementInsertionSort;
