interface SolutionProps {
  children: any;
}
const Solution: React.FC<SolutionProps> = ({ children }) => {
  return <div className="space-y-5">{children}</div>;
};
export default Solution;
