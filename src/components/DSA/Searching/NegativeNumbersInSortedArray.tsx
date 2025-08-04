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
interface NegativeNumbersInSortedArrayProps {}
const NegativeNumbersInSortedArray: React.FC<
  NegativeNumbersInSortedArrayProps
> = ({}) => {
  return (
    <Container>
      <Heading>Negative numbers in sorted array</Heading>
      <PracticeLinks workattech="negative-numbers-in-sorted-array" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a sorted array of integers, find the number of negative
            numbers.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
Array: [-5, -3, -2, 3, 4, 6, 7, 8]
Answer: 3
            `,
              `\
Array: [0, 1, 2, 3, 4, 6, 7, 8]
Answer: 0
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            A simple solution is to just iterate the array and keep the count of
            the numbers that are negative.
          </Paragraph>
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
            pythonFile="/dsa/searching/negative_numbers_in_sorted_array/naive/negative_numbers_in_sorted_array.py"
            cppFile="/dsa/searching/negative_numbers_in_sorted_array/naive/negative_numbers_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>We use left binary search.</Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(log(n))", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/searching/negative_numbers_in_sorted_array/optimal/negative_numbers_in_sorted_array.py"
            cppFile="/dsa/searching/negative_numbers_in_sorted_array/optimal/negative_numbers_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Library Approach</SubHeading>
          <Paragraph>We use bisect_left or lower bound.</Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(log(n))", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/searching/negative_numbers_in_sorted_array/lib/negative_numbers_in_sorted_array.py"
            cppFile="/dsa/searching/negative_numbers_in_sorted_array/lib/negative_numbers_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default NegativeNumbersInSortedArray;
