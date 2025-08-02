/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "@/components/Shared/Container";
import Heading from "@/components/Shared/Heading";
import MinorHeading from "@/components/Shared/MinorHeading";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Problem from "@/components/Shared/Problem";
import Section from "@/components/Shared/Section";
import SubHeading from "@/components/Shared/SubHeading";
import UnorderedList from "@/components/Shared/UnorderedList";

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
    </Container>
  );
};
export default PascalsTriangle;
