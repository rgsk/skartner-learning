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

interface SquareSortedArrayProps {}
const SquareSortedArray: React.FC<SquareSortedArrayProps> = ({}) => {
  return (
    <Container>
      <Heading>Square Sorted Array</Heading>
      <PracticeLinks workattech="square-sorted-array" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given an array of numbers, return an array that contains the squares
            of all the numbers in non-decreasing order.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
            Array: [6, -8, 3, -1, 4]
            Answer: [1, 9, 16, 36, 64]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            First, all elements of the array can be squared and then sorted.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n * log(n))", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/square_sorted_array/optimal/square_sorted_array.py"
            cppFile="/dsa/arrays/square_sorted_array/optimal/square_sorted_array.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default SquareSortedArray;
