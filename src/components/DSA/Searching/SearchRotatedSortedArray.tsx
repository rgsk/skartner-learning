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

interface SearchRotatedSortedArrayProps {}
const SearchRotatedSortedArray: React.FC<
  SearchRotatedSortedArrayProps
> = ({}) => {
  return (
    <Container>
      <Heading>Search Rotated Sorted Array</Heading>
      <PracticeLinks workattech="search-rotated-array" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            You are given a list of unique integers which are sorted but rotated
            at some pivot. You are also given a target value and you have to
            find its index in the list. If it is not present in the list, return
            -1.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
List: [4, 5, 6, 7, 1, 2, 3]
Target value: 6
Resultant index: 2
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            A simple solution is to just iterate the array and find the index of
            the target value by comparing each element of the array with the
            target value.
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
            pythonFile="/dsa/searching/search_rotated_sorted_array/naive/search_rotated_sorted_array.py"
            cppFile="/dsa/searching/search_rotated_sorted_array/naive/search_rotated_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach 1</SubHeading>
          <Paragraph>
            The array can be treated as two different sorted arrays. All we need
            to do is to find the point from where the array needs to be broken
            down into two different arrays.
          </Paragraph>
          <Paragraph>
            And depending on where target is present, we run binary_search on
            left or right part.
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
            pythonFile="/dsa/searching/search_rotated_sorted_array/optimal_1/search_rotated_sorted_array.py"
            cppFile="/dsa/searching/search_rotated_sorted_array/optimal_1/search_rotated_sorted_array.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach 2</SubHeading>
          <Paragraph>
            If target is on right side, and mid element is on right side,
            perform normal binary search. Otherwise, since mid is in left part,
            do left = mid + 1, so that we take mid towards right.
          </Paragraph>
          <Paragraph>
            If target is on left side, and mid element is on left side, perform
            normal binary search. Otherwise, since mid is in right part, do
            right = mid - 1, so that we take mid towards left.
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
            pythonFile="/dsa/searching/search_rotated_sorted_array/optimal_2/search_rotated_sorted_array.py"
            cppFile="/dsa/searching/search_rotated_sorted_array/optimal_2/search_rotated_sorted_array.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default SearchRotatedSortedArray;
