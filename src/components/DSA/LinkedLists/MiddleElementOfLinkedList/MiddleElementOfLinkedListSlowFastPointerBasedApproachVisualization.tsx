import {
  Controls,
  ControlsHandle,
  ControlsProps,
} from "@/components/Shared/Controls";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Arrow from "@/components/Visualization/Arrow";
import {
  formLinkedList,
  getNodeIndex,
  ListNode,
} from "@/components/Visualization/DataStructures/LinkedList";
import { useRef, useState } from "react";

const defaultArr = [1, 2, 3, 4, 5];

const MiddleElementOfLinkedListSlowFastPointerBasedApproachVisualization =
  () => {
    const [head, setHead] = useState(formLinkedList(defaultArr));
    const [errorMessage, setErrorMessage] = useState("");
    const [arrinput, setArrInput] = useState(() => {
      return defaultArr.join(", ");
    });
    const controlsRef = useRef<ControlsHandle>(null);
    const [fastIndex, setFastIndex] = useState(-2);
    const [slowIndex, setSlowIndex] = useState(-2);
    const handleSubmit = () => {
      try {
        if (!arrinput) {
          throw new Error("List is empty");
        }
        const arr = arrinput
          .split(",")
          .map((x) => Number(x.trim()))
          .filter((x) => !isNaN(x));
        if (arr.length === 0) {
          throw new Error("List is empty");
        }
        setHead(formLinkedList(arr));

        setErrorMessage("");
        controlsRef.current?.resetSteps();
      } catch (e: any) {
        setErrorMessage(e.message);
      }
    };

    const resetState = () => {
      setFastIndex(-2);
      setSlowIndex(-2);
    };

    const runAlgo: ControlsProps["runAlgo"] = ({ addStep }) => {
      const middleNode = getMiddleElementOfLinkedList(head);
      function getMiddleElementOfLinkedList(
        head: ListNode | null
      ): number | null {
        if (!head) return null;

        let slow: ListNode | null = head;
        let fast: ListNode | null = head;
        addStep(() => {
          setSlowIndex(0);
          setFastIndex(0);
        });

        // Move fast by 2 steps and slow by 1 step
        while (fast.next && fast.next.next) {
          slow = slow!.next;
          fast = fast.next.next;
          const currentFastIndex = getNodeIndex(head, fast);
          const currentSlowIndex = getNodeIndex(head, slow);
          addStep(() => {
            setFastIndex(currentFastIndex);
            setSlowIndex(currentSlowIndex);
          });
        }

        return slow ? slow.data : null;
      }
    };

    return (
      <div>
        <div className="h-[30px]"></div>
        <div className="grid gap-2 justify-center">
          <div className="flex items-center gap-2">
            <p className="w-[70px]">list : </p>
            <div className="flex relative">
              {(() => {
                const nodes = [];
                let current = head;
                let index = 0;

                while (current) {
                  nodes.push(
                    <div key={index} className="flex items-center">
                      <div className="border-2 border-accent min-w-[36px] min-h-[36px] flex justify-center items-center">
                        {current.data}
                      </div>
                      {current.next && (
                        <div className="w-[36px] flex justify-center">→</div>
                      )}
                    </div>
                  );
                  current = current.next;
                  index++;
                }
                return nodes;
              })()}
              <div>
                <Arrow
                  space={72}
                  index={fastIndex}
                  text="fast"
                  level={slowIndex === fastIndex ? 2 : 1}
                />
                <Arrow space={72} index={slowIndex} text="slow" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100px]"></div>
        <div className="flex flex-col items-stretch gap-4 w-80">
          <div className="flex items-center gap-2">
            <Label className="w-[70px]">list : </Label>
            <Input
              type="text"
              value={arrinput}
              onChange={(e) => setArrInput(e.target.value)}
              placeholder="Enter numbers separated by commas"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
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

export default MiddleElementOfLinkedListSlowFastPointerBasedApproachVisualization;
