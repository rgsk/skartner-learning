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
const defaultK = 3;

const KthElementInLinkedListApproachVisualization = () => {
  const [head, setHead] = useState(formLinkedList(defaultArr));
  const [count, setCount] = useState(0);
  const [k, setK] = useState(defaultK);
  const [kInput, setKInput] = useState(String(defaultK));
  const [errorMessage, setErrorMessage] = useState("");
  const [arrinput, setArrInput] = useState(() => {
    return defaultArr.join(", ");
  });
  const controlsRef = useRef<ControlsHandle>(null);
  const [tempIndex, setTempIndex] = useState(-2);
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

      if (kInput.length === 0 || isNaN(Number(kInput))) {
        throw new Error("Please set k");
      } else {
        setK(Number(kInput));
      }

      setErrorMessage("");
      controlsRef.current?.resetSteps();
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  };

  const resetState = () => {
    setCount(0);
    setTempIndex(-2);
  };

  const runAlgo: ControlsProps["runAlgo"] = ({ addStep }) => {
    const kthNode = kthElement(head, k);
    function kthElement(head: ListNode | null, k: number): ListNode | null {
      let temp: ListNode | null = head;

      let count = 1;

      addStep(() => {
        setTempIndex(0);
        setCount(1);
      });

      // Traverse until reaching the kth node
      while (temp !== null && count < k) {
        temp = temp.next;
        count++;
        const currentTempIndex = getNodeIndex(head, temp);
        const currentCount = count;
        addStep(() => {
          setTempIndex(currentTempIndex);
          setCount(currentCount);
        });
      }

      // Return the kth node (assuming k is always valid)
      return temp;
    }
  };

  return (
    <div>
      <div className="h-[30px]"></div>
      <div className="grid gap-2 justify-center">
        <div className="flex items-center gap-2">
          <p className="w-[70px]">k : </p>
          <p>{k}</p>
        </div>
        <div className="h-[10px]"></div>
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
              <Arrow space={72} index={tempIndex} text="temp" />
            </div>
          </div>
        </div>
        {count !== 0 && (
          <>
            <div className="h-[50px]"></div>
            <div className="flex items-center gap-2">
              <p className="w-[70px]">count : </p>
              <p>{count}</p>
            </div>
          </>
        )}
      </div>
      <div className="h-[100px]"></div>
      <div className="flex flex-col items-stretch gap-4 w-80">
        <div className="flex items-center gap-2">
          <Label className="w-[70px]">k : </Label>
          <Input
            type="number"
            value={kInput}
            placeholder="Element at which position?"
            onChange={(e) => setKInput(e.target.value)}
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

export default KthElementInLinkedListApproachVisualization;
