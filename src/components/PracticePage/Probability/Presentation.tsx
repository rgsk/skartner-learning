import Pages from "@/components/PracticePage/Probability/Pages";
import Slides from "@/components/PracticePage/Probability/Slides";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Presentation = ({
  steps,
}: {
  steps: {
    component: ({ counter }: { counter: number }) => any;
    length: number;
  }[];
}) => {
  const [showAsSlides, setShowAsSlides] = useState(false);
  return (
    <div>
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="as-slides"
            checked={showAsSlides}
            onCheckedChange={setShowAsSlides}
          />
          <Label htmlFor="as-slides">Show Slides</Label>
        </div>
      </div>
      <Separator />
      {showAsSlides ? <Slides steps={steps} /> : <Pages steps={steps} />}
    </div>
  );
};

export default Presentation;
