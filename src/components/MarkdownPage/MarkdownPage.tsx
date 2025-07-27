"use client";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import { MarkdownRenderer } from "../Shared/MarkdownRenderer";

interface MarkdownPageProps {
  markdown?: string;
}
const MarkdownPage: React.FC<MarkdownPageProps> = ({ markdown }) => {
  return (
    <div className="p-[32px]">
      {markdown ? (
        <MarkdownRenderer>{markdown}</MarkdownRenderer>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};
export default MarkdownPage;
