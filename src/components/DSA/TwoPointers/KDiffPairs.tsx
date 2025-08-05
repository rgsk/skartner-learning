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
            As we iterate through the elements in the array, we keep the
            frequence of them, in <InlineCode>freq</InlineCode> map.
          </Paragraph>
          <UnorderedList
            items={[
              {
                text: "if `k == 0`",
                children: [
                  "we check whether the element is occuring for the second time now by `freq[A[i]] == 1`",
                ],
              },
              {
                text: "if `k != 0`",
                children: [
                  "if b - a = k, then b - k = a",
                  "we keep adding element into freq, by traversing array from left, added element represents `a`",
                  "b is A[i], so, b - k is `A[i] - k`, so we look for `a` in freq by `freq[A[i] - k] != 0`",
                  "if a is in freq, and b is occuring for the first time, which we check with `freq[A[i]] == 0`",
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
      <Solution>
        <Section>
          <SubHeading>Pointers Based Approach</SubHeading>
          <Paragraph>
            We keep two pointers i and j starting from the 0th index and the 1st
            index respectively. We find out the difference between the elements
            at the two indexes.
          </Paragraph>
          <Paragraph>There could be three cases here:</Paragraph>
          <UnorderedList
            items={[
              "The difference is k: Consider the pair and increment both the indexes as none of them will create an unique pair with any other element.",
              "The difference is less than k: Increment `r` => This would increase the difference next time.",
              "The difference is greater than k: Increment `l` => This would decrease the difference next time.",
            ]}
          />
          <Paragraph>
            To avoid duplicates, we can skip all <InlineCode>r</InlineCode>{" "}
            indexes where <InlineCode>A[r] == A[r + 1]</InlineCode> which
            basically means that we consider only the last element in a series
            of duplicates.
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
            pythonFile="/dsa/two_pointers/k_diff_pairs/pointers/k_diff_pairs.py"
            cppFile="/dsa/two_pointers/k_diff_pairs/pointers/k_diff_pairs.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Pointers Based Alternate Approach</SubHeading>
          <Paragraph>
            When we form a valid pair with l and r, we keep incrementing r, such
            that in next iteration r, points to different element.
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
            pythonFile="/dsa/two_pointers/k_diff_pairs/pointers_2/k_diff_pairs.py"
            cppFile="/dsa/two_pointers/k_diff_pairs/pointers_2/k_diff_pairs.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default KDiffPairs;
