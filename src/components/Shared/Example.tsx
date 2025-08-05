interface ExampleProps {
  text: any;
}
const Example: React.FC<ExampleProps> = ({ text }) => {
  return (
    <div
      className="font-mono text-sm whitespace-pre-line border border-gray-300 dark:border-gray-700 rounded-sm py-2 px-4"
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
  );
};
export default Example;
