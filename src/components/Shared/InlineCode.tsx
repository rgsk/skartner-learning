import React from "react";

interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

const InlineCode: React.FC<InlineCodeProps> = ({
  children,
  className = "",
}) => {
  return (
    <code
      className={`px-1 py-0.5 rounded bg-gray-100 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-100 font-mono ${className}`.trim()}
    >
      {children}
    </code>
  );
};

export default InlineCode;
