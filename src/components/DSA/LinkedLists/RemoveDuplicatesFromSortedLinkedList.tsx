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
interface RemoveDuplicatesFromSortedLinkedListProps {}
const RemoveDuplicatesFromSortedLinkedList: React.FC<
  RemoveDuplicatesFromSortedLinkedListProps
> = ({}) => {
  return (
    <Container>
      <Heading>Remove Duplicates from Sorted Linked List</Heading>
      <PracticeLinks workattech="remove-duplicates-sorted-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a sorted linked list, remove all duplicates from the Linked
            List.
          </Paragraph>
          <Paragraph>
            After the operation, every element should appear only once. Do not
            change the order of the linked list.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Linked List: 1→2→2→2→3→3→4→7
After removing duplicates: 1→2→3→4→7
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <UnorderedList
            items={[
              "Start from the head of the linked list.",
              {
                text: "While traversing:",
                children: [
                  "Compare the current node’s value with the next node’s value.",
                  "If they’re the same → remove the next node by skipping it.",
                  "Otherwise → move to the next node.",
                ],
              },
              "Continue until the end of the list.",
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
            pythonFile="/dsa/linked_lists/remove_duplicates_from_sorted_linked_list/approach/remove_duplicates_from_sorted_linked_list.py"
            cppFile="/dsa/linked_lists/remove_duplicates_from_sorted_linked_list/approach/remove_duplicates_from_sorted_linked_list.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Alternate Approach</SubHeading>
          <Paragraph>
            The function removeDuplicates removes duplicate nodes from a sorted
            linked list by skipping over repeated values.
          </Paragraph>
          <UnorderedList
            items={[
              "Start with a pointer `current` at the head of the list.",
              "For each node, use another pointer `temp` to move forward until a different value is found (skipping duplicates).",
              "Link `current->next` to this `temp`, effectively removing all duplicate nodes in between.",
              "Move `current` to `temp` and repeat until the end of the list.",
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
            pythonFile="/dsa/linked_lists/remove_duplicates_from_sorted_linked_list/approach2/remove_duplicates_from_sorted_linked_list.py"
            cppFile="/dsa/linked_lists/remove_duplicates_from_sorted_linked_list/approach2/remove_duplicates_from_sorted_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default RemoveDuplicatesFromSortedLinkedList;
