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

interface SortedArraysIntersectionProps {}
const SortedArraysIntersection: React.FC<
  SortedArraysIntersectionProps
> = ({}) => {
  return (
    <Container>
      <Heading>Sorted Arrays Intersection</Heading>
      <PracticeLinks workattech="sorted-arrays-intersection" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given 2 sorted arrays, return the intersection of both the arrays.
            The intersection of 2 arrays means all the elements which are
            present in both.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Array 1: [1, 3, 4, 5, 5, 6, 6, 7]
Array 2: [2, 5, 6, 6, 7, 8]
Intersection: [5, 6, 6, 7]
            `,
            ]}
          />
          <Paragraph>
            Note: The resultant array should also be sorted.
          </Paragraph>
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            We use the two-pointer technique to solve this problem efficiently
            in a single pass, without using extra space.
          </Paragraph>
          <Paragraph>Steps: </Paragraph>
          <UnorderedList
            items={[
              "We use two pointers (`i` for `A`, `j` for `B`) to traverse both arrays simultaneously.",
              "If `A[i] < B[j]`, to find a match, we need to reach bigger element in A, so move `i` forward",
              "If `B[j] < A[i]`, to find a match, we need to reach bigger element in B, so move `j` forward",
              "Else: `A[i] == B[j]`, so we add the value to result, and move both pointers forward",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n)", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/two_pointers/sorted_arrays_intersection/optimal/sorted_arrays_intersection.py"
            cppFile="/dsa/two_pointers/sorted_arrays_intersection/optimal/sorted_arrays_intersection.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default SortedArraysIntersection;
