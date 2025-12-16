import { useSlideMaker } from "@/components/PracticePage/Probability/common";
import { cn } from "@/lib/utils";

const IntroductionToProbabilityVennDiagram = ({
  counter,
}: {
  counter: number;
}) => {
  const { showAt, happenAt, showOnlyAt } = useSlideMaker(counter);

  return (
    <div>
      <h1 className={cn(showAt(1), "text-3xl")}>
        Introduction to Probability: Venn Diagram
      </h1>

      <p className={cn(showAt(2), "text-2xl")}>Rahul Gupta</p>
      <p className={cn(showAt(3), "text-2xl")}>Mehak Gupta</p>

      <div className="h-[20px]"></div>
    </div>
  );
};

export default IntroductionToProbabilityVennDiagram;
