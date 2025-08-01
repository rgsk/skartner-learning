import React from "react";

export interface UnorderedListProps {
  items: (string | { text: string; children?: UnorderedListProps["items"] })[];
}

function renderItem(
  item: string | { text: string; children?: UnorderedListProps["items"] },
  idx: number
): React.ReactNode {
  if (typeof item === "string") {
    return <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />;
  } else {
    return (
      <li key={idx}>
        <span dangerouslySetInnerHTML={{ __html: item.text }} />
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
