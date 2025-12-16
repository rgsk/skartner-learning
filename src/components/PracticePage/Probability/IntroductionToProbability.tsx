import {
  Cross,
  Football,
  useSlideMaker,
} from "@/components/PracticePage/Probability/common";
import { cn, range } from "@/lib/utils";

const IntroductionToProbability = ({ counter }: { counter: number }) => {
  const { showAt, happenAt, showOnlyAt } = useSlideMaker(counter);

  return (
    <div>
      <h1 className={cn(showAt(1), "text-3xl")}>Introduction to Probability</h1>
      <div className="h-[20px]"></div>
      <div className={cn(showAt(2), "flex gap-1 items-center")}>
        {range(0, 3).map((v) => (
          <Football key={v} size={60} />
        ))}
        {range(0, 7).map((v) => (
          <Cross key={v} size={55} />
        ))}
      </div>
      <div className="h-[20px]"></div>
      <div className={cn(showAt(3))}>
        <p className="text-2xl">
          Find the probability that a child picked at random plays soccer.
        </p>
      </div>
      <div>
        <div className="h-[40px]"></div>
        <p className={cn(showAt(4), "text-2xl")}>
          The probability that a child picked at random plays soccer.
        </p>
        {showOnlyAt(5) && (
          <div className="pt-[80px] pl-[300px]">
            <p className="text-3xl">P(soccer)</p>
          </div>
        )}
        <div className="h-[60px]"></div>
        <div className="text-2xl flex gap-4 items-center">
          <span className={cn(showAt(6))}>P(soccer)</span>
          <span className={cn(showAt(7))}>=</span>
          <div className={cn(showAt(7), "flex flex-col items-center")}>
            <span>soccer</span>
            <span className="border border-foreground w-full"></span>
            <span className="-translate-y-0.5">total</span>
          </div>
          <span className={cn(showAt(8))}>=</span>
          <div className="flex flex-col gap-2 items-center">
            <div className={cn(showAt(9), "relative")}>
              <div
                className={cn(
                  showAt(13),
                  "absolute left-full top-[-40px] text-[#007885] font-medium"
                )}
              >
                Event
              </div>
              <div
                className={cn(
                  "flex gap-0.5 p-1 border-2 rounded-lg border-transparent",
                  happenAt(13) && "border-[#007885]"
                )}
              >
                {range(0, 3).map((v) => (
                  <Football key={v} size={40} />
                ))}
              </div>
            </div>
            <span
              className={cn(showAt(8), "border border-foreground w-full")}
            ></span>
            <div className={cn(showAt(10), "relative")}>
              <div
                className={cn(
                  showAt(14),
                  "absolute left-[80%] top-[60px] text-[#007885] font-medium w-full"
                )}
              >
                Sample space
              </div>
              <div
                className={cn(
                  "flex gap-0.5 p-1 border-2 rounded-lg border-transparent",
                  happenAt(14) && "border-[#007885]"
                )}
              >
                {range(0, 3).map((v) => (
                  <Football key={v} size={40} />
                ))}
                {range(0, 7).map((v) => (
                  <Cross key={v} size={36} />
                ))}
              </div>
            </div>
          </div>
          <span className={cn(showAt(11))}>=</span>
          <div className={cn(showAt(11), "flex flex-col items-center")}>
            <span>3</span>
            <span className="border border-foreground w-full"></span>
            <span className="-translate-y-0.5">10</span>
          </div>
          <span className={cn(showAt(12))}>=</span>
          <span className={cn(showAt(12))}>0.3</span>
        </div>
      </div>
    </div>
  );
};

export default IntroductionToProbability;
