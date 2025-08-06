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
interface PrintReversedLinkedListProps {}
const PrintReversedLinkedList: React.FC<
  PrintReversedLinkedListProps
> = ({}) => {
  return (
    <Container>
      <Heading>Print Reversed Linked List</Heading>
      <PracticeLinks workattech="print-reversed-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a Linked List, print it in reverse direction using recursion.
          </Paragraph>
          <Paragraph>Note: Do not reverse the list.</Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
List: 1→3→4→7
Print: 7 4 3 1
            `,
            ]}
          />
          <Paragraph>Note: Each node should be separated by a space.</Paragraph>
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            For every node in the linked list first, print its next node
            recursively and then print the current node.
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
            pythonFile="/dsa/linked_lists/print_reversed_linked_list/approach/print_reversed_linked_list.py"
            cppFile="/dsa/linked_lists/print_reversed_linked_list/approach/print_reversed_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default PrintReversedLinkedList;
