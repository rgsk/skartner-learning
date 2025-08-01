"use client";
import Container from "@/components/Shared/Container";
import Examples from "@/components/Shared/Examples";
import Heading from "@/components/Shared/Heading";
import MinorHeading from "@/components/Shared/MinorHeading";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Problem from "@/components/Shared/Problem";
import Section from "@/components/Shared/Section";
import SubHeading from "@/components/Shared/SubHeading";

interface PositiveCumulativeSumProps {}
const PositiveCumulativeSum: React.FC<PositiveCumulativeSumProps> = ({}) => {
  return (
    <Container>
      <Heading>Positive Cumulative Sum</Heading>
      <PracticeLinks workattech="positive-cumulative-sum" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            The cumulative sum of an array at index i is defined as the sum of
            all elements of the array from index 0 to index i.
          </Paragraph>
          <Paragraph>
            The positive cumulative sum of an array is a list of only those
            cumulative sums which are positive.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
            Initial Array: [1, -2, 3, 4, -6]
            Cumulative Sum: [1, -1, 2, 6, 0]
            Positive Cumulative Sum: [1, 2, 6]
            `,
              `\
            Initial Array: [1, -1, -1, -1, 1]
            Cumulative Sum: [1, 0, -1, -2, -1]
            Positive Cumulative Sum: [1]
            `,
              `\
            Initial Array: [1, 3, 5, 7]
            Cumulative Sum: [1, 4, 9, 16]
            Positive Cumulative Sum: [1, 4, 9, 16]
            `,
            ]}
          />
        </Section>
      </Problem>
    </Container>
  );
};
export default PositiveCumulativeSum;
