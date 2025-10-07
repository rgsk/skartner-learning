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
interface WeirdAlgorithmProps {}
const WeirdAlgorithm: React.FC<WeirdAlgorithmProps> = ({}) => {
  return (
    <Container>
      <Heading>Weird Algorithm</Heading>
      <PracticeLinks cses="1068" />
      <Problem>
        <TaskConstraints time="1.00 s" memory="512 MB" />
        <Section>
          <Paragraph>
            Consider an algorithm that takes as input a positive integer n. If n
            is even, the algorithm divides it by two, and if n is odd, the
            algorithm multiplies it by three and adds one. The algorithm repeats
            this, until n is one. For example, the sequence for n=3 is as
            follows:
          </Paragraph>
          <Paragraph
            text={String.raw`
            $3 \rightarrow 10 \rightarrow 5 \rightarrow 16 \rightarrow 8 \rightarrow 4 \rightarrow 2 \rightarrow 1$
            `}
          ></Paragraph>
          <Paragraph>
            Your task is to simulate the execution of the algorithm for a given
            value of n.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Input</SubHeading>
          <Paragraph>The only input line contains an integer n.</Paragraph>
        </Section>
        <Section>
          <SubHeading>Output</SubHeading>
          <Paragraph>
            Print a line that contains all values of n during the algorithm.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Constraints</SubHeading>
          <UnorderedList items={[String.raw`$1 \le n \le 10^6$`]} />
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Input:
3

Output:
3 10 5 16 8 4 2 1
`,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            Perform the steps as mentioned in the problem and print n at each
            step.
          </Paragraph>
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/introductory-problems/weird-algorithm/approach/weird-algorithm.cpp"
            pythonFile="/cses/introductory-problems/weird-algorithm/approach/weird-algorithm.py"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default WeirdAlgorithm;
