interface SectionProps {
  children: any;
}
const Section: React.FC<SectionProps> = ({ children }) => {
  return <div className="space-y-4">{children}</div>;
};
export default Section;
