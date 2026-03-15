"use client";
import { useState } from "react";

const FileNameGeneratorPage = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="p-8">
      <input
        className="border border-gray-400 rounded-sm px-4 py-2 w-full"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <div className="h-8"></div>
      <p>{getRustFileName(inputText)}</p>
    </div>
  );
};

export default FileNameGeneratorPage;

function getRustFileName(input: string) {
  return input
    .replace(/^(?:\d+[a-z]?|[a-z])(?:\.\s*|\s*-\s*)/i, "") // remove leading "1.", "A.", or "551A -"
    .trim() // remove extra spaces
    .toLowerCase() // lowercase
    .replace(/[\s-]+/g, "_"); // spaces and hyphens -> underscores
}
