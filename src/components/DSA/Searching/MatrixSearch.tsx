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
interface MatrixSearchProps {}
const MatrixSearch: React.FC<MatrixSearchProps> = ({}) => {
  return (
    <Container>
      <Heading>Matrix Search</Heading>
      <PracticeLinks workattech="matrix-search" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a matrix, check if the matrix contains a given key.
          </Paragraph>
          <Paragraph>The matrix has the following properties:</Paragraph>
          <UnorderedList
            items={[
              "Integer in each row is arranged in non-decreasing order from left to right.",
              "The first integer in every row is greater than the last integer of the previous row.",
            ]}
          />
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
Matrix:
1 2 3
4 5 6
7 8 9
Key: 6
Answer: true
            `,
              `\
Matrix:
1 2 3
4 5 6
7 8 9
10 11 12
Key: 15
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
            Let's say there are n rows and m columns. The simple way is to
            compare the key value with every matrix element. Run two nested
            loops and if at any point the key value is equal to the matrix
            element, return true. Otherwise, return false at the end.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n * m)", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/searching/matrix_search/naive/matrix_search.py"
            cppFile="/dsa/searching/matrix_search/naive/matrix_search.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            The problem can be solved by using two binary searches since the
            matrix is sorted in row-major order.
          </Paragraph>
          <UnorderedList
            items={[
              "First, perform a binary search for the whole matrix and check that for any row, the first element of the row is less than or equal to the key and the last element of the row is greater than or equal to the key.",
              "After finding such a row, perform a binary search on that row to find the key-value and return true.",
              "If the key value is not found, return false.",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(log(n) + log(m))",
              "Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/searching/matrix_search/optimal_1/matrix_search.py"
            cppFile="/dsa/searching/matrix_search/optimal_1/matrix_search.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach 2</SubHeading>
          <Paragraph>
            This approach treats the 2D matrix as a flattened 1D sorted array
            without actually creating a new array.
          </Paragraph>
          <UnorderedList
            items={[
              "We use binary search on index range `0` to `rows * cols - 1`.",
              {
                text: "For a given mid index `m`,",
                children: [
                  "Row is `m / cols` and column is `m % cols`.",
                  "This maps the 1D index back to its 2D matrix position.",
                ],
              },
              "Compare the value at that position with key and adjust the binary search boundaries.",
              "This works because the matrix rows are sorted and the last element of a row is less than the first element of the next row.",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(log(n * m))", "Space Complexity: O(1)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/searching/matrix_search/optimal_2/matrix_search.py"
            cppFile="/dsa/searching/matrix_search/optimal_2/matrix_search.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default MatrixSearch;
