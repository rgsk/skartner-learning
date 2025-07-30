interface HeadingProps {
  children: any;
}
const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <h1 className="text-4xl">{children}</h1>;
};
export default Heading;
