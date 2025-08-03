/* eslint-disable @next/next/no-img-element */
"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
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
import YoutubeVideo from "@/components/Shared/YoutubeVideo";

interface PascalsTriangleProps {}
const PascalsTriangle: React.FC<PascalsTriangleProps> = ({}) => {
  return (
    <Container>
      <Heading>Pascal's Triangle</Heading>
      <PracticeLinks workattech="pascals-triangle" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            The triangle below is known as Pascal's triangle.
          </Paragraph>
          <img
            alt="Pascal's Triangle"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif"
          />
          <Paragraph>
            In this triangle, the value at a position is equal to the sum of
            values of the 2 elements just above it.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <UnorderedList
            items={[
              "The 2nd element of 5th row is 1+3 => 4",
              "The 3rd element of 5th row is 3+3 => 6",
              "The 4th element of 5th row is 3+1 => 4",
            ]}
          />
          <Paragraph>
            For the leftmost and the rightmost position in each row, the value
            is 1. The element in the first row is also 1.
          </Paragraph>
          <Paragraph>
            Given a number n, find the nth row of pascal's triangle.
          </Paragraph>
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Recursive Approach</SubHeading>
          <Paragraph>
            We find the row of the previous index using recursion and using the
            previous row's values, calculate the values in the current row.
            Repeat till we have calculated the value of the nth row.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n<sup>2</sup>)",
              "Space Complexity: O(n)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/pascals_triangle/recursive/pascals_triangle.py"
            cppFile="/dsa/arrays/pascals_triangle/recursive/pascals_triangle.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Iterative Approach</SubHeading>
          <Paragraph>
            It's the iterative version of recursive approach described above.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n<sup>2</sup>)",
              "Space Complexity: O(n)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/pascals_triangle/iterative/pascals_triangle.py"
            cppFile="/dsa/arrays/pascals_triangle/iterative/pascals_triangle.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Combinatorics Approach</SubHeading>
          <Paragraph>
            The terms in the <InlineCode>(n+1)th row</InlineCode> of the
            pascal's triangle are the nth binomial coefficients, from{" "}
            <InlineCode>
              <sup>n</sup>C<sub>0</sub> to <sup>n</sup>C<sub>n</sub>
            </InlineCode>
            .
          </Paragraph>
          <Paragraph>
            4th Pascal Row is -{" "}
            <InlineCode>
              <sup>3</sup>C<sub>0</sub>,<sup>3</sup>C<sub>1</sub>,<sup>3</sup>C
              <sub>2</sub>,<sup>3</sup>C<sub>3</sub>.
            </InlineCode>
          </Paragraph>
          <Paragraph>
            5th Pascal Row is -{" "}
            <InlineCode>
              <sup>4</sup>C<sub>0</sub>,<sup>4</sup>C<sub>1</sub>,<sup>4</sup>C
              <sub>2</sub>,<sup>4</sup>C<sub>3</sub>,<sup>4</sup>C<sub>4</sub>.
            </InlineCode>
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n<sup>2</sup>)",
              "Space Complexity: O(n)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/pascals_triangle/combinatorics/pascals_triangle.py"
            cppFile="/dsa/arrays/pascals_triangle/combinatorics/pascals_triangle.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Combinatorics Approach (Optimal)</SubHeading>
          <Paragraph>
            We can use the following recurrence to calculate the values of the
            binomial coefficients efficiently,{" "}
            <InlineCode>
              <sup>n</sup>C<sub>k</sub> = <sup>n</sup>C<sub>k - 1</sub> × (n − k
              + 1) / k
            </InlineCode>
          </Paragraph>
          <Paragraph>Proof:</Paragraph>
          <img
            src="/dsa/arrays/pascals_triangle/combinatorics_optimal/proof.png"
            alt="combinatorics_optimal proof"
            className="w-[400px]"
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={["Time Complexity: O(n)", "Space Complexity: O(n)"]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/pascals_triangle/combinatorics_optimal/pascals_triangle.py"
            cppFile="/dsa/arrays/pascals_triangle/combinatorics_optimal/pascals_triangle.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="wRNOPLBmUlU" />
      </Section>
    </Container>
  );
};
export default PascalsTriangle;
