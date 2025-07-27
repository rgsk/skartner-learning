"use client";
import {
  Calendar,
  ChevronRightIcon,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [openState, setOpenState] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const stored = localStorage.getItem("dsa-collapse-state");
    if (stored) {
      setOpenState(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dsa-collapse-state", JSON.stringify(openState));
  }, [openState]);
  const toggle = (topicName: string) => {
    setOpenState((prev) => ({
      ...prev,
      [topicName]: !prev[topicName],
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
              {topics.map((topic, i) => {
                const isOpen = openState[topic.name] ?? false; // default close
                return (
                  <Collapsible
                    key={i}
                    open={isOpen}
                    onOpenChange={() => toggle(topic.name)}
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
                            const link = `/dsa/${slugify(topic.name)}/${slugify(
                              problem.name
                            )}`;
                            return (
                              <SidebarMenuSubItem key={i}>
                                <SidebarMenuButton
                                  asChild
                                  isActive={pathname === link}
                                >
                                  <Link href={link}>
                                    <span>{problem.name}</span>
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

const topics = [
  {
    name: "Arrays",
    problems: [
      {
        name: "Concept",
      },
      {
        name: "Cumulative Sum",
      },
      {
        name: "Positive Cumulative Sum",
      },
      {
        name: "Identical Twins",
      },
      {
        name: "Even Number of Digits",
      },
      {
        name: "Implement Merge Sort",
      },
      {
        name: "Implement Quicksort",
      },
    ],
  },
  {
    name: "Searching",
    problems: [
      { name: "Concept" },
      {
        name: "Contains Element",
      },
      {
        name: "Search Range",
      },
    ],
  },
];
