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
interface AppendLinkedListsProps {}
const AppendLinkedLists: React.FC<AppendLinkedListsProps> = ({}) => {
  return (
    <Container>
      <Heading>Append Linked Lists</Heading>
      <PracticeLinks workattech="append-linked-lists" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given two Linked Lists, append second Linked List to end of first
            Linked List and return the first list.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
List 1: 1→3→4→7
List 2: 6→2→5
Result: 1→3→4→7→6→2→5
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            Traverse to the last element of the first list and store the address
            of the first element of the second list in the next pointer value of
            the last element of the first list. Return the first list.
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
            pythonFile="/dsa/linked_lists/append_linked_lists/approach/append_linked_lists.py"
            cppFile="/dsa/linked_lists/append_linked_lists/approach/append_linked_lists.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default AppendLinkedLists;
