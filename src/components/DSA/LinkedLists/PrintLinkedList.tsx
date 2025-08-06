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
interface PrintLinkedListProps {}
const PrintLinkedList: React.FC<PrintLinkedListProps> = ({}) => {
  return (
    <Container>
      <Heading>Print Linked List</Heading>
      <PracticeLinks workattech="print-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>Given a Linked List, print all its nodes.</Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
List: 1→3→4→7
Print: 1 3 4 7
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
            The idea is simply to traverse the given linked list and print the
            value of every node visited.
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
            pythonFile="/dsa/linked_lists/print_linked_list/approach/print_linked_list.py"
            cppFile="/dsa/linked_lists/print_linked_list/approach/print_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default PrintLinkedList;
