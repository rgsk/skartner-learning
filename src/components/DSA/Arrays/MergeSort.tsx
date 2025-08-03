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

interface MergeSortProps {}
const MergeSort: React.FC<MergeSortProps> = ({}) => {
  return (
    <Container>
      <Heading>Implement Merge Sort</Heading>
      <PracticeLinks
        leetcode="sort-an-array"
        workattech="implement-merge-sort"
      />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>Given an array, sort it using merge sort.</Paragraph>
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
          <Paragraph>
            Merge sort is a divide and conquer algorithm. It divides the given
            array into two halves, sorts the two halves recursively and then
            merges them to create a new sorted array.
          </Paragraph>
          <Paragraph>
            Note: A sub-array having only one element is considered to be
            sorted.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n * log(n))",
              "Auxiliary Space Complexity: O(n)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/merge_sort/sol/merge_sort.py"
            cppFile="/dsa/arrays/merge_sort/sol/merge_sort.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="dDnWNkw6Iq8" />
      </Section>
    </Container>
  );
};
export default MergeSort;
