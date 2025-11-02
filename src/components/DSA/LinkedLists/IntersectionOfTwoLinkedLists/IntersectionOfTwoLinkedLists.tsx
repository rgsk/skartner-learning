/* eslint-disable @next/next/no-img-element */
"use client";
import IntersectionOfTwoLinkedListsApproachVisualization from "@/components/DSA/LinkedLists/IntersectionOfTwoLinkedLists/IntersectionOfTwoLinkedListsApproachVisualization";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Heading from "@/components/Shared/Heading";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Problem from "@/components/Shared/Problem";
import Section from "@/components/Shared/Section";
import Solution from "@/components/Shared/Solution";
import SubHeading from "@/components/Shared/SubHeading";
import UnorderedList from "@/components/Shared/UnorderedList";
import Visualization from "@/components/Visualization/Visualization";
interface IntersectionOfTwoLinkedListsProps {}
const IntersectionOfTwoLinkedLists: React.FC<
  IntersectionOfTwoLinkedListsProps
> = ({}) => {
  return (
    <Container>
      <Heading>Intersection of Two Linked Lists</Heading>
      <PracticeLinks workattech="intersection-two-linked-lists" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given two linked lists, find the node at which they intersect.
          </Paragraph>
          <img
            src="/dsa/linked_lists/intersection_of_two_linked_lists/intersection-two-linked-lists.png"
            alt="demonstration"
            className="w-[400px]"
          />
          <Paragraph>Here the linked lists A and B intersect at C1.</Paragraph>
          <Paragraph
            text={String.raw`If the two lists do not intersect, return \`null\`.`}
          ></Paragraph>
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            This function finds the intersection point of two linked lists using
            two pointers. Each pointer traverses its own list, and when it
            reaches the end, it switches to the other list's head. If the lists
            intersect, the pointers meet at the intersection node; otherwise,
            both become NULL.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n + m)", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/linked_lists/intersection_of_two_linked_lists/approach/intersection_of_two_linked_lists.py"
            cppFile="/dsa/linked_lists/intersection_of_two_linked_lists/approach/intersection_of_two_linked_lists.cpp"
          />
        </Section>
        <Section>
          <Visualization>
            <IntersectionOfTwoLinkedListsApproachVisualization />
          </Visualization>
        </Section>
      </Solution>
    </Container>
  );
};
export default IntersectionOfTwoLinkedLists;
