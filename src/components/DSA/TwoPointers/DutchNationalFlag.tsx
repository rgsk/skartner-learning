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

interface DutchNationalFlagProps {}
const DutchNationalFlag: React.FC<DutchNationalFlagProps> = ({}) => {
  return (
    <Container>
      <Heading>Dutch National Flag</Heading>
      <PracticeLinks workattech="dutch-national-flag" leetcode="sort-colors" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph
            text={
              "Sort an array `A` where each of the elements belong to the set: `{0, 1, 2}`."
            }
          />
          <Paragraph text="Expected Time Complexity: O(n)" />
          <Paragraph>
            Try to solve it without storing the count of 0s, 1s and 2s.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
A: [2, 2, 0, 1]
Result: [0, 1, 2, 2]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>Sort the array.</Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n * logn)", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/two_pointers/dutch_national_flag/naive/dutch_national_flag.py"
            cppFile="/dsa/two_pointers/dutch_national_flag/naive/dutch_national_flag.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            The strategy is to exploit the fact that the array consists only 3
            types of elements, {"0, 1, 2"}. Also, doing it in constant space
            hints at some swapping operation.
          </Paragraph>
          <Paragraph>
            We will divide the array into 4 regions using 3 pointers, say low,
            mid, and high. The region <InlineCode>[0, low - 1]</InlineCode> will
            represent all zeroes, <InlineCode>[low, mid - 1]</InlineCode> will
            represent all ones, <InlineCode>[mid, high]</InlineCode> will
            represent a yet unknown region, and{" "}
            <InlineCode>[high + 1, N - 1]</InlineCode> will represent the region
            with all twos.
          </Paragraph>
          <Paragraph>
            The target is to shrink the size of the unknown region to zero when
            the algorithm converges. If the current element is 0, swap it into
            the low range, if the current element is 1, just move the mid
            pointer ahead, else swap the element into the high range. In this
            way, in every move, we reduce the size of the unknown region, and at
            the end, we get the sorted array.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n)", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/two_pointers/dutch_national_flag/optimal/dutch_national_flag.py"
            cppFile="/dsa/two_pointers/dutch_national_flag/optimal/dutch_national_flag.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default DutchNationalFlag;
