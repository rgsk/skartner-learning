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

interface LargestContiguousSumProps {}
const LargestContiguousSum: React.FC<LargestContiguousSumProps> = ({}) => {
  return (
    <Container>
      <Heading>Largest Contiguous Sum</Heading>
      <PracticeLinks workattech="largest-contiguous" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            A subarray is a part of an array including one or more
            contiguous/adjacent elements.
          </Paragraph>
          <Paragraph>
            If we find the sum of the elements of any subarray then that sum
            will be known as a contiguous sum.
          </Paragraph>
          <Paragraph>
            You are given an array of numbers (could be -ve as well). You need
            to find the largest contiguous sum from the array.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
            Array: [4, -6, 2, 5]
            Answer: 7
            `,
              `\
            Array: [1, 2, 3, 4, 5]
            Answer: 15
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            We can iterate over all possible subarrays of the array and
            calculate their sum. Then return the maximum possible value of the
            sum obtained.
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
            pythonFile="/dsa/arrays/largest_contiguous_sum/naive/largest_contiguous_sum.py"
            cppFile="/dsa/arrays/largest_contiguous_sum/naive/largest_contiguous_sum.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Kadane's Algorithm</SubHeading>
          <Paragraph>
            The largest contiguous sum can be solved optimally using Kadane's
            Algorithm in linear time.
          </Paragraph>
          <UnorderedList
            items={[
              "Instead of checking all possible subarrays (O(n²)), it keeps track of the maximum sum ending at each position and uses it to build the next.",
              {
                text: "At each element, decide:",
                children: [
                  "Continue the current subarray (add this element), or",
                  "Start fresh from this element.",
                ],
              },
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
            pythonFile="/dsa/arrays/largest_contiguous_sum/kadane/largest_contiguous_sum.py"
            cppFile="/dsa/arrays/largest_contiguous_sum/kadane/largest_contiguous_sum.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Kadane's Algorithm Variation (Intuitive)</SubHeading>
          <Paragraph>
            Let's say that in cur_sum, we have negative value, then it would
            only decrease the sub-array sum ending at index i. So, we reset
            cur_sum to 0.
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
            pythonFile="/dsa/arrays/largest_contiguous_sum/kadane_variation/largest_contiguous_sum.py"
            cppFile="/dsa/arrays/largest_contiguous_sum/kadane_variation/largest_contiguous_sum.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default LargestContiguousSum;
