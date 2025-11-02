import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SubHeading from "../Shared/SubHeading";
interface VisualizationProps {
  children: any;
}
const Visualization: React.FC<VisualizationProps> = ({ children }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger iconClassName="size-5 text-white">
          <SubHeading>Visualization</SubHeading>
        </AccordionTrigger>
        <AccordionContent className="border border-accent p-6 rounded-sm">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default Visualization;
