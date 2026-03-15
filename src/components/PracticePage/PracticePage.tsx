"use client";

import AddTwoNumbersAsListsApproachVisualization from "@/components/DSA/LinkedLists/AddTwoNumbersAsLists/AddTwoNumbersAsListsApproachVisualization";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Heading from "@/components/Shared/Heading";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Section from "@/components/Shared/Section";
import Solution from "@/components/Shared/Solution";
import SubHeading from "@/components/Shared/SubHeading";
import Visualization from "@/components/Visualization/Visualization";
interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div className="p-[32px]">
      <FindMissingAndRepeatedValues />
    </div>
  );
};
export default PracticePage;

const FindMissingAndRepeatedValues = () => {
  return (
    <Container>
      <Heading>2965. Find Missing and Repeated Values</Heading>
      <PracticeLinks leetcode="find-missing-and-repeated-values" />
      <Solution>
        <Section>
          <SubHeading>Counting Frequencies</SubHeading>
          <CodeFetcher cppFile="/random/find-missing-and-repeated-values/counting_frequencies.cpp" />
        </Section>
        <Visualization>
          <AddTwoNumbersAsListsApproachVisualization />
        </Visualization>
      </Solution>
    </Container>
  );
};
