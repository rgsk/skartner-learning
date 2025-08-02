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

interface IdenticalTwinsProps {}
const IdenticalTwins: React.FC<IdenticalTwinsProps> = ({}) => {
  return (
    <Container>
      <Heading>Identical Twins</Heading>
      <PracticeLinks workattech="identical-twins" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            For an array of integers <InlineCode>nums</InlineCode>, an identical
            twin is defined as pair <InlineCode>(i, j)</InlineCode> where{" "}
            <InlineCode>nums[i]</InlineCode> is equal to{" "}
            <InlineCode>nums[j]</InlineCode> and{" "}
            <InlineCode>{"i < j"}</InlineCode>.
          </Paragraph>
          <Paragraph>
            Given an array nums, find the number of identical twins.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
            Array: [1, 2, 3, 2, 1]
            Number of Identical Twins: 2
            Explanation:
            Identical Twins: [[1, 1], [2, 2]]
            Indexes: (0, 4), (1, 3)
            `,
              `\
            Array: [1, 2, 2, 3, 2, 1]
            Number of Identical Twins: 4
            Explanation:
            Identical Twins: [[1, 1], [2, 2], [2, 2], [2, 2]]
            Indexes: (0, 5), (1, 2), (1, 4), (2, 4)
            `,
              `\
            Array: [1, 1, 1, 1]
            Number of Identical Twins: 6
            Explanation:
            Identical Twins: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]
            Indexes: (0, 1), (0, 2), (0, 3), (1, 2), (1, 3), (2, 3)
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            Using 2 nested loops, we iterate over all distinct pairs of elements
            and if they are equal we can increment the answer by one.
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
            pythonFile="/dsa/arrays/identical_twins/naive/identical_twins.py"
            cppFile="/dsa/arrays/identical_twins/naive/identical_twins.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Hashing Approach 1 (Optimal)</SubHeading>
          <Paragraph>
            We store number of occurrences of a number, while traversing the
            array from left to right. When the same number occurs later in the
            sequence, it would form form pair with all it
            {"'"}s occurrences earlier in the array. So, we add number of
            occurences of that number to the count.
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
            pythonFile="/dsa/arrays/identical_twins/hashing_approach_1/identical_twins.py"
            cppFile="/dsa/arrays/identical_twins/hashing_approach_1/identical_twins.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Hashing Approach 2 (Optimal)</SubHeading>
          <Paragraph>
            We can hash the frequency of all the numbers in the list using a
            hashmap and for each distinct number, we can form{" "}
            <InlineCode>
              <span>
                <sup>N</sup>C<sub>2</sub> = (N * (N - 1) / 2)
              </span>
            </InlineCode>{" "}
            pairs of that particular number, where <InlineCode>N</InlineCode> is
            the frequency of that number in the list.
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
            pythonFile="/dsa/arrays/identical_twins/hashing_approach_2/identical_twins.py"
            cppFile="/dsa/arrays/identical_twins/hashing_approach_2/identical_twins.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="o5ORwZCpTR4" />
      </Section>
    </Container>
  );
};
export default IdenticalTwins;
