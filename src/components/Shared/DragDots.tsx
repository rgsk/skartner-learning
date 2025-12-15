import { cn } from "@/lib/utils";

interface DragDotsProps {
  type: "horizontal" | "vertical";
}
const DragDots: React.FC<DragDotsProps> = ({ type }) => {
  return (
    <div className="flex">
      <div
        className={cn(
          "gap grid grid-cols-3",
          type === "horizontal" ? "gap-x-0.5 gap-y-1" : "gap-x-1 gap-y-0.5"
        )}
      >
        {Array(6)
          .fill(0)
          .map((v, i) => (
            <div
              key={i}
              className="h-[4px] w-[4px] rounded-full bg-[#B2B2B2]"
            ></div>
          ))}
      </div>
    </div>
  );
};
export default DragDots;
