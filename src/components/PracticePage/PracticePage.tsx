"use client";

import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Heading from "@/components/Shared/Heading";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Section from "@/components/Shared/Section";
import Solution from "@/components/Shared/Solution";
import SubHeading from "@/components/Shared/SubHeading";
interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div className="p-[32px]">
      <FindMissingAndRepeatedValues />
    </div>
  );
};
export default PracticePage;

export const FindMissingAndRepeatedValues = () => {
  return (
    <Container>
      <Heading>2965. Find Missing and Repeated Values</Heading>
      <PracticeLinks leetcode="find-missing-and-repeated-values" />
      <Solution>
        <Section>
          <SubHeading>Counting Frequencies</SubHeading>
          <CodeFetcher cppFile="/random/find-missing-and-repeated-values/counting_frequencies.cpp" />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Sum to N^2</SubHeading>
          <CodeFetcher cppFile="/random/find-missing-and-repeated-values/sum_to_n_square.cpp" />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Xor Bucket</SubHeading>
          <CodeFetcher cppFile="/random/find-missing-and-repeated-values/xor_bucket.cpp" />
        </Section>
      </Solution>
    </Container>
  );
};
