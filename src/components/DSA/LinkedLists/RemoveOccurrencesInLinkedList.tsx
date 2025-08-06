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
interface RemoveOccurrencesInLinkedListProps {}
const RemoveOccurrencesInLinkedList: React.FC<
  RemoveOccurrencesInLinkedListProps
> = ({}) => {
  return (
    <Container>
      <Heading>Remove occurrences in Linked List</Heading>
      <PracticeLinks workattech="remove-occurences-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a linked list and a key, remove all occurrences of the key
            from the Linked List. Return the head of the resultant list.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Linked List: 1→2→3→2→4→7→2
Key: 2
After removal: 1→3→4→7
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach 1</SubHeading>
          <Paragraph>
            The idea is to simply traverse the given linked list and delete all
            the occurrences of the key one by one.
          </Paragraph>
          <Paragraph>
            Note: If the head node is equal to the key then move the head
            pointer to the first node which is not equal to the key and then
            follow the above step.
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
            pythonFile="/dsa/linked_lists/remove_occurrences_in_linked_list/approach_1/remove_occurrences_in_linked_list.py"
            cppFile="/dsa/linked_lists/remove_occurrences_in_linked_list/approach_1/remove_occurrences_in_linked_list.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Approach 2</SubHeading>
          <Paragraph>
            We store nodes with value other than key, in a separate linked list.
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
            pythonFile="/dsa/linked_lists/remove_occurrences_in_linked_list/approach_2/remove_occurrences_in_linked_list.py"
            cppFile="/dsa/linked_lists/remove_occurrences_in_linked_list/approach_2/remove_occurrences_in_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default RemoveOccurrencesInLinkedList;
