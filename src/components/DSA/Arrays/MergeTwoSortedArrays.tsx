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

interface MergeTwoSortedArraysProps {}
const MergeTwoSortedArrays: React.FC<MergeTwoSortedArraysProps> = ({}) => {
  return (
    <Container>
      <Heading>Merge Two Sorted Arrays</Heading>
      <PracticeLinks
        workattech="merge-two-sorted-arrays"
        leetcode="merge-sorted-array"
      />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given two sorted arrays A and B, find the merged sorted array C by
            merging A and B.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
            A: [1, 2, 3, 4, 4]
            B: [2, 4, 5, 5]
            C: [1, 2, 2, 3, 4, 4, 4, 5, 5]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            Take a third array C of size equal to the sum size of given arrays,
            A and B. Insert all the elements of A and B in the array C, and sort
            array C.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O((m + n) * log (m + n))",
              "Auxiliary Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/merge_two_sorted_arrays/naive/merge_two_sorted_arrays.py"
            cppFile="/dsa/arrays/merge_two_sorted_arrays/naive/merge_two_sorted_arrays.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            We will simultaneously traverse array A and B, pick the smaller of
            current elements and push it in array C, and move that pointer ahead
            by one. Finally, if there are remaining elements in either of the
            arrays, push them into array C.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(m + n)",
              "Auxiliary Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/merge_two_sorted_arrays/optimal/merge_two_sorted_arrays.py"
            cppFile="/dsa/arrays/merge_two_sorted_arrays/optimal/merge_two_sorted_arrays.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="Mmsi956c7r8" />
      </Section>
    </Container>
  );
};
export default MergeTwoSortedArrays;
