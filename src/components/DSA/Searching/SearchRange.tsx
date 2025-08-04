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

interface SearchRangeProps {}
const SearchRange: React.FC<SearchRangeProps> = ({}) => {
  return (
    <Container>
      <Heading>Search Range</Heading>
      <PracticeLinks workattech="search-range" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a sorted array and a number key, find the index of the first
            and last occurrence of the key in the array.
          </Paragraph>
          <Paragraph>
            If the key is not present, return <InlineCode>[-1, -1]</InlineCode>.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 3
Answer: [2, 4]
            `,
              `\
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 5
Answer: [7, 7]
            `,
              `\
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 6
Answer: [-1, -1]
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            A simple solution is to iterate the array and return the first and
            last occurrence of the key and if the key is not present return [-1,
            -1].
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
            pythonFile="/dsa/searching/search_range/naive/search_range.py"
            cppFile="/dsa/searching/search_range/naive/search_range.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            We perform the binary search for finding first and last occurrence,
            by applying additional conditions.
          </Paragraph>
          <UnorderedList
            items={[
              "To find the first occurrence - If arr[mid - 1] is less than key and arr[mid] is equal to key return mid. Otherwise, if arr[mid]  is less than the key, search in the second half otherwise search in the first half.",
              "To find the last occurrence - If arr[mid] is equal to key and arr[mid + 1] is greater than the key return mid. Otherwise, if arr[mid] is greater than the key, search in the first half otherwise search in the second half.",
            ]}
          />
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
            pythonFile="/dsa/searching/search_range/optimal_1/search_range.py"
            cppFile="/dsa/searching/search_range/optimal_1/search_range.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach 2</SubHeading>
          <Paragraph>
            We store the index found in ans, and look further for index in left
            for first occurrence, or in right for last occurrence.
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
            pythonFile="/dsa/searching/search_range/optimal_2/search_range.py"
            cppFile="/dsa/searching/search_range/optimal_2/search_range.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach 3</SubHeading>
          <Paragraph>
            This approach uses two separate binary searches: one
            (left_binary_search) to find the first occurrence of the target by
            biasing the search to the left, and another (right_binary_search) to
            find the last occurrence by biasing the search to the right.
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
            pythonFile="/dsa/searching/search_range/optimal_3/search_range.py"
            cppFile="/dsa/searching/search_range/optimal_3/search_range.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Library Based Approach</SubHeading>
          <Paragraph>
            We use inbuilt library functions for finding first and last
            occurence.
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
            pythonFile="/dsa/searching/search_range/lib/search_range.py"
            cppFile="/dsa/searching/search_range/lib/search_range.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default SearchRange;
