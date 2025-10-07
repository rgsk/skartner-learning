"use client";
import { ChevronRightIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { slugify } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function AppSidebar() {
  const pathname = usePathname();

  const category = pathname.split("/")[1] as keyof typeof topics;

  const [openState, setOpenState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const stored = localStorage.getItem("dsa-collapse-state");
    const parsed = stored ? JSON.parse(stored) : {};
    const topicActive = pathname.split("/")[2];

    if (topicActive && !parsed[topicActive]) {
      parsed[topicActive] = true;
    }

    setOpenState(parsed);
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem("dsa-collapse-state", JSON.stringify(openState));
  }, [openState]);
  const toggle = (topic: string) => {
    setOpenState((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <Link href="/dsa">
            <SidebarGroupLabel>
              Data Structures and Algorithms
            </SidebarGroupLabel>
          </Link>
          <SidebarGroupContent>
            {/* <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu> */}
            <SidebarMenu>
              {topics[category].map((topic, i) => {
                const isOpen = openState[slugify(topic.name)] ?? false; // default close
                return (
                  <Collapsible
                    key={i}
                    open={isOpen}
                    onOpenChange={() => toggle(slugify(topic.name))}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="flex items-center justify-between gap-2 w-full">
                          <span>{topic.name}</span>
                          {/* Show right arrow when closed, down arrow when open */}
                          <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {topic.problems.map((problem, i) => {
                            const link = `/${category}/${slugify(
                              topic.name
                            )}/${slugify(problem)}`;
                            return (
                              <SidebarMenuSubItem key={i}>
                                <SidebarMenuButton
                                  asChild
                                  isActive={pathname === link}
                                >
                                  <Link href={link}>
                                    <span>{problem}</span>
                                  </Link>
                                </SidebarMenuButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const topics = {
  cses: [
    {
      name: "Introductory Problems",
      problems: ["Weird Algorithm", "Missing Number"],
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
