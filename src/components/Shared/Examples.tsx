import Example from "./Example";

interface ExamplesProps {
  items: string[];
}
const Examples: React.FC<ExamplesProps> = ({ items }) => {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <Example key={i} text={item} />
      ))}
    </div>
  );
};
export default Examples;
