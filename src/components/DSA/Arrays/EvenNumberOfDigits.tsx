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

interface EvenNumberOfDigitsProps {}
const EvenNumberOfDigits: React.FC<EvenNumberOfDigitsProps> = ({}) => {
  return (
    <Container>
      <Heading>Even Number of Digits</Heading>
      <PracticeLinks workattech="even-number-of-digits" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given an array of integers, find the elements which have an even
            number of digits.
          </Paragraph>
          <Paragraph>
            The order of the returned elements should be the same as the order
            of the initial array.
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Examples</MinorHeading>
          <Examples
            items={[
              `\
            Array: [42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]
            Answer: 42, 5775, 34, 45, 3556
            `,
            ]}
          />
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>String Length Based Approach</SubHeading>
          <Paragraph>
            We can convert the number to string, and the calculate it's length.
            If length is even, the number is added to result.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n * (average number of digits))",
              "Space Complexity: O(n)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/even_number_of_digits/string_based/even_number_of_digits.py"
            cppFile="/dsa/arrays/even_number_of_digits/string_based/even_number_of_digits.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default EvenNumberOfDigits;
