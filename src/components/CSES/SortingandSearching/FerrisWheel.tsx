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
interface FerrisWheelProps {}
const FerrisWheel: React.FC<FerrisWheelProps> = ({}) => {
  return (
    <Container>
      <Heading>Ferris Wheel</Heading>
      <PracticeLinks cses="1090" />
      <Problem>
        <TaskConstraints time="1.00 s" memory="512 MB" />
        <Section>
          <Paragraph
            text={String.raw`There are $n$ children who want to go to a Ferris wheel, and your task is to find a gondola for each child.`}
          ></Paragraph>
          <Paragraph
            text={String.raw`Each gondola may have one or two children in it, and in addition, the total weight in a gondola may not exceed $x$. You know the weight of every child.`}
          ></Paragraph>
          <Paragraph
            text={String.raw`What is the minimum number of gondolas needed for the children?`}
          ></Paragraph>
        </Section>
        <Section>
          <SubHeading>Input</SubHeading>
          <Paragraph
            text={String.raw`
            The first input line contains two integers $n$ and $x:$ the number of children and the maximum allowed weight.
            `}
          />
          <Paragraph
            text={String.raw`The next line contains $n$ integers $p_1,p_2,\ldots,p_n:$ the weight of each child.`}
          ></Paragraph>
        </Section>
        <Section>
          <SubHeading>Output</SubHeading>
          <Paragraph
            text={String.raw`Print one integer: the minimum number of gondolas.`}
          />
        </Section>
        <Section>
          <SubHeading>Constraints</SubHeading>
          <UnorderedList
            items={[
              String.raw`$1 \le n \le 2 \cdot 10^5$`,
              String.raw`$1 \le x \le 10^9$`,
              String.raw`$1 \le p_i \le x$`,
            ]}
          />
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Input:
4 10
7 2 3 9

Output:
3
`,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph
            text={String.raw`
            We solve this problem using a two-pointer greedy approach. It sorts
            the children’s weights and uses two pointers — one starting from the
            lightest (\`l\`) and one from the heaviest (\`r\`). If the lightest and
            heaviest child together fit within the weight limit \`x\`, they share a
            gondola; otherwise, the heavier child goes alone.
            `}
          ></Paragraph>
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/sorting-and-searching/ferris-wheel/approach/ferris-wheel.cpp"
            pythonFile="/cses/sorting-and-searching/ferris-wheel/approach/ferris-wheel.py"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default FerrisWheel;
