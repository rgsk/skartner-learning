"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon, RefreshCwIcon } from "lucide-react";
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
const speedDurationRange = { min: 100, max: 2000 };

export const Controls = forwardRef<ControlsHandle, ControlsProps>(
  ({ resetState, runAlgo }, ref) => {
    const [steps, setSteps] = useState<Step[]>([]);
    const [isRunning, setIsRunning] = useState(false);
    const [progress, setProgress] = useState(0); // slider progress (index)
    const [speedPercent, setSpeedPercent] = useState(50);
    const isRunningRef = useRef(isRunning);
    isRunningRef.current = isRunning;
    const speedPercentRef = useRef(speedPercent);
    speedPercentRef.current = speedPercent;
    const progressRef = useRef(progress);
    progressRef.current = progress;
    const progressBarRef = useRef<HTMLInputElement>(null);
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
        await new Promise((resolve) => {
          const pauseDuration =
            speedDurationRange.min +
            (speedDurationRange.max - speedDurationRange.min) *
              ((100 - speedPercentRef.current) / 100);

          setTimeout(resolve, pauseDuration);
        });
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

    const handleSliderChange = (newIndex: number) => {
      resetState();
      for (let i = 0; i < newIndex; i++) {
        steps[i]?.();
      }
      setProgress(newIndex);
    };
    const handleNavigation = (type: "left" | "right") => {
      if (type === "left") {
        handleSliderChange(Math.max(progress - 1, 0));
      } else {
        handleSliderChange(Math.min(progress + 1, steps.length));
      }
    };
    const handleNavigationRef = useRef(handleNavigation);
    handleNavigationRef.current = handleNavigation;

    const handlePlayPause = () => {
      if (isRunning) {
        pause();
      } else {
        play();
      }
    };
    const handlePlayPauseRef = useRef(handlePlayPause);
    handlePlayPauseRef.current = handlePlayPause;

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        const blurCurrentElement = () => {
          // this function prevents borders on elements on space/left/right click
          (document.activeElement as HTMLElement | null)?.blur();
        };
        if (
          e.key === " " &&
          !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName) // ensures space works on input
        ) {
          blurCurrentElement();
          e.preventDefault(); // prevents scrolling
          handlePlayPauseRef.current();
        } else {
          if (document.activeElement !== progressBarRef.current) {
            // if progress bar is in focus, then we listen to it's left or right events
            // otherwise we listen from window left/right
            if (e.key === "ArrowRight") {
              blurCurrentElement();
              handleNavigationRef.current("right");
            } else if (e.key === "ArrowLeft") {
              blurCurrentElement();
              handleNavigationRef.current("left");
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const resetSteps = () => {
      setProgress(0);
      setIsRunning(false);
      resetState();
      setSteps([]);
    };
    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 justify-between">
          <Button
            variant={"outline"}
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
            Run Algorithm
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={resetSteps}
            disabled={steps.length == 0}
          >
            <RefreshCwIcon />
          </Button>
        </div>

        {/* --- Slider Control --- */}

        <div className={cn("flex flex-col gap-2")}>
          <input
            disabled={steps.length === 0}
            ref={progressBarRef}
            type="range"
            min={0}
            max={steps.length}
            value={progress}
            onChange={(e) => handleSliderChange(Number(e.target.value))}
            className="w-full cursor-pointer focus:outline-none"
          />
          <div className="h-[10px]"></div>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <div>
                <Button
                  onClick={handlePlayPause}
                  disabled={steps.length === 0}
                  variant="outline"
                >
                  {isRunning ? <PauseIcon size={28} /> : <PlayIcon size={28} />}
                </Button>
              </div>
              <span className="text-sm">
                Step : {progress} / {steps.length}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="whitespace-nowrap text-sm">Speed :</span>
              <input
                type="range"
                min={0}
                max={100}
                value={speedPercent}
                onChange={(e) => {
                  const percent = Number(e.target.value);
                  setSpeedPercent(percent);
                }}
                className="w-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Controls.displayName = "Controls";
