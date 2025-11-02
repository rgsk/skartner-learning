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

const DeleteXthNodeFromEndOfLinkedListApproachVisualization = () => {
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
    setHead(formList(defaultArr));
  };

  const runAlgo: ControlsProps["runAlgo"] = ({ addStep }) => {
    const resultNode = removeXthNodeFromEnd(head, x);

    addStep(() => {
      setHead(resultNode);
      setFastIndex(-2);
      setSlowIndex(-2);
    });

    function removeXthNodeFromEnd(
      head: ListNode | null,
      x: number
    ): ListNode | null {
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

      // Create a dummy node to handle edge cases (like deleting the head)
      const dummy = new ListNode(0, head);
      const currentDummy = copyLinkedList(dummy);
      addStep(() => {
        setHead(currentDummy);
      });
      let fast: ListNode | null = dummy;
      addStep(() => {
        setFastIndex(0);
      });

      // Move the fast pointer x + 1 steps ahead
      for (let i = 0; i < x + 1; i++) {
        if (!fast) return head; // x is greater than the length of the list
        fast = fast.next;
        const currentFastIndex = getIndex(fast, dummy);
        addStep(() => {
          setFastIndex(currentFastIndex);
        });
      }

      let slow: ListNode | null = dummy;

      addStep(() => {
        setSlowIndex(0);
      });

      // Move both pointers until fast reaches the end
      while (fast) {
        fast = fast.next;
        slow = slow!.next;
        const currentFastIndex = getIndex(fast, dummy);
        const currentSlowIndex = getIndex(slow, dummy);
        addStep(() => {
          setFastIndex(currentFastIndex);
          setSlowIndex(currentSlowIndex);
        });
      }

      // Delete the target node
      if (slow && slow.next) {
        slow.next = slow.next.next;
        const currentDummy = copyLinkedList(dummy);
        const currentFastIndex = getIndex(fast, dummy);
        addStep(() => {
          setHead(currentDummy);
          setFastIndex(currentFastIndex);
        });
      }

      // Return the updated list (skip the dummy)
      return dummy.next;
    }
  };

  return (
    <div>
      <div className="h-[30px]"></div>
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
              const arr = toArray(head);

              return arr.map((v, index) => {
                return (
                  <div key={`${v}-${index}`} className="flex items-center">
                    <div className="border-2 border-accent min-w-[36px] min-h-[36px] flex justify-center items-center">
                      {v}
                    </div>
                    {index < arr.length - 1 && (
                      <div className="w-[36px] flex justify-center">→</div>
                    )}
                  </div>
                );
              });
            })()}
            <div>
              <Arrow space={72} index={fastIndex} text="fast" />
              <Arrow space={72} index={slowIndex} text="slow" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
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
          <Label className="w-[70px]">list : </Label>
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

export default DeleteXthNodeFromEndOfLinkedListApproachVisualization;

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

function toArray(head: ListNode | null): number[] {
  const arr: number[] = [];
  let current = head;
  while (current) {
    arr.push(current.data);
    current = current.next;
  }
  return arr;
}

function copyLinkedList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  const newHead = new ListNode(head.data);
  let currentOld = head.next;
  let currentNew = newHead;

  while (currentOld) {
    currentNew.next = new ListNode(currentOld.data);
    currentNew = currentNew.next;
    currentOld = currentOld.next;
  }

  return newHead;
}
