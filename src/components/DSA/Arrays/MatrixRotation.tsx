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

interface MatrixRotationProps {}
const MatrixRotation: React.FC<MatrixRotationProps> = ({}) => {
  return (
    <Container>
      <Heading>Matrix Rotation</Heading>
      <PracticeLinks workattech="matrix-rotation" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a matrix, rotate the matrix 90 degrees clockwise.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
Matrix:
1 2 3
4 5 6
7 8 9
After rotation:
7 4 1
8 5 2
9 6 3
            `,
              `\
Matrix:
1 2
3 4
5 6
After rotation:
5 3 1
6 4 2
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Approach</SubHeading>
          <Paragraph>
            Observe that a 90-degree clockwise rotation can be broken up into 2
            simpler operations, the superposition of which gives the required
            rotation.
          </Paragraph>
          <Paragraph>
            The operations are “Transpose” (interchanging the rows and the
            columns), and “Row Reversal”.
          </Paragraph>
          <Paragraph>
            By applying these 2 operations, one after another to the matrix, we
            can obtain the 90-degree rotated matrix.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(numRows * numCols)",
              "Space Complexity: O(numRows * numCols)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/matrix_rotation/approach/matrix_rotation.py"
            cppFile="/dsa/arrays/matrix_rotation/approach/matrix_rotation.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="0JLBS0N6Q5A" />
      </Section>
    </Container>
  );
};
export default MatrixRotation;
