import { wrapInlineCode } from "@/lib/utils";

interface ParagraphProps {
  text?: string;
  children?: any;
}
const Paragraph: React.FC<ParagraphProps> = ({ text, children }) => {
  if (text) {
    return <p dangerouslySetInnerHTML={{ __html: wrapInlineCode(text) }}></p>;
  }
  return <p>{children}</p>;
};
export default Paragraph;
