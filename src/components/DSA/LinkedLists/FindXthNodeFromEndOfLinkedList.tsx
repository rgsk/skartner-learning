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
interface FindXthNodeFromEndOfLinkedListProps {}
const FindXthNodeFromEndOfLinkedList: React.FC<
  FindXthNodeFromEndOfLinkedListProps
> = ({}) => {
  return (
    <Container>
      <Heading>Find Xth Node from End of Linked List</Heading>
      <PracticeLinks workattech="find-xth-node-end-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a linked list, find the xth node from the end.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Linked list: 1→2→3→4
x: 2
Result: 3
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            We begin by moving a fast pointer x steps ahead in the list. Once
            the fast pointer is positioned x nodes ahead, we start moving both
            the fast and slow pointers one step at a time until the fast pointer
            reaches the end. At this point, the slow pointer will be pointing
            exactly to the xth node from the end.
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
            pythonFile="/dsa/linked_lists/find_xth_node_from_end_of_linked_list/approach/find_xth_node_from_end_of_linked_list.py"
            cppFile="/dsa/linked_lists/find_xth_node_from_end_of_linked_list/approach/find_xth_node_from_end_of_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default FindXthNodeFromEndOfLinkedList;
