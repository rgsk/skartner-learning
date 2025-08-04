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

interface MedianOfRowWiseSortedMatrixProps {}
const MedianOfRowWiseSortedMatrix: React.FC<
  MedianOfRowWiseSortedMatrixProps
> = ({}) => {
  return (
    <Container>
      <Heading>Median of Row-wise Sorted Matrix</Heading>
      <PracticeLinks workattech="median-row-sorted-matrix" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given an <InlineCode>n*m</InlineCode> matrix which is sorted
            row-wise, you need to find the median of the matrix.
          </Paragraph>
          <Paragraph>
            Median of a group of numbers is the middle element after they are
            sorted. Both n and m are guaranteed to be odd numbers, therefore
            there’s only one middle number.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
1 2 3
3 3 4
1 1 2
Median: 2
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            The simple approach is to store all elements in an array, sort the
            array and return the middle element of the array(i.e.{" "}
            <InlineCode>[(r*c)/2]th element</InlineCode>).
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(r * c * log(r*c))",
              "Space Complexity: O(r * c)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/searching/median_of_row_wise_sorted_matrix/naive/median_of_row_wise_sorted_matrix.py"
            cppFile="/dsa/searching/median_of_row_wise_sorted_matrix/naive/median_of_row_wise_sorted_matrix.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default MedianOfRowWiseSortedMatrix;
