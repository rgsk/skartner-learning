/* eslint-disable @next/next/no-img-element */
"use client";
import AddTwoNumbersAsListsApproachVisualization from "@/components/DSA/LinkedLists/AddTwoNumbersAsLists/AddTwoNumbersAsListsApproachVisualization";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Example from "@/components/Shared/Example";
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
interface AddTwoNumbersAsListsProps {}
const AddTwoNumbersAsLists: React.FC<AddTwoNumbersAsListsProps> = ({}) => {
  return (
    <Container>
      <Heading>Add Two Numbers as Lists</Heading>
      <PracticeLinks workattech="add-numbers-lists" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph
            text={String.raw`
            Given two natural numbers, \`a\` and \`b\`, represented as reversed linked
            lists, compute their sum c as another reversed linked list.
            `}
          ></Paragraph>
          <MinorHeading>Example 1</MinorHeading>
          <Paragraph>
            Two numbers 132 and 541 are shown in the form of reversed linked
            lists, and so is their sum which is 673.
          </Paragraph>
          <img
            src="/dsa/linked_lists/add_two_numbers_as_lists/image.png"
            alt="demonstration"
            className="w-[400px]"
          />
          <MinorHeading>Example 2</MinorHeading>
          <Example
            text={`\
Input:
a: 321 :   1 → 2 → 3
b: 654 :   4 → 5 → 6

Output:
c: 975 :   5 → 7 → 9
            `}
          />
          <MinorHeading>Example 3</MinorHeading>
          <Example
            text={`\
Input:
a: 501 :   1 → 0 → 5
b: 639 :   9 → 3 → 6

Output:
c: 1140 :   0 → 4 → 1 → 1
            `}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <UnorderedList
            items={[
              "Each linked list stores digits of a number in reverse order.",
              {
                text: "We simulate addition as done manually:",
                children: [
                  "Add corresponding digits + carry.",
                  "Compute new digit and carry.",
                  "Move to the next nodes.",
                ],
              },
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(max(n, m))",
              "Auxiliary Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/linked_lists/add_two_numbers_as_lists/approach/add_two_numbers_as_lists.py"
            cppFile="/dsa/linked_lists/add_two_numbers_as_lists/approach/add_two_numbers_as_lists.cpp"
          />
        </Section>
        <Visualization>
          <AddTwoNumbersAsListsApproachVisualization />
        </Visualization>
      </Solution>
    </Container>
  );
};
export default AddTwoNumbersAsLists;
