"use client";

import {
  Controls,
  ControlsHandle,
  ControlsProps,
} from "@/components/Shared/Controls";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { GoArrowUp } from "react-icons/go";

const defaultArr = [9, 7, 6, 3, 8, 1, 10, 2, 5];
interface MergeSortVisualizationProps {}

const MergeSortVisualization: React.FC<MergeSortVisualizationProps> = ({}) => {
  const [arr, setArr] = useState(defaultArr);
  const [tree, setTree] = useState<
    {
      arr: number[];
      start: number;
      end: number;
      x: number;
      y: number;
      arrowIndex?: number;
      emptyAfterArrowIndex?: boolean;
      direction: "root" | "left" | "right";
    }[]
  >([]);
  const [arrinput, setArrInput] = useState(defaultArr.join(", "));
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
      setErrorMessage("");
      controlsRef.current?.resetSteps();
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  };

  const runAlgo: ControlsProps["runAlgo"] = ({ addStep }) => {
    const sorted = sortArray([...arr]);
    function merge(
      arr: number[],
      start: number,
      mid: number,
      end: number
    ): void {
      const aux = Array<number>(end - start + 1).fill(0);
      let k = 0;
      let i = start;
      let j = mid + 1;
      const updateIndex = () => {
        const _i = i;
        const _j = j;
        const _k = k;
        const _aux = [...aux];
        addStep(() => {
          setTree((prev) => {
            if (!prev) return prev;

            return prev.map((node) => {
              if (node.start === start && node.end === end) {
                return {
                  ...node,
                  arrowIndex: _k,
                  emptyAfterArrowIndex: true,
                  arr: _aux,
                };
              }
              if (node.start === start && node.end === mid) {
                return {
                  ...node,
                  arrowIndex: _i - start,
                };
              }

              if (node.start === mid + 1 && node.end === end) {
                return {
                  ...node,
                  arrowIndex: _j - (mid + 1),
                };
              }

              return node; // unchanged
            });
          });
        });
      };
      updateIndex();

      while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
          aux[k] = arr[i];
          k++;
          i++;
          updateIndex();
        } else {
          aux[k] = arr[j];
          k++;
          j++;
          updateIndex();
        }
      }

      while (i <= mid) {
        aux[k] = arr[i];
        k++;
        i++;
        updateIndex();
      }

      while (j <= end) {
        aux[k] = arr[j];
        k++;
        j++;
        updateIndex();
      }

      for (let k = 0; k < aux.length; k++) {
        arr[start + k] = aux[k];
      }

      // delete children trees
      addStep(() => {
        setTree((prev) => {
          if (!prev) return prev;

          return prev
            .filter((node) => {
              if (
                (node.start === start && node.end === mid) ||
                (node.start === mid + 1 && node.end === end)
              ) {
                return false;
              }

              return true;
            })
            .map((node) => {
              return {
                ...node,
                arrowIndex: undefined,
                emptyAfterArrowIndex: false,
              };
            });
        });
      });
    }

    function mergeSort(
      arr: number[],
      start: number,
      end: number,
      {
        x,
        y,
        direction,
      }: { x: number; y: number; direction: "root" | "left" | "right" }
    ): void {
      const currentArr = arr.slice(start, end + 1);
      addStep(() => {
        setTree((prev) => [
          ...prev,
          { arr: currentArr, end, start, x, y, direction },
        ]);
      });
      if (start < end) {
        const mid = Math.floor((start + end) / 2);
        mergeSort(arr, start, mid, { x: x - 1, y: y + 1, direction: "left" });
        mergeSort(arr, mid + 1, end, {
          x: x + 1,
          y: y + 1,
          direction: "right",
        });
        merge(arr, start, mid, end);
      }
    }

    function sortArray(nums: number[]): number[] {
      mergeSort(nums, 0, nums.length - 1, { x: 0, y: 0, direction: "root" });
      return nums;
    }
  };

  const resetState = () => {
    setTree([]);
  };

  return (
    <div>
      <div className="h-[30px]"></div>
      <div className="grid gap-2 justify-center">
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
          </div>
        </div>
      </div>
      <div className="h-[60px]"></div>
      {tree.length > 0 && (
        <div className="relative">
          {tree.map((entry, i) => {
            return (
              <div
                key={i}
                className={cn("flex absolute")}
                style={{
                  top: entry.y * 80,
                  left: 560 + entry.x * arr.length * 15,
                  transform: "translateX(-50%)",
                }}
              >
                {entry.direction === "left" && (
                  <>
                    <div className="absolute -translate-y-[100%] left-[100%] -translate-x-[50px] rotate-45">
                      <div
                        style={{
                          height: 45,
                          width: 1,
                        }}
                        className="bg-accent"
                      ></div>
                    </div>
                  </>
                )}
                {entry.direction === "right" && (
                  <>
                    <div className="absolute -translate-y-[100%] -rotate-45">
                      <div
                        style={{
                          height: 45,
                          width: 1,
                        }}
                        className="bg-accent"
                      ></div>
                    </div>
                  </>
                )}
                {[...entry.arr, "dummy"].map((v, i) => {
                  return (
                    <div key={i} className="relative">
                      <div
                        className={cn(
                          "border border-accent min-w-[36px] min-h-[36px] flex justify-center items-center",
                          v === "dummy" ? "opacity-0" : "opacity-100",
                          typeof entry.arrowIndex === "number" &&
                            entry.emptyAfterArrowIndex &&
                            i >= entry.arrowIndex
                            ? "text-transparent"
                            : ""
                        )}
                      >
                        {v}
                      </div>

                      {i === entry.arrowIndex && (
                        <div className="flex justify-center mt-1">
                          <GoArrowUp size={18} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
      <div
        style={{
          height: tree.length > 0 ? Math.ceil(Math.log2(arr.length)) * 100 : 0,
        }}
      ></div>
      <div className="flex flex-col items-stretch gap-2 w-80">
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

export default MergeSortVisualization;
