"use client";
import { MarkdownRenderer } from "@/components/Shared/MarkdownRenderer";

// MarkdownRenderer pulls in client-only deps, so notebook cells reach it through here
const NotebookMarkdown: React.FC<{ source: string }> = ({ source }) => {
  return <MarkdownRenderer>{source}</MarkdownRenderer>;
};

export default NotebookMarkdown;
