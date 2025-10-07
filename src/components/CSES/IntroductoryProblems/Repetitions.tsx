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
interface RepetitionsProps {}
const Repetitions: React.FC<RepetitionsProps> = ({}) => {
  return (
    <Container>
      <Heading>Repetitions</Heading>
      <PracticeLinks cses="1069" />
      <Problem>
        <TaskConstraints time="1.00 s" memory="512 MB" />
        <Section>
          <Paragraph>
            You are given a DNA sequence: a string consisting of characters A,
            C, G, and T. Your task is to find the longest repetition in the
            sequence. This is a maximum-length substring containing only one
            type of character.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Input</SubHeading>
          <Paragraph>
            The only input line contains a string of n characters.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Output</SubHeading>
          <Paragraph>
            Print one integer: the length of the longest repetition.
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
ATTCGGGA

Output:
3
`,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach 1</SubHeading>
          <Paragraph>
            In this approach we traverse the string from left to right, keeping
            track of how many times the same character appears consecutively.
            Whenever the character changes, we updates the maximum length found
            so far and reset the counter. In the end, the largest count
            represents the longest repetition in the sequence.
          </Paragraph>
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/introductory-problems/repetitions/approach_1/repetitions.cpp"
            pythonFile="/cses/introductory-problems/repetitions/approach_1/repetitions.py"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Approach 2</SubHeading>
          <Paragraph>
            It tracks the start index of each such sequence (last_index) and
            updates max_same whenever the character changes.
          </Paragraph>
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/introductory-problems/repetitions/approach_2/repetitions.cpp"
            pythonFile="/cses/introductory-problems/repetitions/approach_2/repetitions.py"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default Repetitions;
