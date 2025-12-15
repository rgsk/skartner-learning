import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TooltipWrapper = ({
  children,
  tooltip,
}: {
  children: any;
  tooltip: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipWrapper;
