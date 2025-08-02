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
    </Container>
  );
};
export default RowColumnZero;
