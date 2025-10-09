import { wrapInlineCode } from "@/lib/utils";

interface ParagraphProps {
  text?: string;
  children?: string;
}
const Paragraph: React.FC<ParagraphProps> = ({ text, children }) => {
  if (text) {
    return <p dangerouslySetInnerHTML={{ __html: wrapInlineCode(text) }}></p>;
  }
  return (
    <p dangerouslySetInnerHTML={{ __html: wrapInlineCode(children ?? "") }}></p>
  );
};
export default Paragraph;
