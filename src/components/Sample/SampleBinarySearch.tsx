"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Button } from "../ui/button";

import { motion } from "motion/react";

import { GoArrowUp } from "react-icons/go";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface SampleBinarySearchProps {}

const SampleBinarySearch: React.FC<SampleBinarySearchProps> = ({}) => {
  const [leftIndex, setLeftIndex] = useState(-2);
  const [rightIndex, setRightIndex] = useState(-2);
  const [midIndex, setMidIndex] = useState(-2);
  const [arrinput, setArrInput] = useState("1, 2, 4, 7, 8, 10, 12, 13, 17, 19");
  const [arr, setArr] = useState([1, 2, 4, 7, 8, 10, 12, 13, 17, 19]);
  const [target, setTarget] = useState<number>(12);
  const [targetInput, setTargetInput] = useState("12");
  const [errorMessage, setErrorMessage] = useState("");
  const controlsRef = useRef<ControlsHandle>(null);

  const handleSubmit = () => {
    try {
      if (!arrinput) {
        throw new Error("Array is empty");
      }
      const arr = arrinput
        .split(",")
        .map((x) => Number(x.trim()))
        .filter((x) => !isNaN(x));
      if (arr.length === 0) {
        throw new Error("Array is empty");
      }
      setArr(arr);
      if (targetInput.length === 0 || isNaN(Number(targetInput))) {
        throw new Error("Please set the target");
      } else {
        setTarget(Number(targetInput));
      }
      setErrorMessage("");
      controlsRef.current?.resetSteps();
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  };

  const runAlgo: ControlsProps["runAlgo"] = ({ addStep }) => {
    controlsRef.current?.resetSteps();
    binarySearch(arr, target);

    function binarySearch(arr: number[], key: number): number {
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
    }
  };

  const resetState = () => {
    setLeftIndex(-2);
    setRightIndex(-2);
    setMidIndex(-2);
  };

  return (
    <div className="p-4">
      <div className="h-[30px]"></div>
      <div className="grid gap-2 justify-center">
        <div className="flex items-center gap-2">
          <p className="w-[70px]">target : </p>
          <p>{target}</p>
        </div>
        <div className="h-[30px]"></div>
        <div className="flex items-center gap-2">
          <p className="w-[70px]">arr : </p>
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
              <Arrow index={leftIndex} text="left" />
              <Arrow
                index={midIndex}
                level={midIndex === leftIndex ? 2 : 1}
                text="mid"
              />
              <Arrow
                index={rightIndex}
                level={
                  rightIndex === midIndex && rightIndex === leftIndex
                    ? 3
                    : rightIndex === midIndex || rightIndex === leftIndex
                    ? 2
                    : 1
                }
                text="right"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-2 w-80">
        <div className="flex items-center gap-2">
          <Label className="w-[70px]">target : </Label>
          <Input
            type="number"
            value={targetInput}
            placeholder="Element to search"
            onChange={(e) => setTargetInput(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Label className="w-[70px]">arr : </Label>
          <Input
            type="text"
            value={arrinput}
            onChange={(e) => setArrInput(e.target.value)}
            placeholder="Enter numbers separated by commas"
          />
        </div>

        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <div className="flex justify-start">
          <Button variant={"outline"} onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <div className="h-[10vh]"></div>
      <Controls ref={controlsRef} resetState={resetState} runAlgo={runAlgo} />
    </div>
  );
};

export default SampleBinarySearch;

const Arrow = ({
  index,
  text,
  level = 1,
}: {
  index: number;
  text: string;
  level?: number;
}) => {
  if (index == -2) return null;
  return (
    <motion.div
      className="absolute translate-y-full w-[36px] pt-2 flex flex-col justify-center items-center"
      style={{ left: -2, bottom: 0 }}
      animate={{ left: 36 * index }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      <GoArrowUp size={24} />
      <motion.span animate={{ translateY: (level - 1) * 20 }}>
        {text}
      </motion.span>
    </motion.div>
  );
};
export type Step = () => void | Promise<void>;

// --- TYPES ---
export type ControlsHandle = {
  resetSteps: () => void;
};

export type ControlsProps = {
  resetState: () => void;
  runAlgo: (props: {
    addStep: (step: Step) => void;
    addSteps: (steps: Array<Step>) => void;
  }) => void;
};

export const Controls = forwardRef<ControlsHandle, ControlsProps>(
  ({ resetState, runAlgo }, ref) => {
    const [steps, setSteps] = useState<Step[]>([]);
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

    useImperativeHandle(ref, () => ({
      resetSteps,
    }));

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
            onClick={() => {
              runAlgo({
                addStep: (step) => {
                  setSteps((prev) => [...prev, step]);
                },
                addSteps: (steps) => {
                  setSteps((prev) => [...prev, ...steps]);
                },
              });
            }}
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
  }
);

Controls.displayName = "Controls";
