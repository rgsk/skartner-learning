"use client";

import SimpleLatex from "../Shared/SimpleLatex";

interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div>
      <SimpleLatex expr="1 \le n \le 10^6" />
      <SimpleLatex expr="e^{i\pi} + 1 = 0" />
    </div>
  );
};
export default PracticePage;

function getRawString(s: string) {
  return s;
}
