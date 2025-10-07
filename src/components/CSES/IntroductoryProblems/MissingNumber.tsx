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
import TaskConstraints from "../Common/TaskConstraints";
interface MissingNumberProps {}
const MissingNumber: React.FC<MissingNumberProps> = ({}) => {
  return (
    <Container>
      <Heading>Missing Number</Heading>
      <PracticeLinks cses="1083" />
      <Problem>
        <TaskConstraints time="1.00 s" memory="512 MB" />
        <Section>
          <Paragraph
            text={String.raw`
            You are given all numbers between $1,2,\ldots,n$ except one. Your task is to find the missing number.
            `}
          ></Paragraph>
        </Section>
        <Section>
          <SubHeading>Input</SubHeading>
          <Paragraph
            text={String.raw`The first input line contains an integer $n$.`}
          ></Paragraph>
          <Paragraph
            text={String.raw`
            The second line contains $n-1$ numbers. Each number is distinct and
            between $1$ and $n$ (inclusive).
            `}
          ></Paragraph>
        </Section>
        <Section>
          <SubHeading>Output</SubHeading>
          <Paragraph>Print the missing number.</Paragraph>
        </Section>
        <Section>
          <SubHeading>Constraints</SubHeading>
          <UnorderedList items={[String.raw`$2 \le n \le 2 \cdot 10^5$`]} />
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Input:
5
2 3 1 5

Output:
4
`,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>XOR Approach</SubHeading>
          <Paragraph>
            Because XOR of two identical numbers cancels out (a ^ a = 0), all
            pairs cancel, leaving only the missing number.
          </Paragraph>
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            cppFile="/cses/introductory-problems/missing-number/xor-approach/missing-number.cpp"
            pythonFile="/cses/introductory-problems/missing-number/xor-approach/missing-number.py"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default MissingNumber;
