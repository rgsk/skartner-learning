import { wrapInlineCode } from "@/lib/utils";
import React from "react";
import SimpleLatex from "./SimpleLatex";

export interface UnorderedListProps {
  items: (string | { text: string; children?: UnorderedListProps["items"] })[];
}

function renderItem(
  item: string | { text: string; children?: UnorderedListProps["items"] },
  idx: number
): React.ReactNode {
  if (typeof item === "string") {
    if (item[0] === "$" && item[item.length - 1] === "$") {
      return (
        <li key={idx}>
          <SimpleLatex expr={item.slice(1, item.length - 1)} />
        </li>
      );
    }
    return (
      <li
        key={idx}
        dangerouslySetInnerHTML={{ __html: wrapInlineCode(item) }}
      />
    );
  } else {
    return (
      <li key={idx}>
        <span dangerouslySetInnerHTML={{ __html: wrapInlineCode(item.text) }} />
        <div className="h-2"></div>
        {item.children && item.children.length > 0 && (
          <ul className="list-disc pl-5 space-y-2">
            {item.children.map((child, childIdx) =>
              renderItem(child, childIdx)
            )}
          </ul>
        )}
      </li>
    );
  }
}

export default function UnorderedList({ items }: UnorderedListProps) {
  return <ul className="list-disc pl-5 space-y-2">{items.map(renderItem)}</ul>;
}
