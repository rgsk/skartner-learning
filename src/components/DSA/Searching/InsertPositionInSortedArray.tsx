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

interface InsertPositionInSortedArrayProps {}
const InsertPositionInSortedArray: React.FC<
  InsertPositionInSortedArrayProps
> = ({}) => {
  return (
    <Container>
      <Heading>Insert Position in Sorted Array</Heading>
      <PracticeLinks workattech="insert-position-in-sorted-array" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a sorted array containing distinct integers and a number
            'key', find the index of the key in the array.
          </Paragraph>
          <Paragraph>
            If the key is not present, return the index at which it would be
            inserted considering that we need to maintain the sort order.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
Array: [1, 2, 3, 4, 5]
Number: 3
Answer: 2
            `,
              `\
Array: [1, 2, 3, 5]
Number: 4
Answer: 3
            `,
              `\
Array: [1, 2, 3, 4, 5]
Number: -100
Answer: 0
            `,
              `\
Array: [1, 2, 3, 4, 5]
Number: 6
Answer: 5
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            We find the index of first element that is greater than equal to
            key. This way if key is present, index of that is returned.
            Otherwise, index of element greater than it is returned. That would
            be the insert position of key.
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
            pythonFile="/dsa/searching/insert_position_in_sorted_array/naive/insert_position_in_sorted_array.py"
            cppFile="/dsa/searching/insert_position_in_sorted_array/naive/insert_position_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Left Binary Search</SubHeading>
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
            pythonFile="/dsa/searching/insert_position_in_sorted_array/left_binary_search/insert_position_in_sorted_array.py"
            cppFile="/dsa/searching/insert_position_in_sorted_array/left_binary_search/insert_position_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Library Based Binary Search</SubHeading>
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
            pythonFile="/dsa/searching/insert_position_in_sorted_array/lib/insert_position_in_sorted_array.py"
            cppFile="/dsa/searching/insert_position_in_sorted_array/lib/insert_position_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default InsertPositionInSortedArray;
