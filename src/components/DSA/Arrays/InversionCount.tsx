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

interface InversionCountProps {}
const InversionCount: React.FC<InversionCountProps> = ({}) => {
  return (
    <Container>
      <Heading>Inversion Count</Heading>
      <PracticeLinks workattech="inversion-count" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            The inversion count of an array denotes how far is the array from
            being sorted.
          </Paragraph>
          <Paragraph>
            If the array is sorted, inversion count is 0. If the array is sorted
            in reverse order, the inversion count is maximum.
          </Paragraph>
          <Paragraph>
            More formally, the inversion count of an array A is the number of
            pairs (i, j) such <InlineCode>{"i < j"}</InlineCode> and{" "}
            <InlineCode>{"A[i] > A[j]"}</InlineCode>.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Paragraph>
            Lets take the following array:
            <InlineCode>[8, 4, 1, 2 ]</InlineCode>
          </Paragraph>
          <Paragraph>
            This array has an inversion count of 5.
            <br />
            <InlineCode>(8, 4), (8, 1), (8, 2), (4, 1), (4, 2)</InlineCode>
          </Paragraph>
          <Paragraph>
            Given an array A, calculate the inversion count of the array.
          </Paragraph>
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            The simple solution for the above problem is to traverse the array
            and count the inversions. Check for the condition specified in the
            problem ie. <InlineCode>{"i < j"}</InlineCode> and{" "}
            <InlineCode>{"A[i] > A[j]"}</InlineCode>
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n<sup>2</sup>)",
              "Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/inversion_count/naive/inversion_count.py"
            cppFile="/dsa/arrays/inversion_count/naive/inversion_count.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            An efficient way to solve this problem is based on merge sort
            algorithm. All that needs to be added is to keep the count of
            inversions while merging two subarrays.
          </Paragraph>
          <UnorderedList
            items={[
              "Since the array is divided into two equal parts, so the number of inversion for the array will be equal to the sum of the number of inversions in the first subarray, the number of inversions in the second subarray and inversion count while merging the two sorted subarrays.",
              "Let’s say the i-th element in the first subarray is greater than the j-th element in the second subarray. Since both the subarrays are sorted all the elements after i-th element in the first subarray will also be greater than the j-th element of the second subarray. This will give the inversion count for the j-th element in the second subarray.",
              "Create a recursive function to merge all the subarrays, in the same way, to keep the count of total inversions until the base condition is met i.e. subarray size is one. In this particular case, there will be zero inversions as the subarray is sorted.",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n * log(n)))",
              "Space Complexity: O(n)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/inversion_count/optimal/inversion_count.py"
            cppFile="/dsa/arrays/inversion_count/optimal/inversion_count.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default InversionCount;
