"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Heading from "@/components/Shared/Heading";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Section from "@/components/Shared/Section";
import SubHeading from "@/components/Shared/SubHeading";
import UnorderedList from "@/components/Shared/UnorderedList";

interface CumulativeSumProps {}
const CumulativeSum: React.FC<CumulativeSumProps> = ({}) => {
  return (
    <Container>
      <Heading>Cumulative Sum</Heading>
      <PracticeLinks workattech="cumulative-sum" />
      <Section>
        <SubHeading>Naive Approach</SubHeading>
        <Paragraph>
          Here, we can just iterate over the array and calculate the sum of all
          elements from the beginning till that index. The calculated sum for
          each index denotes the cumulative sum for that index.
        </Paragraph>
        <Paragraph>
          We are calculating the prefix sum for the same set of indices multiple
          times. Is there a way to use the result of the previous prefix sum in
          the sum of the next prefix sum?
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
          pythonFile="/dsa/arrays/cumulative_sum/naive/cumulative_sum.py"
          cppFile="/dsa/arrays/cumulative_sum/naive/cumulative_sum.cpp"
        />
      </Section>
    </Container>
  );
};
export default CumulativeSum;
