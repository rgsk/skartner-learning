"use client";
import MiddleElementOfLinkedListSlowFastPointerBasedApproachVisualization from "@/components/DSA/LinkedLists/MiddleElementOfLinkedList/MiddleElementOfLinkedListSlowFastPointerBasedApproachVisualization";
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
import Visualization from "@/components/Visualization/Visualization";
interface MiddleElementOfLinkedListProps {}
const MiddleElementOfLinkedList: React.FC<
  MiddleElementOfLinkedListProps
> = ({}) => {
  return (
    <Container>
      <Heading>Middle Element of Linked List</Heading>
      <PracticeLinks workattech="middle-element-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a linked list, find the middle element and print its value.
          </Paragraph>
          <Paragraph>
            If the list has even number of elements, print the first of the two
            middle elements.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
List: 1→8→3
Middle element: 8
            `,
              `\
List: 1→3→8→5
Middle element: 3
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Length Based Approach</SubHeading>
          <Paragraph>
            Traverse the whole linked list and count the number of elements.
            Now, again traverse the linked list up to the middle element.
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
            pythonFile="/dsa/linked_lists/middle_element_of_linked_list/length_based/middle_element_of_linked_list.py"
            cppFile="/dsa/linked_lists/middle_element_of_linked_list/length_based/middle_element_of_linked_list.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Slow Fast Pointer Based Approach</SubHeading>
          <Paragraph
            text="Initialize two pointers say `slow` and `fast` pointing to the start of
            the list. Move the `fast` pointer by two nodes and the `slow` pointer by
            one node. When the `fast` pointer reaches the end of the list, the
            `slow` pointer must be pointing at the middle node of the list."
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
            pythonFile="/dsa/linked_lists/middle_element_of_linked_list/slow_fast_pointer/middle_element_of_linked_list.py"
            cppFile="/dsa/linked_lists/middle_element_of_linked_list/slow_fast_pointer/middle_element_of_linked_list.cpp"
          />
        </Section>
        <Visualization>
          <MiddleElementOfLinkedListSlowFastPointerBasedApproachVisualization />
        </Visualization>
      </Solution>
    </Container>
  );
};
export default MiddleElementOfLinkedList;
