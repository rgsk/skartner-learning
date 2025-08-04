"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Examples from "@/components/Shared/Examples";
import Heading from "@/components/Shared/Heading";
import InlineCode from "@/components/Shared/InlineCode";
import MinorHeading from "@/components/Shared/MinorHeading";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Problem from "@/components/Shared/Problem";
import Section from "@/components/Shared/Section";
import Solution from "@/components/Shared/Solution";
import SubHeading from "@/components/Shared/SubHeading";
import UnorderedList from "@/components/Shared/UnorderedList";
interface SquareRootProps {}
const SquareRoot: React.FC<SquareRootProps> = ({}) => {
  return (
    <Container>
      <Heading>Square Root</Heading>
      <PracticeLinks workattech="square-root" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a non-negative integer 'n', compute and return the square root
            of 'n'. If n is not a perfect square, return the floor of the
            result.
          </Paragraph>
          <Paragraph>
            Note: Do not use the in-built methods to calculate square root or
            power.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
n: 16
Answer: 4
            `,
              `\
n: 12
Answer: 3
            `,
              `\
n: 0
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
            We check for each number from 1 to num. If it's square is equal to
            num, we return it. Otherwise, if value squared is greater than num,
            we return value - 1.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(sqrt(n))", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/searching/square_root/naive/square_root.py"
            cppFile="/dsa/searching/square_root/naive/square_root.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Binary Search (Storing Previous Result)</SubHeading>
          <Paragraph>
            We calculate, <InlineCode>square = mid * mid</InlineCode>. <br />
            Once, we satisfy the condition that{" "}
            <InlineCode>{"square <= num"}</InlineCode>, we store it in answer,
            and look for bigger mid, by doing{" "}
            <InlineCode>low = mid + 1</InlineCode>. <br /> Otherwise, since{" "}
            <InlineCode>{"square > num"}</InlineCode>, we want lower mid, so we
            do <InlineCode>high = mid - 1</InlineCode>.
          </Paragraph>
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
            pythonFile="/dsa/searching/square_root/storing_previous_result/square_root.py"
            cppFile="/dsa/searching/square_root/storing_previous_result/square_root.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Binary Search (Getting Closer to the Result)</SubHeading>
          <Paragraph>
            We calculate, <InlineCode>square = mid * mid</InlineCode>. <br />
            If <InlineCode>{"square > num"}</InlineCode>, we move to left, by
            doing <InlineCode>right = mid - 1</InlineCode>. <br />
            Otherwise, we do <InlineCode>left = mid</InlineCode>, because either
            current mid could be answer or a value greater than it.
          </Paragraph>
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
            pythonFile="/dsa/searching/square_root/closer/square_root.py"
            cppFile="/dsa/searching/square_root/closer/square_root.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default SquareRoot;
