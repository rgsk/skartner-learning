import { Category } from "../lib/topics";
import llmTopics from "./llmTopics";
import rlTopics from "./rlTopics";

const categories: Category[] = [
  { slug: "llm", topics: llmTopics },
  { slug: "rl", topics: rlTopics },
];
export default categories;
