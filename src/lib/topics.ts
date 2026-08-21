import { slugify } from "@/lib/slugify";
import llmTopics from "./llmTopics";
import rlTopics from "./rlTopics";

export interface Problem {
  name: string;
  // the last url segment, written out rather than derived from `name`,
  // so renaming never moves the url
  slug: string;
  // slugs this entry used to publish under. urls already out in the world resolve
  // through them and redirect here, so changing `slug` never strands a link
  previousSlugs?: string[];
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
  previousSlugs?: string[];
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

// a notebook category owns a url prefix. it lives here rather than in a route
// folder, so renaming one is a data change like any other rename
export interface Category {
  slug: string;
  previousSlugs?: string[];
  topics: Topic[];
}

export const notebookCategories: Category[] = [
  { slug: "llm", topics: llmTopics },
  { slug: "rl", topics: rlTopics },
];

// current slug first, retired ones after - the order the matcher relies on
const categorySlugs = (category: Category) => [
  category.slug,
  ...(category.previousSlugs ?? []),
];

const topicSlugs = (topic: Topic) => [
  topicSlug(topic),
  ...(topic.previousSlugs ?? []),
];

const problemSlugs = (problem: ProblemEntry) =>
  typeof problem === "string"
    ? [slugify(problem)]
    : [problem.slug, ...(problem.previousSlugs ?? [])];

export interface ResolvedRoute {
  entry: ProblemEntry;
  // where this entry publishes today. it differs from the requested url only
  // when the request arrived on a retired slug
  canonicalLink: string;
}

const matches = (slugs: string[], value: string, currentOnly: boolean) =>
  currentOnly ? slugs[0] === value : slugs.includes(value);

const findRoute = (
  category: string,
  topic: string,
  problem: string,
  currentOnly: boolean,
): ResolvedRoute | undefined => {
  for (const c of notebookCategories) {
    if (!matches(categorySlugs(c), category, currentOnly)) continue;
    for (const t of c.topics) {
      if (!matches(topicSlugs(t), topic, currentOnly)) continue;
      for (const p of t.problems) {
        if (!matches(problemSlugs(p), problem, currentOnly)) continue;
        return { entry: p, canonicalLink: problemLink(c.slug, t, p) };
      }
    }
  }
};

// two passes, so a live page always beats a retired slug that happens to match
// it. only the second pass considers history.
export const resolveNotebookRoute = (
  category: string,
  topic: string,
  problem: string,
): ResolvedRoute | undefined =>
  findRoute(category, topic, problem, true) ??
  findRoute(category, topic, problem, false);

export const resolveCategory = (category: string): Category | undefined =>
  notebookCategories.find((c) => c.slug === category) ??
  notebookCategories.find((c) => categorySlugs(c).includes(category));

// the entry serving one route, retired slugs included
export const getEntryForRoute = (
  category: string,
  topic: string,
  problem: string,
): ProblemEntry | undefined =>
  resolveNotebookRoute(category, topic, problem)?.entry;

// every notebook url worth prerendering. retired slugs are left out on purpose:
// they render on demand and redirect, rather than being published as pages
export const notebookRoutes = () =>
  notebookCategories.flatMap((c) =>
    c.topics.flatMap((t) =>
      t.problems
        .filter((p) => typeof p !== "string" && Boolean(p.notebook))
        .map((p) => ({
          category: c.slug,
          topic: topicSlug(t),
          problem: problemSlug(p),
        })),
    ),
  );

// the content tree behind the sidebar and the notebook page titles
export const topics: Record<string, Topic[]> = {
  ...Object.fromEntries(notebookCategories.map((c) => [c.slug, c.topics])),
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
