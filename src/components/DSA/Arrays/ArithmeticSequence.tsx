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
interface ArithmeticSequenceProps {}
const ArithmeticSequence: React.FC<ArithmeticSequenceProps> = ({}) => {
  return (
    <Container>
      <Heading>Arithmetic Sequence</Heading>
      <PracticeLinks workattech="arithmetic-sequence" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            An Arithmetic progression (AP) or arithmetic sequence is a sequence
            of numbers such that the difference between the consecutive terms is
            constant. For instance, the sequence 5, 7, 9, 11, 13, 15, . . . is
            an arithmetic progression with a common difference of 2.
          </Paragraph>
          <Paragraph>
            Given an unsorted array, find if it can be reordered to form an
            arithmetic sequence.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
Array: [9, 13, 5, 15, 7, 11]
Answer: true
Explanation: This can be reordered to [5, 7, 9, 11, 13, 15] or [15, 13, 11, 9, 7, 5] both of which are arithmetic sequences.
            `,
              `\
Array: [1, 1, 1]
Answer: true
Explanation: This is an arithmetic sequence with a difference 0.`,
              `\
Array: [4, 1, 2]
Answer: false
Explanation: This cannot be reordered to form an arithmetic sequence.`,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            We sort the array. Then we calculate common difference for each
            consecutive pair of elements. If at any point two different common
            difference (D) is encountered return false otherwise return true.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n * log(n)", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/arithmetic_sequence/optimal/arithmetic_sequence.py"
            cppFile="/dsa/arrays/arithmetic_sequence/optimal/arithmetic_sequence.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default ArithmeticSequence;
