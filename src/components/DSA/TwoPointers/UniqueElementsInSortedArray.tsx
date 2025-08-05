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
import YoutubeVideo from "@/components/Shared/YoutubeVideo";

interface UniqueElementsInSortedArrayProps {}
const UniqueElementsInSortedArray: React.FC<
  UniqueElementsInSortedArrayProps
> = ({}) => {
  return (
    <Container>
      <Heading>Unique Elements in Sorted Array</Heading>
      <PracticeLinks workattech="unique-elements-sorted-array" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a sorted array A, find the size of array A after removing the
            duplicate elements.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
A: [1 2 3 3 3 4 5 5]
Size of A after removing duplicate elements: 5
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            We can insert all the elements of the array in a set and return the
            size of the set.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n)",
              "Auxiliary Space Complexity: O(n)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/two_pointers/unique_elements_in_sorted_array/naive/unique_elements_in_sorted_array.py"
            cppFile="/dsa/two_pointers/unique_elements_in_sorted_array/naive/unique_elements_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <UnorderedList
            items={[
              "Since the array is sorted, duplicates will be adjacent.",
              "We keep track of the current unique element using `cur`.",
              "Intially, `cur` is assigned the first element in array, ie. element at index 0.",
              {
                text: "Then we start from index 1, iterate through the array:",
                children: [
                  {
                    text: "If the element at current index is different from `cur`, we have found a new unique element",
                    children: [
                      "Update `cur` to this new value.",
                      "Increment `unique` count.",
                    ],
                  },
                ],
              },
              "At the end, `unique` holds the count of distinct elements.",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n)",
              "Auxiliary Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/two_pointers/unique_elements_in_sorted_array/optimal/unique_elements_in_sorted_array.py"
            cppFile="/dsa/two_pointers/unique_elements_in_sorted_array/optimal/unique_elements_in_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="LoV11ks5EmI" />
      </Section>
    </Container>
  );
};
export default UniqueElementsInSortedArray;
