import katex from "katex";
import "katex/dist/katex.min.css";

function SimpleLatex({ expr }: { expr: string }) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: false, // true = block, false = inline
  });

  return (
    <span className="text-sm" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default SimpleLatex;
