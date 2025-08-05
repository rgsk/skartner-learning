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
import YoutubeVideo from "@/components/Shared/YoutubeVideo";

interface TwoSumSortedProps {}
const TwoSumSorted: React.FC<TwoSumSortedProps> = ({}) => {
  return (
    <Container>
      <Heading>Two Sum Sorted</Heading>
      <PracticeLinks workattech="two-sum-sorted" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a sorted array, check if there exist two numbers whose sum is
            zero.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
A: [-3, 1, 3, 4]
Answer: true
            `,
              `\
A: [-2, 1, 3, 4]
Answer: false
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            We loop over all pairs of elements in the array and check if sum of
            the elements in the pair is zero.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n<sup>2</sup>)",
              "Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/two_pointers/two_sum_sorted/naive/two_sum_sorted.py"
            cppFile="/dsa/two_pointers/two_sum_sorted/naive/two_sum_sorted.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            Since the array is sorted in non-decreasing order, we can use the
            two-pointer approach to check for a pair of elements that sum to
            zero in linear time.
          </Paragraph>

          <Paragraph>We maintain two pointers:</Paragraph>

          <UnorderedList
            items={[
              "`left` starting from the beginning of the array.",
              "`right` starting from the end of the array.",
            ]}
          />

          <Paragraph>At each step, we:</Paragraph>

          <UnorderedList
            items={[
              "Check the sum `A[left] + A[right]`.",
              "If the sum is zero, we found our pair — return `true`.",
              "If the sum is greater than zero, we need a smaller number, so we move `right` one step to the left.",
              "If the sum is less than zero, we need a larger number, so we move `left` one step to the right.",
              "If the two pointers meet without finding such a pair, return `false`.",
            ]}
          />
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
            pythonFile="/dsa/two_pointers/two_sum_sorted/optimal/two_sum_sorted.py"
            cppFile="/dsa/two_pointers/two_sum_sorted/optimal/two_sum_sorted.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="JnMss3DhHBQ" />
      </Section>
    </Container>
  );
};
export default TwoSumSorted;
