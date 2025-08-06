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
import KthElementInLinkedList from "./LinkedLists/KthElementInLinkedList";
import LinkedListToArray from "./LinkedLists/LinkedListToArray";
import PrintLinkedList from "./LinkedLists/PrintLinkedList";
import PrintReversedLinkedList from "./LinkedLists/PrintReversedLinkedList";
import ContainsElement from "./Searching/ContainsElement";
import InsertPositionInSortedArray from "./Searching/InsertPositionInSortedArray";
import IsPerfectSquare from "./Searching/IsPerfectSquare";
import MatrixSearch from "./Searching/MatrixSearch";
import MedianOfRowWiseSortedMatrix from "./Searching/MedianOfRowWiseSortedMatrix";
import NegativeNumbersInSortedArray from "./Searching/NegativeNumbersInSortedArray";
import NextGreaterElementInSortedArray from "./Searching/NextGreaterElementInSortedArray";
import NonRepeatingElement from "./Searching/NonRepeatingElement";
import SearchRange from "./Searching/SearchRange";
import SearchRotatedSortedArray from "./Searching/SearchRotatedSortedArray";
import SquareRoot from "./Searching/SquareRoot";
import DutchNationalFlag from "./TwoPointers/DutchNationalFlag";
import KDiffPairs from "./TwoPointers/KDiffPairs";
import KSubarraySum from "./TwoPointers/KSubarraySum";
import KSubstringVowels from "./TwoPointers/KSubstringVowels";
import KthElementOfTwoSortedLists from "./TwoPointers/KthElementOfTwoSortedLists";
import MaximumKSubarraySum from "./TwoPointers/MaximumKSubarraySum";
import MaximumKSubstringVowels from "./TwoPointers/MaximumKSubstringVowels";
import RemoveOccurences from "./TwoPointers/RemoveOccurences";
import SortedArraysIntersection from "./TwoPointers/SortedArraysIntersection";
import ThreeSum from "./TwoPointers/ThreeSum";
import TrappingRainWater from "./TwoPointers/TrappingRainWater";
import TwoSumSorted from "./TwoPointers/TwoSumSorted";
import UniqueElementsInSortedArray from "./TwoPointers/UniqueElementsInSortedArray";

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
    "median-of-row-wise-sorted-matrix": <MedianOfRowWiseSortedMatrix />,
  },
  "two-pointers": {
    "remove-occurences": <RemoveOccurences />,
    "two-sum-sorted": <TwoSumSorted />,
    "merge-two-sorted-arrays": <MergeTwoSortedArrays />,
    "k-subarray-sum": <KSubarraySum />,
    "unique-elements-in-sorted-array": <UniqueElementsInSortedArray />,
    "three-sum": <ThreeSum />,
    "k-diff-pairs": <KDiffPairs />,
    "kth-element-of-two-sorted-lists": <KthElementOfTwoSortedLists />,
    "sorted-arrays-intersection": <SortedArraysIntersection />,
    "dutch-national-flag": <DutchNationalFlag />,
    "trapping-rain-water": <TrappingRainWater />,
    "maximum-k-subarray-sum": <MaximumKSubarraySum />,
    "k-substring-vowels": <KSubstringVowels />,
    "maximum-k-substring-vowels": <MaximumKSubstringVowels />,
  },
  "linked-lists": {
    "print-linked-list": <PrintLinkedList />,
    "linked-list-to-array": <LinkedListToArray />,
    "print-reversed-linked-list": <PrintReversedLinkedList />,
    "kth-element-in-linked-list": <KthElementInLinkedList />,
  },
};
export default dsaComponentsMap;
