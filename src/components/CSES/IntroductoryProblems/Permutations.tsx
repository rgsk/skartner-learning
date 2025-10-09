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
interface PermutationsProps {}
const Permutations: React.FC<PermutationsProps> = ({}) => {
  return (
    <Container>
      <Heading>Permutations</Heading>
      <PracticeLinks cses="1070" />
      <Problem>
        <TaskConstraints time="1.00 s" memory="512 MB" />
        <Section>
          <Paragraph
            text={String.raw`A permutation of integers $1,2,\ldots,n$ is called beautiful if there are no adjacent elements whose difference is $1.$`}
          ></Paragraph>
          <Paragraph
            text={String.raw`
            Given $n$, construct a beautiful permutation if such a permutation exists.
            `}
          />
        </Section>
        <Section>
          <SubHeading>Input</SubHeading>
          <Paragraph
            text={String.raw`The only input line contains an integer $n.$`}
          ></Paragraph>
        </Section>
        <Section>
          <SubHeading>Output</SubHeading>{" "}
          <Paragraph
            text={String.raw`
            Print a beautiful permutation of integers $1,2,\ldots,n$. If there are several solutions, you may print any of them. If there are no solutions, print "NO SOLUTION".
            `}
          />
        </Section>
        <Section>
          <SubHeading>Constraints</SubHeading>
          <UnorderedList items={[String.raw`$1 \le n \le 10^6$`]} />
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
Input:
5

Output:
4 2 5 3 1
`,

              `\
Input:
3

Output:
NO SOLUTION
`,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>The solution works as follows:</Paragraph>
          <UnorderedList
            items={[
              "For `n = 1`, the only valid permutation is `1`.",
              `For \`n <= 3\`, it’s impossible to form a beautiful permutation, so it prints \`"NO SOLUTION"\`.`,
              "For larger `n`, it prints all even numbers first, followed by all odd numbers.",
              "This ordering ensures that adjacent numbers never differ by 1, thus forming a valid beautiful permutation.",
            ]}
          />
        </Section>

        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/introductory-problems/permutations/approach/permutations.cpp"
            pythonFile="/cses/introductory-problems/permutations/approach/permutations.py"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default Permutations;
