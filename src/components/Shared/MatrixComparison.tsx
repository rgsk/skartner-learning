type Matrix = number[][];

interface MatrixComparisonProps {
  left: Matrix;
  right: Matrix;
}

const MatrixComparison: React.FC<MatrixComparisonProps> = ({ left, right }) => {
  return (
    <div
      style={{
        fontFamily: "monospace",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
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

export default MatrixComparison;
