import { slugify } from "@/lib/utils";
import llmTopics from "./llmTopics";
import rlTopics from "./rlTopics";

export interface Problem {
  name: string;
  // the last url segment, written out rather than derived from `name`,
  // so renaming never moves the url
  slug: string;
  // the same page as absolute urls, purely so they are clickable from the editor.
  // nothing reads these - keep them in step with the slugs by hand
  devLink?: string;
  prodLink?: string;
  // github blob url of the notebook this entry renders, pasted from the browser
  notebook: string;
}

// a plain string keeps the old behaviour: the link is derived from the name
export type ProblemEntry = string | Problem;

export interface Topic {
  name: string;
  // same idea one level up - omit it and the slug falls back to the name
  slug?: string;
  problems: ProblemEntry[];
}

export const problemName = (problem: ProblemEntry) =>
  typeof problem === "string" ? problem : problem.name;

export const topicSlug = (topic: Topic) => topic.slug ?? slugify(topic.name);

export const problemSlug = (problem: ProblemEntry) =>
  typeof problem === "string" ? slugify(problem) : problem.slug;

export const problemLink = (
  category: string,
  topic: Topic,
  problem: ProblemEntry,
) => `/${category}/${topicSlug(topic)}/${problemSlug(problem)}`;

// every entry across every category, paired with the link it is published at
const allEntries = () =>
  Object.entries(topics).flatMap(([category, groups]) =>
    groups.flatMap((group) =>
      group.problems.map((problem) => ({
        link: problemLink(category, group, problem),
        problem,
      })),
    ),
  );

// the entry serving one route. a notebook listed in several places resolves
// through whichever entry owns that link.
export const getEntryForRoute = (
  category: string,
  topic: string,
  problem: string,
): ProblemEntry | undefined =>
  allEntries().find((e) => e.link === `/${category}/${topic}/${problem}`)
    ?.problem;

// notebook routes under a category, taken from the links rather than the names,
// so an entry may live under one category and publish under another
export const notebookRoutes = (category: string) =>
  allEntries()
    .filter(
      (e) =>
        typeof e.problem !== "string" &&
        e.problem.notebook &&
        e.link.startsWith(`/${category}/`),
    )
    .map((e) => {
      const [, , topic, problem] = e.link.split("/");
      return { topic, problem };
    });

// the content tree behind the sidebar and the notebook page titles
export const topics: Record<string, Topic[]> = {
  llm: llmTopics,
  rl: rlTopics,
  random: [
    {
      name: "General",
      problems: ["Find Missing and Repeated Values"],
    },
  ],
  cses: [
    {
      name: "Introductory Problems",
      problems: [
        "Weird Algorithm",
        "Missing Number",
        "Repetitions",
        "Increasing Array",
        "Permutations",
      ],
    },
    {
      name: "Sorting and Searching",
      problems: [
        "Distinct Numbers",
        "Apartments",
        "Ferris Wheel",
        "Concert Tickets",
        "Restaurant Customers",
      ],
    },
  ],
  dsa: [
    {
      name: "Arrays",
      problems: [
        // "Array Concept",
        "Cumulative Sum",
        "Positive Cumulative Sum",
        "Identical Twins",
        "Even Number of Digits",
        "Implement Insertion Sort",
        "Merge Two Sorted Arrays",
        "Merge Sorted Subarrays",
        "Implement Merge Sort",
        "Implement Quicksort",
        "Square Sorted Array",
        "Max Consecutive Ones",
        "Arithmetic Sequence",
        "Largest Contiguous Sum",
        "Pascal's Triangle",
        "Row Column Zero",
        "Matrix Rotation",
        "Primes upto N",
        "Merge Overlapping Intervals",
        "Kth Largest Element",
        "Next Greater Permutation",
        "Inversion Count",
      ],
    },
    {
      name: "Searching",
      problems: [
        // "Binary Search Concept",
        "Contains Element",
        "Search Range",
        "Negative numbers in sorted array",
        "Next Greater Element In Sorted Array",
        "Insert Position in Sorted Array",
        "Is Perfect Square",
        "Search Rotated Sorted Array",
        "Non-Repeating Element",
        "Square Root",
        "Matrix Search",
        "Median of Row-wise Sorted Matrix",
      ],
    },
    {
      name: "Two Pointers",
      problems: [
        "Remove occurences",
        "Two Sum Sorted",
        "Merge Two Sorted Arrays",
        "K-Subarray Sum",
        "Unique Elements in Sorted Array",
        "Three Sum",
        "k-diff pairs",
        "Kth element of two sorted lists",
        "Sorted Arrays Intersection",
        "Dutch National Flag",
        "Trapping Rain Water",
        "Maximum K-Subarray Sum",
        "k-Substring Vowels",
        "Maximum k-Substring Vowels",
      ],
    },
    {
      name: "Linked Lists",
      problems: [
        "Print Linked List",
        "Linked List to Array",
        "Print Reversed Linked List",
        "Kth Element in Linked List",
        "Add Element at Kth Position in Linked List",
        "Remove Element at Kth Position in Linked List",
        "Append Linked Lists",
        "Reverse a Linked List",
        "Remove occurrences in Linked List",
        "Middle Element of Linked List",
        "Merge Two Sorted Linked List",
        "Delete Node From Linked List",
        "Linked List Palindrome",
        "Intersection of Two Linked Lists",
        "Remove Duplicates from Sorted Linked List",
        "Remove Duplicates from Sorted Linked List - II",
        "Find xth Node from End of Linked List",
        "Delete Xth Node From End of Linked List",
        "Add Two Numbers as Lists",
        "Reverse a Linked List II",
        "Reverse a Linked List in k-groups",
        "Add One to Linked List",
        "Reorder List",
        "Rotate a Linked List",
        "Detect Loop in Linked List",
        "Remove Loop From Linked List",
        "Flatten a Multi-Level Linked List",
        "Partition List",
        "Insertion Sort Linked List",
        "Merge Sort Linked List",
      ],
    },
  ],
};
