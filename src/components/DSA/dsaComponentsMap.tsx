import ArrayConcept from "@/components/DSA/Arrays/ArrayConcept";
import CumulativeSum from "@/components/DSA/Arrays/CumulativeSum";
import MergeSort from "@/components/DSA/Arrays/MergeSort";
import PositiveCumulativeSum from "@/components/DSA/Arrays/PositiveCumulativeSum";
import QuickSort from "@/components/DSA/Arrays/QuickSort";
import BinarySearchConcept from "@/components/DSA/Searching/BinarySearchConcept";
import ArithmeticSequence from "./Arrays/ArithmeticSequence";
import EvenNumberOfDigits from "./Arrays/EvenNumberOfDigits";
import IdenticalTwins from "./Arrays/IdenticalTwins";
import ImplementInsertionSort from "./Arrays/ImplementInsertionSort";
import LargestContiguousSum from "./Arrays/LargestContiguousSum";
import MaxConsecutiveOnes from "./Arrays/MaxConsecutiveOnes";
import MergeSortedSubarrays from "./Arrays/MergeSortedSubarrays";
import MergeTwoSortedArrays from "./Arrays/MergeTwoSortedArrays";
import PascalsTriangle from "./Arrays/PascalsTriangle";
import RowColumnZero from "./Arrays/RowColumnZero";
import SquareSortedArray from "./Arrays/SquareSortedArray";

const dsaComponentsMap: any = {
  arrays: {
    "array-concept": <ArrayConcept />,
    "implement-merge-sort": <MergeSort />,
    "implement-quicksort": <QuickSort />,
    "cumulative-sum": <CumulativeSum />,
    "positive-cumulative-sum": <PositiveCumulativeSum />,
    "identical-twins": <IdenticalTwins />,
    "even-number-of-digits": <EvenNumberOfDigits />,
    "implement-insertion-sort": <ImplementInsertionSort />,
    "merge-two-sorted-arrays": <MergeTwoSortedArrays />,
    "merge-sorted-subarrays": <MergeSortedSubarrays />,
    "square-sorted-array": <SquareSortedArray />,
    "max-consecutive-ones": <MaxConsecutiveOnes />,
    "arithmetic-sequence": <ArithmeticSequence />,
    "largest-contiguous-sum": <LargestContiguousSum />,
    "pascals-triangle": <PascalsTriangle />,
    "row-column-zero": <RowColumnZero />,
  },
  searching: {
    "binary-search-concept": <BinarySearchConcept />,
  },
};
export default dsaComponentsMap;
