import type { Topic } from "../lib/topics";

const llmTopics: Topic[] = [
  {
    name: "Fundamentals",
    slug: "fundamentals",
    problems: [
      {
        name: "Attention",
        slug: "attention",
        previousSlugs: ["self-attention"], // added for example
        devLink: "http://localhost:3005/llm/fundamentals/attention",
        prodLink: "https://www.skartner.com/llm/fundamentals/attention",
        notebook:
          "https://github.com/rgsk/llm/blob/main/src/walkthroughs/attention.ipynb",
      },
      {
        name: "Test",
        slug: "test",
        devLink: "http://localhost:3005/llm/fundamentals/test",
        prodLink: "https://www.skartner.com/llm/fundamentals/test",
        notebook:
          "https://github.com/rgsk/ml-tracks/blob/practice/nb/rl/final/test.ipynb",
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
