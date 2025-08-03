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
import YoutubeVideo from "@/components/Shared/YoutubeVideo";

interface MaxConsecutiveOnesProps {}
const MaxConsecutiveOnes: React.FC<MaxConsecutiveOnesProps> = ({}) => {
  return (
    <Container>
      <Heading>Max Consecutive Ones</Heading>
      <PracticeLinks workattech="max-consecutive-ones" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given an array <InlineCode>A</InlineCode>, find the maximum number
            of consecutive <InlineCode>1</InlineCode>s in the array.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
            A: [1, 1, 3, 2, 3, 1, 1, 1]
            Max consecutive 1s: 3
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            We can solve the problem in linear time by iterating over the array,
            and if we get a one, keep incrementing count, and if we get some
            other element, we update the maximum count with current count and
            change the current count to 0.
          </Paragraph>
          <Paragraph>
            We need update max_count after the loop, to account for last set of
            consecutive ones.
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
            pythonFile="/dsa/arrays/max_consecutive_ones/optimal_1/max_consecutive_ones.py"
            cppFile="/dsa/arrays/max_consecutive_ones/optimal_1/max_consecutive_ones.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach Variation</SubHeading>
          <Paragraph>
            We update{" "}
            <InlineCode>max_count = max(max_count, cur_count)</InlineCode>,
            whenever we encounter 1.
          </Paragraph>
          <Paragraph>
            In this case, we don't need to update max_count after end of loop,
            because when we encounter the last 1, we would update the max_count,
            with last set of consecutive ones.
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
            pythonFile="/dsa/arrays/max_consecutive_ones/optimal_2/max_consecutive_ones.py"
            cppFile="/dsa/arrays/max_consecutive_ones/optimal_2/max_consecutive_ones.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="tbc8PQQ4uVk" />
      </Section>
    </Container>
  );
};
export default MaxConsecutiveOnes;
