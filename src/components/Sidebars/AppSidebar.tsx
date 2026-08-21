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
import { topics } from "@/lib/topics";
import { slugify } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function AppSidebar() {
  const pathname = usePathname();

  const category = pathname.split("/")[1];

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
    <Sidebar side="left">
      <SidebarContent>
        <SidebarGroup>
          {category === "dsa" ? (
            <Link href="/dsa">
              <SidebarGroupLabel>
                Data Structures and Algorithms
              </SidebarGroupLabel>
            </Link>
          ) : category === "cses" ? (
            <Link href="/cses">
              <SidebarGroupLabel>CSES Problem Set</SidebarGroupLabel>
            </Link>
          ) : category === "llm" ? (
            <Link href="/llm">
              <SidebarGroupLabel>LLM</SidebarGroupLabel>
            </Link>
          ) : category === "rl" ? (
            <Link href="/rl">
              <SidebarGroupLabel>Reinforcement Learning</SidebarGroupLabel>
            </Link>
          ) : null}

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
              {(topics[category] ?? []).map((topic, i) => {
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
                              topic.name,
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
