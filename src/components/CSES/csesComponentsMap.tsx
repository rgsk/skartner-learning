import IncreasingArray from "./IntroductoryProblems/IncreasingArray";
import MissingNumber from "./IntroductoryProblems/MissingNumber";
import Permutations from "./IntroductoryProblems/Permutations";
import Repetitions from "./IntroductoryProblems/Repetitions";
import WeirdAlgorithm from "./IntroductoryProblems/WeirdAlgorithm";
import Apartments from "./SortingandSearching/Apartments";
import DistinctNumbers from "./SortingandSearching/DistinctNumbers";
import FerrisWheel from "./SortingandSearching/FerrisWheel";

const csesComponentsMap: any = {
  "introductory-problems": {
    "weird-algorithm": <WeirdAlgorithm />,
    "missing-number": <MissingNumber />,
    repetitions: <Repetitions />,
    "increasing-array": <IncreasingArray />,
    permutations: <Permutations />,
  },
  "sorting-and-searching": {
    "distinct-numbers": <DistinctNumbers />,
    apartments: <Apartments />,
    "ferris-wheel": <FerrisWheel />,
  },
};
export default csesComponentsMap;
