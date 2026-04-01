"use client";

import SimpleLatex from "../Shared/SimpleLatex";

interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div className="p-[32px]">
      <div className="flex justify-center gap-[40px]">
        <div>
          <p>Scalar</p>
          <div>
            <p>M=✓</p>
            <p>D=May be</p>
            <p>but folows Scalar addition</p>
          </div>
        </div>
        <div>
          <p>Vectors</p>
          <div>
            <p>M=✓</p>
            <p>D=✓</p>
            <p>+ (Vector laws of addition)</p>
            <p>Addition is θ dependent</p>
          </div>
        </div>
        <div>
          <SimpleLatex
            expr={String.raw`\left\{
\begin{array}{c}
\overrightarrow{Force} \\
\overrightarrow{disp} \\
\overrightarrow{acc}
\end{array}
\right\}`}
          />
        </div>
      </div>
      <div>
        <p>⊛ Current (does not follow Vector Laws of addition)</p>
      </div>
    </div>
  );
};
export default PracticePage;
