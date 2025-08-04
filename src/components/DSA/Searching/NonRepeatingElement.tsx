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
interface NonRepeatingElementProps {}
const NonRepeatingElement: React.FC<NonRepeatingElementProps> = ({}) => {
  return (
    <Container>
      <Heading>Non-Repeating Element</Heading>
      <PracticeLinks workattech="non-repeating-element" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a sorted list of numbers in which all elements appear twice
            except one element that appears only once, find the number that
            appears only once.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Array: [1, 1, 2, 3, 3, 4, 4]
Here, 2 appears once and all other elements appear twice.
Output: 2
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            A simple way is to traverse the array, since it is sorted the
            element with a single occurrence can be found by comparing two
            consecutive elements.
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
            pythonFile="/dsa/searching/non_repeating_element/naive/non_repeating_element.py"
            cppFile="/dsa/searching/non_repeating_element/naive/non_repeating_element.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Binary Search Approach</SubHeading>
          <UnorderedList
            items={[
              "On left part of single element occurence, value at even index, has same value as value at next index. So, we do low = mid + 1, because single element must be on the right.",
              "On left part of single element occurence, value at odd index, has same value as previous index, so we do low = mid + 1, because single element must be on the right.",
              "Otherwise we set high = mid. So, either mid could be answer or answer will be in left of it.",
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
            pythonFile="/dsa/searching/non_repeating_element/binary_search/non_repeating_element.py"
            cppFile="/dsa/searching/non_repeating_element/binary_search/non_repeating_element.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Binary Search Alternate Approach</SubHeading>
          <UnorderedList
            items={[
              {
                text: "mid is even",

                children: [
                  "On left part of single element occurence, value at even index, has same value as value at next index. So, we do low = mid + 1, because single element must be on the right.",
                  "On right part of single element occurence, value at even index, has same value as value at previous index. So, we do high = mid - 1, because single element must be on the left.",
                  "if values are not same, arr[mid] is the single occurence.",
                ],
              },
              {
                text: "mid is odd",
                children: [
                  "On left part of single element occurence, value at odd index, has same value as value at previous index. So, we do low = mid + 1, because single element must be on the right.",
                  "On right part of single element occurence, value at odd index, has same value as value at next index. So, we do high = mid - 1, because single element must be on the left.",
                  "if values are not same, arr[mid] is the single occurence.",
                ],
              },
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
            pythonFile="/dsa/searching/non_repeating_element/binary_search_2/non_repeating_element.py"
            cppFile="/dsa/searching/non_repeating_element/binary_search_2/non_repeating_element.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default NonRepeatingElement;
