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
interface DeleteXthNodeFromEndOfLinkedListProps {}
const DeleteXthNodeFromEndOfLinkedList: React.FC<
  DeleteXthNodeFromEndOfLinkedListProps
> = ({}) => {
  return (
    <Container>
      <Heading>Delete Xth Node From End of Linked List</Heading>
      <PracticeLinks workattech="delete-xth-node-end-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a linked list, delete the xth node from the end.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Linked list: 1→2→3→4
x: 2
Result: 1→2→4
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph
            text={String.raw`
            We use a dummy node before the head to simplify edge cases such as
            deleting the first node. The fast pointer is moved \`x + 1\` steps
            ahead to maintain a gap, then both pointers move together until
            \`fast\` reaches the end. The \`slow\` pointer will then point to the
            node just before the one that needs to be deleted. Finally, we
            unlink and delete the target node and return the updated head.
            `}
          ></Paragraph>
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
            pythonFile="/dsa/linked_lists/delete_xth_node_from_end_of_linked_list/approach/delete_xth_node_from_end_of_linked_list.py"
            cppFile="/dsa/linked_lists/delete_xth_node_from_end_of_linked_list/approach/delete_xth_node_from_end_of_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default DeleteXthNodeFromEndOfLinkedList;
