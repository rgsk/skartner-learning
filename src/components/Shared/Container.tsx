interface ContainerProps {
  children: any;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="space-y-5">{children}</div>;
};
export default Container;
