"use client";
import KthElementInLinkedListApproachVisualization from "@/components/DSA/LinkedLists/KthElementInLinkedList/KthElementInLinkedListApproachVisualization";
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
interface KthElementInLinkedListProps {}
const KthElementInLinkedList: React.FC<KthElementInLinkedListProps> = ({}) => {
  return (
    <Container>
      <Heading>Kth Element in Linked List</Heading>
      <PracticeLinks workattech="kth-element-linked-list" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a Linked List, find the element at the kth position.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
List: 1→3→4→7
k: 2
Answer: 3
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>Traverse the linkedin list, k-1 times</Paragraph>
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
            pythonFile="/dsa/linked_lists/kth_element_in_linked_list/approach/kth_element_in_linked_list.py"
            cppFile="/dsa/linked_lists/kth_element_in_linked_list/approach/kth_element_in_linked_list.cpp"
          />
        </Section>
        <Section>
          <Visualization>
            <KthElementInLinkedListApproachVisualization />
          </Visualization>
        </Section>
      </Solution>
    </Container>
  );
};
export default KthElementInLinkedList;
