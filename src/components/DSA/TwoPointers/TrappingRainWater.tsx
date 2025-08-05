"use client";
import AspectContainer from "@/components/Shared/AspectContainer";
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
import Image from "next/image";

interface TrappingRainWaterProps {}
const TrappingRainWater: React.FC<TrappingRainWaterProps> = ({}) => {
  return (
    <Container>
      <Heading>Trapping Rain Water</Heading>
      <PracticeLinks workattech="trapped-rain-water" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given an array A where each element denotes a the height of blocks,
            calculate the total volume of water that can be trapped when it
            rains.
          </Paragraph>
          <Paragraph>Note: one cubic block has a volume of 1 unit.</Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example</MinorHeading>
          <Examples
            items={[
              `\
A: [ 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]

The total volume of water is 1 + 3 + 1 + 1 = 6 units.
            `,
            ]}
          />
        </Section>

        <div className="w-[700px] max-w-full">
          <AspectContainer aspectRatio={555 / 210}>
            <Image
              src="/trapping-rain-water.png"
              alt="trapping rain water"
              fill={true}
            />
          </AspectContainer>
        </div>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            The simple solution is to traverse the array and for each array
            element find the maximum height on the left and right side of the
            element in the array. Take the difference of the current element
            from the minimum of those two heights and add it to the answer.
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
            pythonFile="/dsa/two_pointers/trapping_rain_water/naive/trapping_rain_water.py"
            cppFile="/dsa/two_pointers/trapping_rain_water/naive/trapping_rain_water.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default TrappingRainWater;
