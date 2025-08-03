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
import YoutubeVideo from "@/components/Shared/YoutubeVideo";

interface MergeOverlappingIntervalsProps {}
const MergeOverlappingIntervals: React.FC<
  MergeOverlappingIntervalsProps
> = ({}) => {
  return (
    <Container>
      <Heading>Merge Overlapping Intervals</Heading>
      <PracticeLinks workattech="merge-overlap-intervals" />
      <Problem>
        <Section>
          <SubHeading>Problem Statement</SubHeading>
          <Paragraph>
            Given a list of intervals, merge them to get a list of
            non-overlapping intervals.
          </Paragraph>
          <Paragraph>
            <InlineCode>
              interval<sub>i</sub> = [start<sub>i</sub>, end<sub>i</sub>]
            </InlineCode>
          </Paragraph>
        </Section>
        <Section>
          <MinorHeading>Example:</MinorHeading>
          <Paragraph>
            Intervals: <InlineCode>[[1, 2], [2, 3], [1, 4], [5, 6]]</InlineCode>
          </Paragraph>
          <Paragraph>
            [1, 2] and [2, 3] can be merged to form [1, 3].
            <br /> Now, [1, 3] and [1, 4] can be merged to form [1, 4].
            <br /> [1, 4] and [5, 6] have no intersection. <br /> Hence above
            intervals are merged to form:{" "}
            <InlineCode>[[1, 4], [5, 6]]</InlineCode>.
          </Paragraph>
          <Paragraph>
            Note that the final list should be in ascending order.
          </Paragraph>
        </Section>
      </Problem>
      <Solution>
        <Section>
          <SubHeading>Optimal Approach</SubHeading>
          <Paragraph>
            Sorting the array first according to the starting point will help in
            solving the problem linearly.
          </Paragraph>
          <Paragraph>
            The basic idea is that if an interval is not overlapping with its
            next interval, then it won’t overlap with any of the intervals after
            that as the array is sorted. So merging the intervals will be
            possible while traversing the array.
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
            pythonFile="/dsa/arrays/merge_overlapping_intervals/optimal/merge_overlapping_intervals.py"
            cppFile="/dsa/arrays/merge_overlapping_intervals/optimal/merge_overlapping_intervals.cpp"
          />
        </Section>
      </Solution>
      <Section>
        <SubHeading>Video Explaination</SubHeading>
        <YoutubeVideo id="Sg8CexYF2wI" />
      </Section>
    </Container>
  );
};
export default MergeOverlappingIntervals;
