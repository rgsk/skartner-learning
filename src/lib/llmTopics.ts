import type { Topic } from "./topics";

const llmTopics: Topic[] = [
  {
    name: "Fundamentals",
    slug: "fundamentals",
    problems: [
      {
        name: "Attention",
        slug: "attention",
        devLink: "http://localhost:3005/llm/fundamentals/attention",
        prodLink: "https://www.skartner.com/llm/fundamentals/attention",
        notebook:
          "https://github.com/rgsk/llm/blob/main/src/walkthroughs/attention.ipynb",
      },
      {
        name: "SwiGLU",
        slug: "swiglu",
        devLink: "http://localhost:3005/llm/fundamentals/swiglu",
        prodLink: "https://www.skartner.com/llm/fundamentals/swiglu",
        notebook:
          "https://github.com/rgsk/ml-tracks/blob/practice/nb/rl/final/11_swiglu.ipynb",
      },
    ],
  },
];
export default llmTopics;
