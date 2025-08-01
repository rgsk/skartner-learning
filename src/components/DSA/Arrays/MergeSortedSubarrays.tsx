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

interface MergeSortedSubarraysProps {}
const MergeSortedSubarrays: React.FC<MergeSortedSubarraysProps> = ({}) => {
  return (
    <Container>
      <Heading>Merge Sorted Subarrays</Heading>
      <PracticeLinks workattech="merge-sorted-subarrays" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Consider an array that is divided into two parts and both of the
            parts are sorted individually. Given the mentioned array and the end
            index of the first part, merge them to create a sorted array. Update
            the same array with the merged elements.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
            Array: [1, 3, 5, 7, 9, 11, 0, 4, 6, 8]
            End Index: 5
            Array after merging: [0, 1, 3, 4, 5, 6, 7, 8, 9, 11]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            The problem can be solved by traversing both the arrays
            simultaneously and adding the current smaller element in a new
            array. Finally, if there are remaining elements in any array add
            them to the new array.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity:O(n)", "Auxiliary Space Complexity: O(n)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/merge_sorted_subarrays/optimal/merge_sorted_subarrays.py"
            cppFile="/dsa/arrays/merge_sorted_subarrays/optimal/merge_sorted_subarrays.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default MergeSortedSubarrays;
