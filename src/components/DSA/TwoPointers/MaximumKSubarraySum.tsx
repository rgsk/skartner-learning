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

interface MaximumKSubarraySumProps {}
const MaximumKSubarraySum: React.FC<MaximumKSubarraySumProps> = ({}) => {
  return (
    <Container>
      <Heading>Maximum K-Subarray Sum</Heading>
      <PracticeLinks workattech="maximum-k-subarray-sum" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given an array and a number k, find the sum of the subarray that has
            the maximum sum among all the subarrays of size k.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Array: [3, 5, 6, 2, 4, 7, 8]
k: 3
Here, the subarrays of size k and their sum are:
[3 5 6] => 14
[5 6 2] => 13
[6 2 4] => 12
[2 4 7] => 13
[4 7 8] => 19
Answer: 19
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            The naive approach is to iterate over all the subarrays in the array
            of length k, calculate it's sum and take the maximum out of them.
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
            pythonFile="/dsa/two_pointers/maximum_k_subarray_sum/naive/maximum_k_subarray_sum.py"
            cppFile="/dsa/two_pointers/maximum_k_subarray_sum/naive/maximum_k_subarray_sum.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Sliding Window Approach</SubHeading>
          <Paragraph>
            We will use the sliding window technique to calculate the sum in
            linear time. We keep erasing the i - kth element from the current
            sum and add the ith element to the sum, and store sum in max_sum, if
            it is greater.
          </Paragraph>
          <Paragraph>
            In this approach, we do explicit initialization of the first window,
            then slide it.
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
            pythonFile="/dsa/two_pointers/maximum_k_subarray_sum/optimal_1/maximum_k_subarray_sum.py"
            cppFile="/dsa/two_pointers/maximum_k_subarray_sum/optimal_1/maximum_k_subarray_sum.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Sliding Window Variation</SubHeading>
          <Paragraph>
            We do everything in one for-loop, no explicit initialization of the
            first window.
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
            pythonFile="/dsa/two_pointers/maximum_k_subarray_sum/optimal_2/maximum_k_subarray_sum.py"
            cppFile="/dsa/two_pointers/maximum_k_subarray_sum/optimal_2/maximum_k_subarray_sum.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default MaximumKSubarraySum;
