import { wrapInlineCode } from "@/lib/utils";
import React from "react";

export interface UnorderedListProps {
  items: any;
}

function renderItem(item: any, idx: number): React.ReactNode {
  if (typeof item === "object") {
    return <li key={idx}>{item}</li>;
  }
  if (typeof item === "string") {
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
            {item.children.map((child: any, childIdx: any) =>
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
