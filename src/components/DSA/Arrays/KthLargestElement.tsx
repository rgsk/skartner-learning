"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Container from "@/components/Shared/Container";
import Heading from "@/components/Shared/Heading";
import InlineCode from "@/components/Shared/InlineCode";
import Paragraph from "@/components/Shared/Paragraph";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import Problem from "@/components/Shared/Problem";
import Section from "@/components/Shared/Section";
import Solution from "@/components/Shared/Solution";
import SubHeading from "@/components/Shared/SubHeading";
import UnorderedList from "@/components/Shared/UnorderedList";

interface KthLargestElementProps {}
const KthLargestElement: React.FC<KthLargestElementProps> = ({}) => {
  return (
    <Container>
      <Heading>Kth Largest Element</Heading>
      <PracticeLinks workattech="kth-largest-element" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a list of numbers below:{" "}
            <InlineCode>4, 3, 6, 4, 1</InlineCode>
          </Paragraph>
          <Paragraph>What is the largest element in the list? → 6</Paragraph>
          <Paragraph>
            What is the 3rd largest element in the list? → 4
          </Paragraph>
          <Paragraph>
            Given a list of numbers, find the kth largest element in the list.
          </Paragraph>
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Naive Approach</SubHeading>
          <Paragraph>
            A simple solution is to sort the array and get the Kth largest
            element.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n * log(n))",
              "Auxiliary Space Complexity: O(1)",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/kth_largest_element/naive/kth_largest_element.py"
            cppFile="/dsa/arrays/kth_largest_element/naive/kth_largest_element.cpp"
          />
        </Section>
      </Solution>
      <Solution>
        <Section>
          <SubHeading>Quick Select (Optimal)</SubHeading>
          <Paragraph>
            We can solve this problem efficiently with Quick Select Algorithm
            which is quite similar to the Quicksort Algorithm.
          </Paragraph>
          <Paragraph>
            We simplify the problem of finding kth largest element to finding
            kth smallest element, and then finding kth smallest element to
            finding element at particular index in the sorted array.
          </Paragraph>
          <Paragraph>
            So, we need to find element at particular index, in quick sort
            algorithm, we can take shortcuts. After getting pivot_index, if
            target_index is larger than pivot_index, we search in right half.
            And if target_index is smaller than pivot_index, we search in left
            half.
          </Paragraph>
        </Section>
        <Section>
          <SubHeading>Analysis</SubHeading>
          <UnorderedList
            items={[
              "Time Complexity: O(n)",
              "Auxiliary Space Complexity: O(log(n))",
            ]}
          />
        </Section>
        <Section>
          <SubHeading>Implementation</SubHeading>
          <CodeFetcher
            pythonFile="/dsa/arrays/kth_largest_element/optimal/kth_largest_element.py"
            cppFile="/dsa/arrays/kth_largest_element/optimal/kth_largest_element.cpp"
          />
        </Section>
      </Solution>
    </Container>
  );
};
export default KthLargestElement;
