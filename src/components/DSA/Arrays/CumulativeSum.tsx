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

interface CumulativeSumProps {}
const CumulativeSum: React.FC<CumulativeSumProps> = ({}) => {
  return (
    <Container>
      <Heading>Cumulative Sum</Heading>
      <PracticeLinks workattech="cumulative-sum" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            The cumulative sum of an array at index i is defined as the sum of
            all elements of the array from index 0 to index i.
          </Paragraph>
          <Paragraph>Given an array, return its cumulative sum.</Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
            Initial Array: [1, 2, 3, 4]
            Cumulative Sum: [1, 3, 6, 10]
            `,
              `\
            Initial Array: [1, 1, 1, 1, 1]
            Cumulative Sum: [1, 2, 3, 4, 5]
            `,
              `\
            Initial Array: [1, 3, 5, 7, 9]
            Cumulative Sum: [1, 4, 9, 16, 25]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            Here, we can just iterate over the array and calculate the sum of
            all elements from the beginning till that index. The calculated sum
            for each index denotes the cumulative sum for that index.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n<sup>2</sup>)",
              "Space Complexity: O(n)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/cumulative_sum/naive/cumulative_sum.py"
            cppFile="/dsa/arrays/cumulative_sum/naive/cumulative_sum.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            Previour approach is inefficient, at each step, we are calculating,
            prefixSum till that index, but when we have prefixSum till previous
            index, we can just add current element to it, to get prefixSum till
            current index.
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
            pythonFile="/dsa/arrays/cumulative_sum/optimal_1/cumulative_sum.py"
            cppFile="/dsa/arrays/cumulative_sum/optimal_1/cumulative_sum.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach 2</SubHeading>
          <Paragraph>
            Rather than storing prefixSum in a separate variable, we can use
            value at previous index in result array.
          </Paragraph>
          <Paragraph>
            <InlineCode>result[i] = result[i-1] + arr[i];</InlineCode>
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
            pythonFile="/dsa/arrays/cumulative_sum/optimal_2/cumulative_sum.py"
            cppFile="/dsa/arrays/cumulative_sum/optimal_2/cumulative_sum.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default CumulativeSum;
