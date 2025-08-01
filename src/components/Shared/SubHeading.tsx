interface SubHeadingProps {
  children: any;
}
const SubHeading: React.FC<SubHeadingProps> = ({ children }) => {
  return <h1 className="text-2xl">{children}</h1>;
};
export default SubHeading;
