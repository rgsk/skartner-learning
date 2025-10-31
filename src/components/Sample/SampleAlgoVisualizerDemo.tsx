"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";

interface SampleAlgoVisualizerDemoProps {}

const SampleAlgoVisualizerDemo: React.FC<
  SampleAlgoVisualizerDemoProps
> = ({}) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [steps, setSteps] = useState<(() => void | Promise<void>)[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0); // slider progress (index)
  const [pauseDuration, setPauseDuration] = useState(1000);
  const isRunningRef = useRef(isRunning);
  isRunningRef.current = isRunning;
  const pauseDurationRef = useRef(pauseDuration);
  pauseDurationRef.current = pauseDuration;
  const progressRef = useRef(progress);
  progressRef.current = progress;
  const stepsRef = useRef(steps);
  stepsRef.current = steps;

  const resetCount = () => {
    setCount1(0);
    setCount2(0);
    setCount3(0);
  };

  function algo() {
    const newSteps: typeof steps = [];
    for (let i = 0; i < 5; i++) {
      newSteps.push(() => setCount1((prev) => prev + 1));
    }
    for (let i = 0; i < 6; i++) {
      newSteps.push(() => setCount2((prev) => prev + 1));
    }
    for (let i = 0; i < 7; i++) {
      newSteps.push(() => setCount3((prev) => prev + 1));
    }
    setSteps((prev) => [...prev, ...newSteps]);
  }

  const pause = () => {
    setIsRunning(false);
  };

  const play = async () => {
    if (progress === steps.length) {
      resetCount();
      setProgress(0);
    }
    setIsRunning(true);
    while (true) {
      await new Promise((resolve) =>
        setTimeout(resolve, pauseDurationRef.current)
      );
      if (!isRunningRef.current) {
        return;
      }
      if (progressRef.current < stepsRef.current.length) {
        await stepsRef.current[progressRef.current]();
        setProgress(progressRef.current + 1);
      } else {
        break;
      }
    }
    setIsRunning(false);
  };

  // --- Slider Logic: Scrub Back/Forth ---
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = Number(e.target.value);
    resetCount();

    // Replay tasks up to the chosen index
    for (let i = 0; i < newIndex; i++) {
      steps[i]?.();
    }
    setProgress(newIndex);
  };

  const resetSteps = () => {
    setProgress(0);
    setIsRunning(false);
    resetCount();
    setSteps([]);
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

      <div className="flex gap-2">
        <Button onClick={algo}>Run Algo</Button>
        <Button onClick={play} disabled={isRunning || steps.length === 0}>
          Play
        </Button>
        <Button onClick={pause} disabled={!isRunning}>
          Pause
        </Button>
      </div>

      {/* --- Slider Control --- */}
      {steps.length > 0 && (
        <div className="flex flex-col items-center gap-2 w-64">
          <input
            type="range"
            min={0}
            max={steps.length}
            value={progress}
            onChange={handleSliderChange}
            className="w-full cursor-pointer"
          />
          <div className="text-sm text-gray-600">
            Step {progress} / {steps.length}
          </div>
        </div>
      )}
      {steps.length > 0 && (
        <>
          {isRunning && <p>⏳ Running</p>}
          {!isRunning && <p>⏸️ Paused</p>}
        </>
      )}
      <div className="flex flex-col items-center gap-2 w-64">
        <input
          type="range"
          min={100}
          max={2000}
          value={pauseDuration}
          onChange={(e) => {
            setPauseDuration(Number(e.target.value));
          }}
          className="w-full cursor-pointer"
        />
        <div className="text-sm">Pause Duration {pauseDuration}</div>
        <Button onClick={resetSteps}>Reset Steps</Button>
      </div>
    </div>
  );
};

export default SampleAlgoVisualizerDemo;
