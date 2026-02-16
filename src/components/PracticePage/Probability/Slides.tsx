"use client";

import StepRenderer from "@/components/PracticePage/Probability/StepRenderer";
import {
  Controls,
  ControlsHandle,
  ControlsProps,
  Step,
} from "@/components/Shared/Controls";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect, useRef, useState } from "react";

const Slides = ({
  steps,
}: {
  steps: {
    component: ({ counter }: { counter: number }) => any;
    length: number;
  }[];
}) => {
  const controlsRef = useRef<ControlsHandle>(null);
  const [counter, setCounter] = useState(0);
  const [slideMode, setSlideMode] = useState(true);
  const resetState = () => {
    setCounter(0);
  };
  useEffect(() => {
    const mainContainer = document.getElementById("main-container");
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [counter]);
  const runAlgo: ControlsProps["runAlgo"] = ({ addSteps }) => {
    algo();
    function algo() {
      let newSteps: Step[];
      if (slideMode) {
        newSteps = steps.map(
          (s) => () => setCounter((prev) => prev + s.length),
        );
      } else {
        newSteps = [];
        const totalLength = steps.reduce((t, s) => t + s.length, 0);
        for (let i = 0; i < totalLength; i++) {
          newSteps.push(() => setCounter((prev) => prev + 1));
        }
      }

      addSteps(newSteps);
    }
  };

  return (
    <div className="p-4 min-h-screen flex flex-col">
      <div className="border border-foreground p-[40px]">
        <StepRenderer counter={counter} steps={steps} />
      </div>
      <div className="flex-1"></div>
      <div className="h-[5vh]"></div>
      <div className="flex items-center space-x-2">
        <Switch
          id="slide-mode"
          checked={slideMode}
          onCheckedChange={setSlideMode}
        />
        <Label htmlFor="slide-mode">Slide Mode</Label>
      </div>
      <div className="h-[2vh]"></div>
      <Controls ref={controlsRef} resetState={resetState} runAlgo={runAlgo} />
      <div className="h-[13vh]"></div>
    </div>
  );
};

export default Slides;
