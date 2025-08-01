interface MinorHeadingProps {
  children: any;
}
const MinorHeading: React.FC<MinorHeadingProps> = ({ children }) => {
  return <h1 className="text-xl">{children}</h1>;
};
export default MinorHeading;
