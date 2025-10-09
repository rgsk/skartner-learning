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
interface DistinctNumbersProps {}
const DistinctNumbers: React.FC<DistinctNumbersProps> = ({}) => {
  return (
    <Container>
      <Heading>Distinct Numbers</Heading>
      <PracticeLinks cses="1621" />
      <Problem>
        <TaskConstraints time="1.00 s" memory="512 MB" />
        <Section>
          <Paragraph
            text={String.raw`You are given a list of $n$ integers, and your task is to calculate the number of <i>distinct</i> values in the list.`}
          ></Paragraph>
        </Section>
        <Section>
          <SubHeading>Input</SubHeading>
          <Paragraph
            text={String.raw`
            The first input line has an integer $n:$ the number of values.
            `}
          />
          <Paragraph
            text={String.raw`The second line has $n$ integers $x_1,x_2,\dots,x_n.$`}
          ></Paragraph>
        </Section>
        <Section>
          <SubHeading>Output</SubHeading>
          <Paragraph
            text={String.raw`Print one integer: the number of distinct values.`}
          />
        </Section>
        <Section>
          <SubHeading>Constraints</SubHeading>
          <UnorderedList
            items={[
              String.raw`$1 \le n \le 2 \cdot 10^5$`,
              String.raw`$1 \le x_i \le 10^9$`,
            ]}
          />
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Input:
5
2 3 2 2 3

Output:
2
`,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            This program reads n integers, sorts them, and counts how many
            unique values appear in the list. After sorting, equal numbers are
            grouped together, so by comparing each element with the previous
            one, the program increments a counter only when a new distinct value
            is found. Finally, it prints the total count of distinct numbers.
          </Paragraph>
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/sorting-and-searching/distinct-numbers/approach/distinct-numbers.cpp"
            pythonFile="/cses/sorting-and-searching/distinct-numbers/approach/distinct-numbers.py"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default DistinctNumbers;
