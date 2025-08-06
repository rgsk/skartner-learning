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
interface DeleteNodeFromLinkedListProps {}
const DeleteNodeFromLinkedList: React.FC<
  DeleteNodeFromLinkedListProps
> = ({}) => {
  return (
    <Container>
      <Heading>Delete Node From Linked List</Heading>
      <PracticeLinks workattech="delete-node-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Delete a given node from a singly-linked list. You do not have
            access to the head of the list. Also, the node to be deleted is not
            the tail of the linked list.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
1→2→3→4

Deleting 2nd node, we get

1→3→4
            `,
              `\
1→3→4→1

Deleting 3rd node, we get

1→3→1
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            Since we do not have access to the head of the list, traversing the
            list is not an option. All we need to do is change the data and
            pointer of the current node with that of the next node.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(1)", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/linked_lists/delete_node_from_linked_list/approach/delete_node_from_linked_list.py"
            cppFile="/dsa/linked_lists/delete_node_from_linked_list/approach/delete_node_from_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default DeleteNodeFromLinkedList;
