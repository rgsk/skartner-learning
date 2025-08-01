interface ExampleProps {
  text: any;
}
const Example: React.FC<ExampleProps> = ({ text }) => {
  return (
    <div className="whitespace-pre-line border border-gray-300 dark:border-gray-700 rounded-sm py-2 px-4">
      {text}
    </div>
  );
};
export default Example;
