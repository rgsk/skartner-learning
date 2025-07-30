"use client";
import PracticeLinks from "@/components/Shared/PracticeLinks";
import { useEffect, useState } from "react";
import CodeTabs from "../Shared/CodeTabs";

interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  const [pythonCode, setPythonCode] = useState("");
  useEffect(() => {
    fetch("/merge-sort.py")
      .then((res) => res.text())
      .then((v) => {
        console.log({ v });
        setPythonCode(v);
      });
  }, []);
  return (
    <div>
      <p>
        Practice on: <PracticeLinks leetcode="binary-search" />
      </p>
      {pythonCode && (
        <CodeTabs
          python={{
            code: pythonCode,
            output: "[1, 2, 3]",
          }}
        />
      )}
    </div>
  );
};
export default PracticePage;
