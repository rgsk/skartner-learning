"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Heading from "@/components/Shared/Heading";
import MatrixComparison from "@/components/Shared/MatrixComparison";
import MinorHeading from "@/components/Shared/MinorHeading";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Problem from "@/components/Shared/Problem";
import Section from "@/components/Shared/Section";
import Solution from "@/components/Shared/Solution";
import SubHeading from "@/components/Shared/SubHeading";
import UnorderedList from "@/components/Shared/UnorderedList";

interface RowColumnZeroProps {}
const RowColumnZero: React.FC<RowColumnZeroProps> = ({}) => {
  return (
    <Container>
      <Heading>Row Column Zero</Heading>
      <PracticeLinks workattech="row-column-zero" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a matrix, if any of the cells in the matrix is 0, set all the
            elements in its row and column to 0.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <div className="border border-gray-300 dark:border-gray-700 rounded-sm py-2 px-4 space-y-4">
            <MatrixComparison
              left={[
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
              ]}
              right={[
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1],
              ]}
            />
            <MatrixComparison
              left={[
                [0, 1, 2],
                [3, 4, 5],
                [1, 2, 3],
              ]}
              right={[
                [0, 0, 0],
                [0, 4, 5],
                [0, 2, 3],
              ]}
            />
            <MatrixComparison
              left={[
                [0, 1, 0],
                [3, 4, 5],
                [1, 2, 3],
              ]}
              right={[
                [0, 0, 0],
                [0, 4, 0],
                [0, 2, 0],
              ]}
            />
          </div>
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            We can keep track of which rows and columns have zero in first pass.
            Then, in second pass, update those values to zero, which have a zero
            in row or column.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(row_size * column_size)",
              "Space Complexity: O(row_size + column_size)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/row_column_zero/naive/row_column_zero.py"
            cppFile="/dsa/arrays/row_column_zero/naive/row_column_zero.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            We don't create separate arrays to track which rows/cols have a
            zero. We use the matrix itself for this purpose. For eg. if item at
            index 2, 3 is zero, we set zero at matrix[2][0] and matrix[0][3],
            indicating that 3rd row and 4th column is zero.
          </Paragraph>
          <Paragraph>
            In second pass, for all matrix[2][j] (3rd row) we would set 0, as
            matrix[2][0] is zero. Similarly, for all matrix[i][3] (4th column)
            we would set 0, as matrix[0][3] is zero.
          </Paragraph>
          <Paragraph>
            We need to keep in mind, one edge case. matrix[0][0] is special
            because it keeps track of two things, both the first row and the
            first column. So, for deciding about first row or first column, we
            can't rely on matrix[0][0], so, we keep a separate variables for it.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(row_size * column_size)",
              "Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/row_column_zero/optimal/row_column_zero.py"
            cppFile="/dsa/arrays/row_column_zero/optimal/row_column_zero.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default RowColumnZero;
