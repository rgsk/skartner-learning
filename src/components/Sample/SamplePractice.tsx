import {
  Controls,
  ControlsHandle,
  ControlsProps,
} from "@/components/Shared/Controls";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Arrow from "@/components/Visualization/Arrow";
import { useRef, useState } from "react";

const defaultArr = [1, 2, 3, 4, 5, 6];
const defaultX = 2;

const SamplePractice = () => {
  const [head, setHead] = useState(formList(defaultArr));
  const [x, setX] = useState(defaultX);
  const [xInput, setXInput] = useState(String(defaultX));
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
      setHead(formList(arr));
      if (xInput.length === 0 || isNaN(Number(xInput))) {
        throw new Error("Please set x");
      } else {
        setX(Number(xInput));
      }
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
    controlsRef.current?.resetSteps();
    const resultNode = xthNodeFromEnd(head, x);
    function xthNodeFromEnd(head: ListNode | null, x: number): ListNode | null {
      if (!head) return null;

      let fast: ListNode | null = head;
      addStep(() => {
        setFastIndex(0);
      });
      const getIndex = (node: ListNode | null, head: ListNode | null) => {
        let index = 0;
        let current = head;
        while (current) {
          if (current === node) return index;
          current = current.next;
          index++;
        }
        return index;
      };

      // Move fast pointer x steps ahead
      for (let i = 0; i < x; i++) {
        if (!fast) return null; // x is greater than list length
        fast = fast.next;
        const currentFastIndex = getIndex(fast, head);
        addStep(() => {
          setFastIndex(currentFastIndex);
        });
      }

      let slow: ListNode | null = head;
      addStep(() => {
        setSlowIndex(0);
      });

      // Move both pointers until fast reaches the end
      while (fast) {
        fast = fast.next;
        slow = slow!.next;
        const currentFastIndex = getIndex(fast, head);
        const currentSlowIndex = getIndex(slow, head);
        addStep(() => {
          setFastIndex(currentFastIndex);
          setSlowIndex(currentSlowIndex);
        });
      }

      return slow;
    }
  };

  return (
    <div>
      <div className="grid gap-2 justify-center">
        <div className="flex items-center gap-2">
          <p className="w-[70px]">x : </p>
          <p>{x}</p>
        </div>
        <div className="h-[30px]"></div>
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
              <Arrow space={72} index={fastIndex} text="fast" />
              <Arrow space={72} index={slowIndex} text="slow" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch gap-2 w-80">
        <div className="flex items-center gap-2">
          <Label className="w-[70px]">x : </Label>
          <Input
            type="number"
            value={xInput}
            placeholder="Which element from end?"
            onChange={(e) => setXInput(e.target.value)}
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

export default SamplePractice;

// Definition for singly-linked list node
class ListNode {
  data: number;
  next: ListNode | null;

  constructor(data: number, next: ListNode | null = null) {
    this.data = data;
    this.next = next;
  }
}

function formList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return head;
}
