import { Input } from "@/components/ui/input";
import { useState } from "react";

const LeetCodeTitle = () => {
  const [input, setInput] = useState("");
  return (
    <div className="p-4 w-[400px]">
      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div className="h-[20px]"></div>
      <p>{formatLeetCodeTitle(input)}</p>
    </div>
  );
};

export default LeetCodeTitle;

function formatLeetCodeTitle(title: string): string {
  // Remove the dot after the number
  const noDot = title.replace(".", "");

  // Split into parts
  const parts = noDot.split(" ");

  // First part is the problem number
  const number = parts[0];

  // Capitalize remaining words and join
  const words = parts
    .slice(1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return `${number}_${words}`;
}
