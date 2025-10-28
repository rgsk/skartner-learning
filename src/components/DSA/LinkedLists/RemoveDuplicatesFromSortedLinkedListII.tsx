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
interface RemoveDuplicatesFromSortedLinkedListIIProps {}
const RemoveDuplicatesFromSortedLinkedListII: React.FC<
  RemoveDuplicatesFromSortedLinkedListIIProps
> = ({}) => {
  return (
    <Container>
      <Heading>Remove Duplicates from Sorted Linked List - II</Heading>
      <PracticeLinks workattech="remove-duplicates-sorted-linked-list-ii" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a sorted linked list, remove all elements that have duplicates
            in the Linked List.
          </Paragraph>
          <Paragraph>
            After the operation, only those elements should be there which were
            unique in the original list. Do not change the order of the linked
            list.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Linked List: 1→2→2→2→3→3→4→7
After removing duplicates: 1→4→7
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            The function removes all nodes that have duplicate values from a
            sorted linked list, keeping only the unique ones.
          </Paragraph>
          <UnorderedList
            items={[
              "A dummy node is used to handle edge cases easily.",
              "Traverse the list using `current`.",
              "For each value, move `temp` ahead to skip all nodes with the same value.",
              "If the value was not duplicated, link it to the result list.",
              "Finally, set `res_temp.next = None` to disconnect leftover old links.",
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
            pythonFile="/dsa/linked_lists/remove_duplicates_from_sorted_linked_list_ii/approach/remove_duplicates_from_sorted_linked_list.py"
            cppFile="/dsa/linked_lists/remove_duplicates_from_sorted_linked_list_ii/approach/remove_duplicates_from_sorted_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default RemoveDuplicatesFromSortedLinkedListII;
