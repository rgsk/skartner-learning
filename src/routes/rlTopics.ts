import type { Topic } from "../lib/topics";

const rlTopics: Topic[] = [
  {
    name: "Tabular",
    slug: "tabular",
    problems: [
      {
        name: "Value and Policy Iteration",
        slug: "value-and-policy-iteration",
        devLink: "http://localhost:3005/rl/tabular/value-and-policy-iteration",
        prodLink:
          "https://www.skartner.com/rl/tabular/value-and-policy-iteration",
        notebook:
          "https://github.com/rgsk/ml-tracks/blob/practice/nb/rl/final/value_and_policy_iteration.ipynb",
      },
    ],
  },
];
export default rlTopics;
