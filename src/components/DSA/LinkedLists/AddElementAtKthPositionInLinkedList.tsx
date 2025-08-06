"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Examples from "@/components/Shared/Examples";
import Heading from "@/components/Shared/Heading";
import InlineCode from "@/components/Shared/InlineCode";
import MinorHeading from "@/components/Shared/MinorHeading";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Problem from "@/components/Shared/Problem";
import Section from "@/components/Shared/Section";
import Solution from "@/components/Shared/Solution";
import SubHeading from "@/components/Shared/SubHeading";
import UnorderedList from "@/components/Shared/UnorderedList";
interface AddElementAtKthPositionInLinkedListProps {}
const AddElementAtKthPositionInLinkedList: React.FC<
  AddElementAtKthPositionInLinkedListProps
> = ({}) => {
  return (
    <Container>
      <Heading>Add Element at Kth Position in Linked List</Heading>
      <PracticeLinks workattech="add-kth-element-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a Linked List, an integer k and an element, add that element
            at the kth position of the linked list.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
List: 1→3→4→7
k: 2
Element: 5
Result: 1→5→3→4→7
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            Traverse the linkedin list, <InlineCode>k-2</InlineCode> times
          </Paragraph>
          <UnorderedList
            items={[
              "Change the `next` pointer value of new element to the kth element in the original linked list.",
              "Change the `next` pointer value of `k-1` th element to the new element.",
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
            pythonFile="/dsa/linked_lists/add_element_at_kth_position_in_linked_list/approach/add_element_at_kth_position_in_linked_list.py"
            cppFile="/dsa/linked_lists/add_element_at_kth_position_in_linked_list/approach/add_element_at_kth_position_in_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default AddElementAtKthPositionInLinkedList;
