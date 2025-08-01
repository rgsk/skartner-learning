interface ProblemProps {
  children: any;
}
const Problem: React.FC<ProblemProps> = ({ children }) => {
  return <div className="space-y-5">{children}</div>;
};
export default Problem;
