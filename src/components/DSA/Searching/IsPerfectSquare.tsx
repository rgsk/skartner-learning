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

interface IsPerfectSquareProps {}
const IsPerfectSquare: React.FC<IsPerfectSquareProps> = ({}) => {
  return (
    <Container>
      <Heading>Is Perfect Square</Heading>
      <PracticeLinks workattech="is-perfect-square" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a positive integer <InlineCode>num</InlineCode>, write a
            function that returns <InlineCode>true</InlineCode> if num is a
            perfect square else <InlineCode>false</InlineCode>.
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
isPerfectSquare(25) => true
isPerfectSquare(30) => false
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            Calculate squares of each number from 1 to n, if square is equal to
            n, return true. If square is greater than n, then return false,
            because subsequent squares will be higher.
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
            pythonFile="/dsa/searching/is_perfect_square/naive/is_perfect_square.py"
            cppFile="/dsa/searching/is_perfect_square/naive/is_perfect_square.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Binary Search Approach</SubHeading>
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
            pythonFile="/dsa/searching/is_perfect_square/optimal/is_perfect_square.py"
            cppFile="/dsa/searching/is_perfect_square/optimal/is_perfect_square.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default IsPerfectSquare;
