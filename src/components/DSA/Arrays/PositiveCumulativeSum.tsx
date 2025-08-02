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

interface PositiveCumulativeSumProps {}
const PositiveCumulativeSum: React.FC<PositiveCumulativeSumProps> = ({}) => {
  return (
    <Container>
      <Heading>Positive Cumulative Sum</Heading>
      <PracticeLinks workattech="positive-cumulative-sum" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            The cumulative sum of an array at index i is defined as the sum of
            all elements of the array from index 0 to index i.
          </Paragraph>
          <Paragraph>
            The positive cumulative sum of an array is a list of only those
            cumulative sums which are positive.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
            Initial Array: [1, -2, 3, 4, -6]
            Cumulative Sum: [1, -1, 2, 6, 0]
            Positive Cumulative Sum: [1, 2, 6]
            `,
              `\
            Initial Array: [1, -1, -1, -1, 1]
            Cumulative Sum: [1, 0, -1, -2, -1]
            Positive Cumulative Sum: [1]
            `,
              `\
            Initial Array: [1, 3, 5, 7]
            Cumulative Sum: [1, 4, 9, 16]
            Positive Cumulative Sum: [1, 4, 9, 16]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            We calculate the cumulative_sum, from left to right, and add the
            only the positive values of cumulative_sum to result.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n)", "Space Complexity: O(n)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/positive_cumulative_sum/optimal/positive_cumulative_sum.py"
            cppFile="/dsa/arrays/positive_cumulative_sum/optimal/positive_cumulative_sum.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="6_iQ69iPMwI" />
      </Section>
    </Container>
  );
};
export default PositiveCumulativeSum;
