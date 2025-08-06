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
interface RemoveElementAtKthPositionInLinkedListProps {}
const RemoveElementAtKthPositionInLinkedList: React.FC<
  RemoveElementAtKthPositionInLinkedListProps
> = ({}) => {
  return (
    <Container>
      <Heading>Remove Element at Kth Position in Linked List</Heading>
      <PracticeLinks workattech="delete-kth-element-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a Linked List and an integer k, remove the element at the kth
            position of the linked list.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
List: 1→3→4→7
k: 2
Result: 1→4→7
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            The idea is to traverse the given linked list up to k-1 th element
            and change the next pointer value of the k-1 th element to k+1 th
            element.
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
            pythonFile="/dsa/linked_lists/remove_element_at_kth_position_in_linked_list/approach/remove_element_at_kth_position_in_linked_list.py"
            cppFile="/dsa/linked_lists/remove_element_at_kth_position_in_linked_list/approach/remove_element_at_kth_position_in_linked_list.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default RemoveElementAtKthPositionInLinkedList;
