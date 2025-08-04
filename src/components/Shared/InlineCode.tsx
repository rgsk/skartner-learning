import React from "react";

interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

const InlineCode: React.FC<InlineCodeProps> = ({
  children,
  className = "",
}) => {
  return <code className={`inline-code ${className}`.trim()}>{children}</code>;
};

export default InlineCode;
