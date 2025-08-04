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
import InversionCount from "./Arrays/InversionCount";
import KthLargestElement from "./Arrays/KthLargestElement";
import LargestContiguousSum from "./Arrays/LargestContiguousSum";
import MatrixRotation from "./Arrays/MatrixRotation";
import MaxConsecutiveOnes from "./Arrays/MaxConsecutiveOnes";
import MergeOverlappingIntervals from "./Arrays/MergeOverlappingIntervals";
import MergeSortedSubarrays from "./Arrays/MergeSortedSubarrays";
import MergeTwoSortedArrays from "./Arrays/MergeTwoSortedArrays";
import NextGreaterPermutation from "./Arrays/NextGreaterPermutation";
import PascalsTriangle from "./Arrays/PascalsTriangle";
import PrimesUptoN from "./Arrays/PrimesUptoN";
import RowColumnZero from "./Arrays/RowColumnZero";
import SquareSortedArray from "./Arrays/SquareSortedArray";
import ContainsElement from "./Searching/ContainsElement";
import InsertPositionInSortedArray from "./Searching/InsertPositionInSortedArray";
import IsPerfectSquare from "./Searching/IsPerfectSquare";
import MatrixSearch from "./Searching/MatrixSearch";
import NegativeNumbersInSortedArray from "./Searching/NegativeNumbersInSortedArray";
import NextGreaterElementInSortedArray from "./Searching/NextGreaterElementInSortedArray";
import NonRepeatingElement from "./Searching/NonRepeatingElement";
import SearchRange from "./Searching/SearchRange";
import SearchRotatedSortedArray from "./Searching/SearchRotatedSortedArray";
import SquareRoot from "./Searching/SquareRoot";

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
    "matrix-rotation": <MatrixRotation />,
    "primes-upto-n": <PrimesUptoN />,
    "merge-overlapping-intervals": <MergeOverlappingIntervals />,
    "kth-largest-element": <KthLargestElement />,
    "next-greater-permutation": <NextGreaterPermutation />,
    "inversion-count": <InversionCount />,
  },
  searching: {
    "binary-search-concept": <BinarySearchConcept />,
    "contains-element": <ContainsElement />,
    "search-range": <SearchRange />,
    "negative-numbers-in-sorted-array": <NegativeNumbersInSortedArray />,
    "next-greater-element-in-sorted-array": <NextGreaterElementInSortedArray />,
    "insert-position-in-sorted-array": <InsertPositionInSortedArray />,
    "is-perfect-square": <IsPerfectSquare />,
    "search-rotated-sorted-array": <SearchRotatedSortedArray />,
    "non-repeating-element": <NonRepeatingElement />,
    "square-root": <SquareRoot />,
    "matrix-search": <MatrixSearch />,
  },
};
export default dsaComponentsMap;
