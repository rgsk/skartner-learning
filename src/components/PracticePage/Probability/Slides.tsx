"use client";

import IntroductionToProbability from "@/components/PracticePage/Probability/IntroductionToProbability";
import IntroductionToProbabilityCoinExample1 from "@/components/PracticePage/Probability/IntroductionToProbabilityCoinExample1";
import IntroductionToProbabilityVennDiagram from "@/components/PracticePage/Probability/IntroductionToProbabilityVennDiagram";
import StepRenderer from "@/components/PracticePage/Probability/StepRenderer";
import {
  Controls,
  ControlsHandle,
  ControlsProps,
  Step,
} from "@/components/Shared/Controls";
import { useRef, useState } from "react";

const Slides = () => {
  const controlsRef = useRef<ControlsHandle>(null);
  const [counter, setCounter] = useState(0);
  const resetState = () => {
    setCounter(0);
  };
  const runAlgo: ControlsProps["runAlgo"] = ({ addSteps }) => {
    algo();
    function algo() {
      const newSteps: Step[] = [];
      for (let i = 0; i < 100; i++) {
        newSteps.push(() => setCounter((prev) => prev + 1));
      }

      addSteps(newSteps);
    }
  };
  return (
    <div className="p-4">
      <div className="border border-foreground h-[60vh] p-[40px]">
        <StepRenderer
          counter={counter}
          steps={[
            { component: IntroductionToProbability, length: 14 },
            { component: IntroductionToProbabilityVennDiagram, length: 3 },
            { component: IntroductionToProbabilityCoinExample1, length: 3 },
          ]}
        />
      </div>
      <div className="h-[10vh]"></div>
      <Controls ref={controlsRef} resetState={resetState} runAlgo={runAlgo} />
    </div>
  );
};

export default Slides;
