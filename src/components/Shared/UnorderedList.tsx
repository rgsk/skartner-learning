export interface UnorderedListProps {
  items: string[];
}

export default function UnorderedList({ items }: UnorderedListProps) {
  return (
    <ul className={`list-disc pl-5 space-y-2`}>
      {items.map((item, idx) => (
        <li key={idx} dangerouslySetInnerHTML={{ __html: item }}></li>
      ))}
    </ul>
  );
}
