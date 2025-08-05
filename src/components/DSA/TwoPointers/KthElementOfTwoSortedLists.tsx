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

interface KthElementOfTwoSortedListsProps {}
const KthElementOfTwoSortedLists: React.FC<
  KthElementOfTwoSortedListsProps
> = ({}) => {
  return (
    <Container>
      <Heading>Kth element of two sorted lists</Heading>
      <PracticeLinks workattech="kth-two-sorted" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given two sorted arrays A and B, and another value k, print the kth
            element of the resultant sorted array.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
A: [1, 2, 3, 4, 5, 6]
B: [3, 4, 4, 5, 6, 6]
Result: [1, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6]
3rd element in the array is 3.
6th element in the array is 4.
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            A simple solution is to merge the two arrays, sort the array and
            return the Kth element.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O((m + n).(log(m + n)))",
              "Space Complexity: O(m + n)",
            ]}
          />
          <Paragraph>where m and n are the size of the two arrays.</Paragraph>
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/two_pointers/kth_element_of_two_sorted_lists/naive/kth_element_of_two_sorted_lists.py"
            cppFile="/dsa/two_pointers/kth_element_of_two_sorted_lists/naive/kth_element_of_two_sorted_lists.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default KthElementOfTwoSortedLists;
