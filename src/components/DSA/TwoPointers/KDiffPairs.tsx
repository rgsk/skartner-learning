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

interface KDiffPairsProps {}
const KDiffPairs: React.FC<KDiffPairsProps> = ({}) => {
  return (
    <Container>
      <Heading>k-diff pairs</Heading>
      <PracticeLinks workattech="k-diff-pairs" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph
            text={
              "Given a sorted array `A` of size `n` and a number `k`, return the \
              number of unique pairs which have a difference of `k`."
            }
          />
          <Paragraph text="`|arr[i] - arr[j]| = k` where `i < j`" />
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
A: [1, 3, 5, 7, 10]
k: 2
Answer: 3
            `,
              `\
A: [1, 3, 5, 7, 10]
k: 3
Answer: 1
            `,
              `\
A: [1, 3, 5, 7, 10]
k: 1
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
            The naive approach is to iterate over all pairs of the array and
            check if the current pair has the required difference. Count number
            of such pairs.
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
            pythonFile="/dsa/two_pointers/k_diff_pairs/naive/k_diff_pairs.py"
            cppFile="/dsa/two_pointers/k_diff_pairs/naive/k_diff_pairs.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Hashing Approach</SubHeading>
          <Paragraph>
            We will hash the elements till the current element, and check if the
            valid pair is found or not using our hash array.
          </Paragraph>
          <UnorderedList
            items={[
              {
                text: "if `k == 0`",
                children: [
                  "we check whether the element is occuring for the second time now by `hash[A[i]] == 1`",
                ],
              },
              {
                text: "if `k != 0`",
                children: [
                  "if b - a = k, then b - k = a",
                  "we keep adding element into hash, by traversing array from left, added element represents `a`",
                  "b is A[i], so, b - k is `A[i] - k`, so we look for `a` in hash by `hash[A[i] - k] != 0`",
                  "if a is in hash, and b is occuring for the first time, which we check with `hash[A[i]] == 0`",
                  "then we add 1 to result",
                ],
              },
            ]}
          />
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
            pythonFile="/dsa/two_pointers/k_diff_pairs/hashing/k_diff_pairs.py"
            cppFile="/dsa/two_pointers/k_diff_pairs/hashing/k_diff_pairs.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default KDiffPairs;
