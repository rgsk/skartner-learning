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
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            By the use of the binary search algorithm, this problem can be
            solved much efficiently. Since there will be exactly (r * c)/2
            numbers less than the median so we will find the [(r * c)/2 +1]th
            number.
          </Paragraph>
          <UnorderedList
            items={[
              "First, find the minimum and maximum element in the matrix to get the lower bound and upper bound of the binary search.",
              "The minimum element can be found by comparing the first element of each row and the maximum element can be found by comparing the last element of each row.",
              "left is assigned as minimum, and right is assigned as maxium.",
              "Then we apply binary search on this range.",
              "Take mid = (left + right)/2 and get the count of numbers less than mid in each row by using bisect_right / upper_bound function and change the value of left or right accordingly.",
              "If the count of numbers less than the mid, is less than (r * c) / 2 then the median must be in the second half otherwise the median must be in the first half.",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              {
                text: "Time Complexity: (log(max - min) * r * log(cols))",
                children: [
                  "The binary search from min to max will be performed in log(max - min) time and the upper_bound() function will take log(cols) time which will be performed for each row.",
                ],
              },
              "Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/searching/median_of_row_wise_sorted_matrix/optimal/median_of_row_wise_sorted_matrix.py"
            cppFile="/dsa/searching/median_of_row_wise_sorted_matrix/optimal/median_of_row_wise_sorted_matrix.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default MedianOfRowWiseSortedMatrix;
