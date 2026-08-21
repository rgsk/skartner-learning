"use client";
import type { OutlineNode } from "@/lib/outline";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

// breathing room between the heading and the navbar above it
const SCROLL_OFFSET = 24;

// scrollIntoView also scrolls the overflow-hidden ancestor that #main-container
// overhangs, which slides the absolutely positioned navbar out of view. scrolling
// the container directly moves only what we mean to move.
const scrollTo = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  const container = document.getElementById("main-container");
  if (!container) {
    target.scrollIntoView({ behavior: "instant", block: "start" });
    return;
  }

  container.scrollTop +=
    target.getBoundingClientRect().top -
    container.getBoundingClientRect().top -
    SCROLL_OFFSET;
};

const OutlineItem: React.FC<{ node: OutlineNode; depth: number }> = ({
  node,
  depth,
}) => {
  const [open, setOpen] = useState(true);
  const hasChildren = node.children.length > 0;

  return (
    <li>
      <div className="flex items-start">
        {hasChildren ? (
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Collapse section" : "Expand section"}
            className="shrink-0 mt-2 cursor-pointer text-muted-foreground"
          >
            <ChevronRightIcon
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                open && "rotate-90",
              )}
            />
          </button>
        ) : (
          <span className="shrink-0 w-3.5" />
        )}
        <button
          onClick={() => scrollTo(node.id)}
          title={node.text}
          className="text-left py-1.5 pl-1 leading-snug cursor-pointer text-muted-foreground hover:text-foreground"
        >
          {node.text}
        </button>
      </div>
      {hasChildren && open && (
        <OutlineList nodes={node.children} depth={depth + 1} />
      )}
    </li>
  );
};

const OutlineList: React.FC<{ nodes: OutlineNode[]; depth: number }> = ({
  nodes,
  depth,
}) => (
  <ul className={cn(depth > 0 && "ml-[7px] pl-2 border-l")}>
    {nodes.map((node) => (
      <OutlineItem key={node.id} node={node} depth={depth} />
    ))}
  </ul>
);

const NotebookOutline: React.FC<{ nodes: OutlineNode[] }> = ({ nodes }) => {
  if (nodes.length === 0) return null;

  return (
    <nav aria-label="Notebook outline" className="text-sm">
      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
        Outline
      </p>
      <OutlineList nodes={nodes} depth={0} />
    </nav>
  );
};

export default NotebookOutline;
