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

interface ContainsElementProps {}
const ContainsElement: React.FC<ContainsElementProps> = ({}) => {
  return (
    <Container>
      <Heading>Contains Element?</Heading>
      <PracticeLinks workattech="contains-element" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a sorted array and a number key, return whether the key is
            present in the array or not.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 2
Answer: true
            `,
              `\
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 6
Answer: false
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            The simple solution is to just iterate the array and find if the key
            is present in the array by comparing each element of the array with
            the key.
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
            pythonFile="/dsa/searching/contains_element/naive/contains_element.py"
            cppFile="/dsa/searching/contains_element/naive/contains_element.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            Since the array is sorted. Binary search can be used to check if the
            key is present in the array.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(log(n))", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/searching/contains_element/optimal/contains_element.py"
            cppFile="/dsa/searching/contains_element/optimal/contains_element.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default ContainsElement;
