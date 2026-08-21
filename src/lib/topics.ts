import { slugify } from "@/lib/utils";

export interface Topic {
  name: string;
  problems: string[];
}

// the display title for a route, so it is written once here rather than
// repeated in the notebook registry
export const getContentTitle = (
  category: string,
  topic: string,
  problem: string,
) =>
  topics[category]
    ?.find((t) => slugify(t.name) === topic)
    ?.problems.find((p) => slugify(p) === problem);

// the content tree behind the sidebar and the notebook page titles
export const topics: Record<string, Topic[]> = {
  llm: [
    {
      name: "Fundamentals",
      problems: ["Attention"],
    },
  ],
  rl: [
    {
      name: "Tabular",
      problems: ["Value and Policy Iteration"],
    },
  ],
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
