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
interface ApartmentsProps {}
const Apartments: React.FC<ApartmentsProps> = ({}) => {
  return (
    <Container>
      <Heading>Apartments</Heading>
      <PracticeLinks cses="1084" />
      <Problem>
        <TaskConstraints time="1.00 s" memory="512 MB" />
        <Section>
          <Paragraph
            text={String.raw`There are $n$ applicants and $m$ free apartments. Your task is to distribute the apartments so that as many applicants as possible will get an apartment.`}
          ></Paragraph>
          <Paragraph
            text={String.raw`Each applicant has a desired apartment size, and they will accept any apartment whose size is close enough to the desired size.`}
          ></Paragraph>
        </Section>
        <Section>
          <SubHeading>Input</SubHeading>
          <Paragraph
            text={String.raw`
            The first input line has three integers $n, m,$ and $k:$ the number of applicants, the number of apartments, and the maximum allowed difference.
            `}
          />
          <Paragraph
            text={String.raw`The next line contains $n$ integers $a_1, a_2, \ldots, a_n:$ the desired apartment size of each applicant. If the desired size of an applicant is $x$, they will accept any apartment whose size is between $x-k$ and $x+k$.`}
          ></Paragraph>
          <Paragraph
            text={String.raw`The last line contains $m$ integers $b_1, b_2, \ldots, b_m:$ the size of each apartment.`}
          ></Paragraph>
        </Section>
        <Section>
          <SubHeading>Output</SubHeading>
          <Paragraph
            text={String.raw`Print one integer: the number of applicants who will get an apartment.`}
          />
        </Section>
        <Section>
          <SubHeading>Constraints</SubHeading>
          <UnorderedList
            items={[
              String.raw`$1 \le n, m \le 2 \cdot 10^5$`,
              String.raw`$0 \le k \le 10^9$`,
              String.raw`$1 \le a_i, b_i \le 10^9$`,
            ]}
          />
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Input:
4 3 5
60 45 80 60
30 60 75

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
            We use two-pointer approach. It first sorts both the applicants’
            desired sizes and the apartment sizes. Then, it iterates through
            both lists simultaneously:
          </Paragraph>
          <UnorderedList
            items={[
              "If the current apartment size is within the acceptable range of the applicant `|a[i] - b[j]| <= k`, the applicant gets the apartment, and both pointers move forward.",
              "If the apartment is too small, move to the next apartment.",
              "If the apartment is too large, move to the next applicant.",
              "This ensures each applicant is matched optimally, resulting in the maximum number of applicants receiving apartments.",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n log n + m log m)",
              "Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <p>✅ Accepted</p>
          <CodeFetcher
            cppFile="/cses/sorting-and-searching/apartments/approach/apartments.cpp"
            pythonFile="/cses/sorting-and-searching/apartments/approach/apartments.py"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default Apartments;
