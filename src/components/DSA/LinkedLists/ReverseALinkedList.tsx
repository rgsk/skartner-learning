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
interface ReverseALinkedListProps {}
const ReverseALinkedList: React.FC<ReverseALinkedListProps> = ({}) => {
  return (
    <Container>
      <Heading>Reverse a Linked List</Heading>
      <PracticeLinks workattech="reverse-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>Given a linked list, reverse it.</Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Input:  1→2→3→4→NULL

Output:  4→3→2→1→NULL
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Iterative Approach</SubHeading>
          <Paragraph>
            Traverse the linked list. While current node is not NULL, reverse
            the pointer for each node to its previous node.
          </Paragraph>
          <Paragraph>
            Return the previous node, which is last node in linked list, but
            first node in reversed linked list. So, it's the head of reversed
            linked list.
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
            pythonFile="/dsa/linked_lists/reverse_a_linked_list/iterative/reverse_a_linked_list.py"
            cppFile="/dsa/linked_lists/reverse_a_linked_list/iterative/reverse_a_linked_list.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Recursive Approach</SubHeading>
          <Paragraph>
            Recursively reach the last node of the linked list. As the call
            stack unwinds, reverse the pointers. So, that next node is pointing
            to current node.
          </Paragraph>
          <Paragraph>
            Set the current node's next pointer to NULL. This is useful for
            first node, so it's next points to NULL rather than second element
            of original linked list.
          </Paragraph>
          <Paragraph>
            Return the last node as the new head of the reversed list
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n)",
              "Space Complexity: O(n) (due to recursion stack)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/linked_lists/reverse_a_linked_list/recursive/reverse_a_linked_list.py"
            cppFile="/dsa/linked_lists/reverse_a_linked_list/recursive/reverse_a_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default ReverseALinkedList;
