"use client";

interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div>
      <App />
    </div>
  );
};
export default PracticePage;

import React from "react";

type Matrix = number[][];

interface MatrixComparisonProps {
  left: Matrix;
  right: Matrix;
}

const MatrixComparison: React.FC<MatrixComparisonProps> = ({ left, right }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      {/* Left Matrix */}
      <div>
        {left.map((row, i) => (
          <div key={i} style={{ display: "flex", gap: "10px" }}>
            {row.map((cell, j) => (
              <span key={j}>{cell}</span>
            ))}
          </div>
        ))}
      </div>

      {/* Arrow */}
      <div style={{ fontSize: "24px" }}>→</div>

      {/* Right Matrix */}
      <div>
        {right.map((row, i) => (
          <div key={i} style={{ display: "flex", gap: "10px" }}>
            {row.map((cell, j) => (
              <span key={j}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage
function App() {
  const leftMatrix: Matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const rightMatrix: Matrix = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ];

  return (
    <div style={{ fontFamily: "monospace", fontSize: "18px" }}>
      <MatrixComparison left={leftMatrix} right={rightMatrix} />
    </div>
  );
}
