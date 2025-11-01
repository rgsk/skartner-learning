"use client";

import { ArrowUpIcon } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Button } from "../ui/button";

import { motion } from "motion/react";

interface SampleBinarySearchProps {}

const SampleBinarySearch: React.FC<SampleBinarySearchProps> = ({}) => {
  const [leftIndex, setLeftIndex] = useState(-2);
  const [rightIndex, setRightIndex] = useState(-2);
  const [midIndex, setMidIndex] = useState(-2);
  const arr = useMemo(() => [1, 2, 4, 7, 8, 10, 12, 13, 17, 19], []);

  const runAlgo = (addStep: (step: () => void | Promise<void>) => void) => {
    const binarySearch = (arr: number[], key: number): number => {
      const updateLeftIndex = () => {
        const currentLeft = left;
        addStep(() => {
          setLeftIndex(currentLeft);
        });
      };
      const updateRightIndex = () => {
        const currentRight = right;
        addStep(() => {
          setRightIndex(currentRight);
        });
      };
      const updateMidIndex = () => {
        const currentMid = mid;
        addStep(() => {
          setMidIndex(currentMid);
        });
      };

      let left = 0;
      updateLeftIndex();
      let right = arr.length - 1;
      updateRightIndex();
      let mid = -1;

      while (left <= right) {
        mid = Math.floor((left + right) / 2);
        updateMidIndex();

        if (arr[mid] === key) {
          return mid;
        } else if (arr[mid] < key) {
          left = mid + 1;
          updateLeftIndex();
        } else {
          right = mid - 1;
          updateRightIndex();
        }
      }

      return -1;
    };

    binarySearch(arr, 8);
  };

  const resetState = () => {
    setLeftIndex(-2);
    setRightIndex(-2);
    setMidIndex(-2);
  };

  return (
    <div className="p-4">
      <div className="h-[30px]"></div>
      <div className="flex justify-center">
        <div className="flex border border-accent relative">
          {arr.map((v, i) => {
            return (
              <div key={i} className="relative">
                <div className="absolute top-0 -translate-y-[120%] left-1/2 -translate-x-1/2">
                  {i}
                </div>
                <div className="border border-accent min-w-[36px] min-h-[36px] flex justify-center items-center">
                  {v}
                </div>
              </div>
            );
          })}
          <div>
            <Arrow index={leftIndex}>
              <ArrowUpIcon />
              <p>left</p>
            </Arrow>
            <Arrow index={midIndex}>
              <ArrowUpIcon />
              <p>mid</p>
            </Arrow>
            <Arrow index={rightIndex}>
              <ArrowUpIcon />
              <p>right</p>
            </Arrow>
          </div>
        </div>
      </div>
      <div className="h-[10vh]"></div>
      <Controls resetState={resetState} runAlgo={runAlgo} />
    </div>
  );
};

export default SampleBinarySearch;

const Arrow = ({ index, children }: { index: number; children: any }) => {
  if (index == -2) return null;
  return (
    <motion.div
      className="absolute translate-y-full w-[36px] pt-2 flex flex-col justify-center items-center"
      style={{ bottom: 0, left: -2 }}
      animate={{ left: 36 * index }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
};

const Controls = ({
  resetState,
  runAlgo,
}: {
  resetState: () => void;
  runAlgo: (addStep: (step: () => void | Promise<void>) => void) => void;
}) => {
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

  const pause = () => {
    setIsRunning(false);
  };

  const play = async () => {
    if (progress === steps.length) {
      resetState();
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
    resetState();

    // Replay tasks up to the chosen index
    for (let i = 0; i < newIndex; i++) {
      steps[i]?.();
    }
    setProgress(newIndex);
  };

  const resetSteps = () => {
    setProgress(0);
    setIsRunning(false);
    resetState();
    setSteps([]);
  };
  return (
    <div className="flex flex-col gap-4 p-6 items-center">
      <div className="flex gap-2">
        <Button
          onClick={() =>
            runAlgo((step) => {
              setSteps((prev) => [...prev, step]);
            })
          }
        >
          Run Algo
        </Button>
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
