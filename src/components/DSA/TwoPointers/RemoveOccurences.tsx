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

interface RemoveOccurencesProps {}
const RemoveOccurences: React.FC<RemoveOccurencesProps> = ({}) => {
  return (
    <Container>
      <Heading>Remove occurences</Heading>
      <PracticeLinks workattech="remove-occurences" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given an array and a number k, remove all occurrences of k from the
            array (in-place). Return the number of elements 'remainingSize' left
            after removing k.
          </Paragraph>
          <Paragraph>
            Note that removing the occurences is mandatory and will be checked
            in the main method. There can be anything beyond the first
            'remainingSize' elements. It will be ignored.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Array: [1, 4, 2, 6, 2, 6, 9, 4]
Number: 4
Answer: 6
Explanation:[1, 2, 6, 2, 6, 9]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            We use the two-pointer technique to solve this problem efficiently
            in a single pass, without using extra space.
          </Paragraph>
          <UnorderedList
            items={[
              "The first pointer `i` traverses the entire array.",
              "The second pointer `j` tracks the position where the next valid (non-`k`) element should be placed.",
              "`j` starts from `0`, meaning the first position in the array.",
              "For every element `A[i]` that is not equal to `k`, we assign it to `A[j]` and increment `j`.",
              "This effectively overwrites the `k` values and compacts the valid elements to the beginning of the array.",
              "By the end of the loop, `j` represents the new size of the array with all `k` values removed.",
              "The elements from `A[0]` to `A[j - 1]` are the filtered result.",
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
            pythonFile="/dsa/two_pointers/remove_occurences/optimal/remove_occurences.py"
            cppFile="/dsa/two_pointers/remove_occurences/optimal/remove_occurences.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default RemoveOccurences;
