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
interface LinkedListToArrayProps {}
const LinkedListToArray: React.FC<LinkedListToArrayProps> = ({}) => {
  return (
    <Container>
      <Heading>Linked List to Array</Heading>
      <PracticeLinks workattech="linked-list-to-array" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a Linked List, return an array containing the nodes of the
            list in the same order.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
List: 1→3→4→7
Array: [1, 3, 4, 7]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            The idea is simply to traverse the given linked list and store each
            node value in the answer array and return the array.
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
            pythonFile="/dsa/linked_lists/linked_list_to_array/approach/linked_list_to_array.py"
            cppFile="/dsa/linked_lists/linked_list_to_array/approach/linked_list_to_array.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default LinkedListToArray;
