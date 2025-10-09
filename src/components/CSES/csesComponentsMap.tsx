import IncreasingArray from "./IntroductoryProblems/IncreasingArray";
import MissingNumber from "./IntroductoryProblems/MissingNumber";
import Repetitions from "./IntroductoryProblems/Repetitions";
import WeirdAlgorithm from "./IntroductoryProblems/WeirdAlgorithm";

const csesComponentsMap: any = {
  "introductory-problems": {
    "weird-algorithm": <WeirdAlgorithm />,
    "missing-number": <MissingNumber />,
    repetitions: <Repetitions />,
    "increasing-array": <IncreasingArray />,
  },
};
export default csesComponentsMap;
