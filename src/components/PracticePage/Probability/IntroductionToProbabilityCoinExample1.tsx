import { useSlideMaker } from "@/components/PracticePage/Probability/common";
import { cn } from "@/lib/utils";

const IntroductionToProbabilityCoinExample1 = ({
  counter,
}: {
  counter: number;
}) => {
  const { showAt, happenAt, showOnlyAt } = useSlideMaker(counter);

  return (
    <div>
      <h1 className={cn(showAt(1), "text-3xl")}>
        Introduction to Probability: Coin Example 1
      </h1>

      <p className={cn(showAt(2), "text-2xl")}>Manju Gupta</p>
      <p className={cn(showAt(3), "text-2xl")}>Virender Gupta</p>

      <div className="h-[20px]"></div>
    </div>
  );
};

export default IntroductionToProbabilityCoinExample1;
