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
interface NextGreaterElementInSortedArrayProps {}
const NextGreaterElementInSortedArray: React.FC<
  NextGreaterElementInSortedArrayProps
> = ({}) => {
  return (
    <Container>
      <Heading>Next Greater Element In Sorted Array</Heading>
      <PracticeLinks workattech="next-greater-element-in-sorted-array" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a sorted array and a number key, find the smallest array
            element which is greater than the key.
          </Paragraph>
          <Paragraph>
            If the key is greater than or equal to the largest element then
            return the key itself.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
Array: [1, 2, 3, 3, 4, 4, 8, 10]
Number: 4
Answer: 8
            `,
              `\
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 5
Answer: 5 (Largest Element)
            `,
              `\
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: -5
Answer: 1
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            The simple solution is to traverse the array and return the first
            element greater than <InlineCode>key</InlineCode>.
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
            pythonFile="/dsa/searching/next_greater_element_in_sorted_array/naive/next_greater_element_in_sorted_array.py"
            cppFile="/dsa/searching/next_greater_element_in_sorted_array/naive/next_greater_element_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Condition Based Binary Search (Optimal)</SubHeading>
          <Paragraph>We modify condition slightly.</Paragraph>
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
            pythonFile="/dsa/searching/next_greater_element_in_sorted_array/condition_based/next_greater_element_in_sorted_array.py"
            cppFile="/dsa/searching/next_greater_element_in_sorted_array/condition_based/next_greater_element_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>
            Storing Previous Result Based Binary Search (Optimal)
          </SubHeading>
          <Paragraph>
            If we satisfy the condition we store result, and look for better.
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
            pythonFile="/dsa/searching/next_greater_element_in_sorted_array/storing_previous_result/next_greater_element_in_sorted_array.py"
            cppFile="/dsa/searching/next_greater_element_in_sorted_array/storing_previous_result/next_greater_element_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Right Binary Search (Optimal)</SubHeading>
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
            pythonFile="/dsa/searching/next_greater_element_in_sorted_array/right_binary_search/next_greater_element_in_sorted_array.py"
            cppFile="/dsa/searching/next_greater_element_in_sorted_array/right_binary_search/next_greater_element_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Library Approach</SubHeading>
          <Paragraph>use bisect_right or upper_bound to solve this.</Paragraph>
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
            pythonFile="/dsa/searching/next_greater_element_in_sorted_array/lib/next_greater_element_in_sorted_array.py"
            cppFile="/dsa/searching/next_greater_element_in_sorted_array/lib/next_greater_element_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default NextGreaterElementInSortedArray;
