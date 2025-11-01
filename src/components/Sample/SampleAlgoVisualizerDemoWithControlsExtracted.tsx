"use client";

import { Controls, ControlsProps, Step } from "@/components/Shared/Controls";
import { useState } from "react";

interface SampleAlgoVisualizerDemoWithControlsExtractedProps {}

const SampleAlgoVisualizerDemoWithControlsExtracted: React.FC<
  SampleAlgoVisualizerDemoWithControlsExtractedProps
> = ({}) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const runAlgo: ControlsProps["runAlgo"] = ({ addSteps }) => {
    algo();
    function algo() {
      const newSteps: Step[] = [];
      for (let i = 0; i < 5; i++) {
        newSteps.push(() => setCount1((prev) => prev + 1));
      }
      for (let i = 0; i < 6; i++) {
        newSteps.push(() => setCount2((prev) => prev + 1));
      }
      for (let i = 0; i < 7; i++) {
        newSteps.push(() => setCount3((prev) => prev + 1));
      }
      addSteps(newSteps);
    }
  };

  const resetCount = () => {
    setCount1(0);
    setCount2(0);
    setCount3(0);
  };

  return (
    <div className="flex flex-col gap-4 p-6 items-center">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-lg font-medium">Counters</span>
        <div className="flex gap-3">
          <button>count1: {count1}</button>
          <button>count2: {count2}</button>
          <button>count3: {count3}</button>
        </div>
      </div>
      <Controls resetState={resetCount} runAlgo={runAlgo} />
    </div>
  );
};

export default SampleAlgoVisualizerDemoWithControlsExtracted;
