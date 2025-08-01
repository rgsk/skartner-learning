import ArrayConcept from "@/components/DSA/Arrays/ArrayConcept";
import CumulativeSum from "@/components/DSA/Arrays/CumulativeSum";
import MergeSort from "@/components/DSA/Arrays/MergeSort";
import PositiveCumulativeSum from "@/components/DSA/Arrays/PositiveCumulativeSum";
import QuickSort from "@/components/DSA/Arrays/QuickSort";
import BinarySearchConcept from "@/components/DSA/Searching/BinarySearchConcept";
import EvenNumberOfDigits from "./Arrays/EvenNumberOfDigits";
import IdenticalTwins from "./Arrays/IdenticalTwins";
import ImplementInsertionSort from "./Arrays/ImplementInsertionSort";

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
  },
  searching: {
    "binary-search-concept": <BinarySearchConcept />,
  },
};
export default dsaComponentsMap;
