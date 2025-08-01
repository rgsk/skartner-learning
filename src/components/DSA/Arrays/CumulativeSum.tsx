"use client";
import CodeFetcher from "@/components/Shared/CodeFetcher";
import Heading from "@/components/Shared/Heading";
import PracticeLinks from "@/components/Shared/PracticeLinks";

interface CumulativeSumProps {}
const CumulativeSum: React.FC<CumulativeSumProps> = ({}) => {
  return (
    <div>
      <Heading>Cumulative Sum</Heading>
      <PracticeLinks workattech="cumulative-sum" />
      <CodeFetcher pythonFile="/dsa/arrays/cumulative_sum/naive/cumulative_sum.py" />
    </div>
  );
};
export default CumulativeSum;
