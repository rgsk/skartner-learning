import { LoadingSpinner } from "@/components/Shared/LoadingSpinner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useLocalStorageState from "@/hooks/useLocalStorageState";
import SubHeading from "../Shared/SubHeading";
interface VisualizationProps {
  children: any;
}
const Visualization: React.FC<VisualizationProps> = ({ children }) => {
  const [visualizationExpandedOnPageLoad, _, { loading }] =
    useLocalStorageState("visualizationExpandedOnPageLoad", false);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      // defaultValue="item-1"
      defaultValue={visualizationExpandedOnPageLoad ? "item-1" : undefined}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger iconClassName="size-5 text-black dark:text-white">
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
