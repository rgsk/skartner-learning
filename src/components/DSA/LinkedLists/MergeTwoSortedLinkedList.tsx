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
interface MergeTwoSortedLinkedListProps {}
const MergeTwoSortedLinkedList: React.FC<
  MergeTwoSortedLinkedListProps
> = ({}) => {
  return (
    <Container>
      <Heading>Merge Two Sorted Linked List</Heading>
      <PracticeLinks workattech="merge-sorted-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given two sorted linked lists, merge them inplace to produce a
            singular sorted linked list.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
A: 2→3→7
B: 1→4→5

Resultant list, after merging A and B:

C: 1→2→3→4→5→7
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            We are merging two sorted linked lists into one sorted list.
          </Paragraph>

          <UnorderedList
            items={[
              "We use a dummy node to simplify handling of the head pointer.",
              "We compare nodes from both lists one by one:",
              "Whichever has the smaller value is added to the merged list.",
              "We move the pointer forward in the list from which the node was taken.",
              "After one list is fully traversed, we attach the remaining part of the other list (which is already sorted).",
              "Finally, we return dummy->next (skipping the dummy node itself).",
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
            pythonFile="/dsa/linked_lists/merge_two_sorted_linked_list/approach/merge_two_sorted_linked_list.py"
            cppFile="/dsa/linked_lists/merge_two_sorted_linked_list/approach/merge_two_sorted_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default MergeTwoSortedLinkedList;
