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

interface ThreeSumProps {}
const ThreeSum: React.FC<ThreeSumProps> = ({}) => {
  return (
    <Container>
      <Heading>Three Sum</Heading>
      <PracticeLinks workattech="three-sum" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given an array A, find all unique triplets in the array whose sum is
            equal to zero.
          </Paragraph>
          <Paragraph>
            Note: Each triplet should be sorted. The resultant array should be
            sorted as well.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
A: [1, 1, 0, -1, -2]
Triplets: [
&nbsp;&nbsp;[-2, 1, 1],
&nbsp;&nbsp;[-1, 0, 1]
]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            In this approach, we can iterate over all possible triplets of the
            given array and check if each triplet is valid, push them into an
            appropriate data structure such as a set of tuples, to remove
            duplicates.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n<sup>3</sup>)",
              "Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/two_pointers/three_sum/naive/three_sum.py"
            cppFile="/dsa/two_pointers/three_sum/naive/three_sum.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Pointers Based Approach</SubHeading>
          <UnorderedList
            items={[
              "Sort the array to make it easier to skip duplicates and use two pointers.",
              "Fix one element (`A[i]`) in a loop.",
              "For the subarray to the right of `i`, use the two-pointer technique to find pairs so that the triplet of pair and `A[i]`, sum to 0.",
              {
                text: "Duplicate handling:",
                children: [
                  "Skip duplicate `A[i]` values to avoid repeating triplets.",
                  "Skip duplicate `A[left]` values in the two-pointer loop.",
                ],
              },
              "If the sum is greater than zero, move the `right` pointer left to reduce the sum.",
              "If the sum is less than zero, move the `left` pointer right to increase the sum.",
              "If the sum equals zero, store the triplet and move both pointers to search for the next valid pair.",
            ]}
          />
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
            pythonFile="/dsa/two_pointers/three_sum/pointers/three_sum.py"
            cppFile="/dsa/two_pointers/three_sum/pointers/three_sum.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Hashing Based Approach</SubHeading>
          <Paragraph>
            This approach, is an extension of 2 Sum hashing approach.
          </Paragraph>
          <Paragraph>
            We fix some element at index i as A[i], we need to find pair in
            right of the array that sums up to -A[i], so that the sum of all
            three is zero.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              {
                text: "Time Complexity: O(n<sup>2</sup>)",
                children: [
                  "n<sup>2</sup>, for 2 for loops",
                  "k * log(k), for sorting result of k triplets, but ignored, as lesser than n<sup>2</sup>.",
                ],
              },

              {
                text: "Space Complexity: O(n)",
                children: ["n for storing elements in `seen` set"],
              },
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/two_pointers/three_sum/hashing/three_sum.py"
            cppFile="/dsa/two_pointers/three_sum/hashing/three_sum.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="dnrT_XFaaKs" />
      </Section>
    </Container>
  );
};
export default ThreeSum;
