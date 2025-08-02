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

interface NextGreaterPermutationProps {}
const NextGreaterPermutation: React.FC<NextGreaterPermutationProps> = ({}) => {
  return (
    <Container>
      <Heading>Next Greater Permutation</Heading>
      <PracticeLinks workattech="next-greater-permutation" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given an array, rearrange it to its next greater permutation. Do it
            in-place with extra constant memory only. Do not use any library
            function for the next permutation.
          </Paragraph>
          <Paragraph>
            If the next greater permutation does not exist, return the lowest
            possible order (sorted in ascending order).
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
                Array: [1, 2, 3, 4]
Next Greater Permutation: [1, 2, 4, 3]
Next Greater Permutation: [1, 3, 2, 4]
Next Greater Permutation: [1, 3, 4, 2]
Next Greater Permutation: [1, 4, 2, 3]
Next Greater Permutation: [1, 4, 3, 2]
Next Greater Permutation: [2, 1, 3, 4]
                `,
              `\
                Array: [4, 3, 2, 1]
Next Greater Permutation: [1, 2, 3, 4]
                `,
              `\
                Array: [2, 2, 9]
Next Greater Permutation: [2, 9, 2]
Next Greater Permutation: [9, 2, 2]
Next Greater Permutation: [2, 2, 9]
                `,
              `\
                Array: [4]
Next Greater Permutation: [4]
                `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            The naive approach here will be a straight brute force. Find all the
            permutations of the given array, find the current permutation, and
            then print the next permutation in the list
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n * n!)", "Space Complexity: O(n)"]}
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>We can solve this problem in a single pass.</Paragraph>
          <UnorderedList
            items={[
              "First, observe that if the array is sorted in descending order, no next greater permutation is possible for the array, so we just reverse the array and return it.",
              "Else, traverse the array from right to left, and find the first position where a[i] > a[i - 1].",
              "How can we get the next greater permutation? Well, observe that the next greater permutation will have the element just greater than a[i - 1] to the right of a[i - 1] swapped with a[i - 1].",
              "Now, just reverse the subarray from a[i] to the end of the array to get the next greater permutation.",
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
            pythonFile="/dsa/arrays/next_greater_permutation/optimal/next_greater_permutation.py"
            cppFile="/dsa/arrays/next_greater_permutation/optimal/next_greater_permutation.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default NextGreaterPermutation;
