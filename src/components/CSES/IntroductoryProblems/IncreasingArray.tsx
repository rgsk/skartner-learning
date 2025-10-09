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
interface IncreasingArrayProps {}
const IncreasingArray: React.FC<IncreasingArrayProps> = ({}) => {
  return (
    <Container>
      <Heading>Increasing Array</Heading>
      <PracticeLinks cses="1094" />
      <Problem>
        <TaskConstraints time="1.00 s" memory="512 MB" />
        <Section>
          <Paragraph>
            You are given an array of $n$ integers. You want to modify the array
            so that it is increasing, i.e., every element is at least as large
            as the previous element.
          </Paragraph>
          <Paragraph>
            On each move, you may increase the value of any element by one. What
            is the minimum number of moves required?
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Input</SubHeading>
          <Paragraph>
            The first input line contains an integer $n$: the size of the array.
          </Paragraph>
          <Paragraph>
            Then, the second line contains $n$ integers $x_1,x_2,\ldots,x_n$:
            the contents of the array.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Output</SubHeading>
          <Paragraph>Print the minimum number of moves.</Paragraph>
        </Section>
        <Section>
          <SubHeading>Constraints</SubHeading>
          <UnorderedList
            items={[
              <Paragraph key={1}>$1 \le n \le 2 \cdot 10^5$</Paragraph>,
              <Paragraph key={1}>$1 \le x_i \le 10^9$</Paragraph>,
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
3 2 5 1 7

Output:
5
`,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            The code ensures the array becomes non-decreasing by iterating
            through it and increasing any element smaller than the previous one.
            For each such case, it adds the difference to a counter (ops) and
            updates the element to match the previous value. The total number of
            increments (ops) is then printed as the minimum required moves.
          </Paragraph>
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/introductory-problems/increasing-array/approach/increasing-array.cpp"
            pythonFile="/cses/introductory-problems/increasing-array/approach/increasing-array.py"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default IncreasingArray;
