import {
  Controls,
  ControlsHandle,
  ControlsProps,
} from "@/components/Shared/Controls";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  formLinkedList,
  ListNode,
} from "@/components/Visualization/DataStructures/LinkedList";
import { useRef, useState } from "react";

const arrA = [11, 12, 13];
const arrB = [21, 22];
const arrC = [1, 2, 3];

const IntersectionOfTwoLinkedListsApproachVisualization = () => {
  const [headA, setHeadA] = useState(formLinkedList(arrA));
  const [headB, setHeadB] = useState(formLinkedList(arrB));
  const [headC, setHeadC] = useState(formLinkedList(arrC));
  const [errorMessage, setErrorMessage] = useState("");
  const [arrAInput, setArrAInput] = useState(() => {
    return arrA.join(", ");
  });
  const [arrBInput, setArrBInput] = useState(() => {
    return arrB.join(", ");
  });
  const [arrCInput, setArrCInput] = useState(() => {
    return arrC.join(", ");
  });
  const controlsRef = useRef<ControlsHandle>(null);
  const [tempAIndex, setTempAIndex] = useState(-2);
  const [tempBIndex, setTempBIndex] = useState(-2);
  const handleSubmit = () => {
    try {
      if (!arrAInput) {
        throw new Error("List is empty");
      }
      const arr = arrAInput
        .split(",")
        .map((x) => Number(x.trim()))
        .filter((x) => !isNaN(x));
      if (arr.length === 0) {
        throw new Error("List is empty");
      }
      setHeadA(formLinkedList(arr));

      setErrorMessage("");
      controlsRef.current?.resetSteps();
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  };

  const resetState = () => {
    setTempAIndex(-2);
    setTempBIndex(-2);
  };

  const runAlgo: ControlsProps["runAlgo"] = ({ addStep }) => {
    const resultNode = getIntersectionNode(headA, headB);

    function getIntersectionNode(
      headA: ListNode | null,
      headB: ListNode | null
    ): ListNode | null {
      if (!headA || !headB) return null;

      let tempA: ListNode | null = headA;
      let tempB: ListNode | null = headB;

      // Traverse both lists; when one pointer reaches the end,
      // switch it to the head of the other list.
      while (tempA !== tempB) {
        tempA = tempA ? tempA.next : headB;
        tempB = tempB ? tempB.next : headA;
      }

      // Either both are null (no intersection) or at the intersection node
      return tempA;
    }
  };

  const renderHead = (head: ListNode | null) => {
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
  };

  return (
    <div>
      <div className="h-[30px]"></div>
      <div className="flex justify-center items-center">
        <div className="grid gap-2 justify-center">
          <div className="flex items-center gap-2">
            <p className="w-[50px]">listA : </p>
            <div className="flex relative">{renderHead(headA)}</div>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-[50px]">listB : </p>
            <div className="flex-1"></div>
            <div className="flex relative">{renderHead(headB)}</div>
          </div>
        </div>
        <div>
          <div className="-translate-y-[6px] rotate-[30deg]">
            <div className="w-[36px] flex justify-center">→</div>
          </div>
          <div className="translate-y-[6px] rotate-[-30deg]">
            <div className="w-[36px] flex justify-center">→</div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="flex relative">{renderHead(headC)}</div>
            <p className="w-[50px] flex justify-end">: listC </p>
          </div>
        </div>
      </div>
      <div className="h-[60px]"></div>
      <div className="flex flex-col items-stretch gap-2 w-80">
        <div className="flex items-center gap-2">
          <Label className="w-[70px]">listA : </Label>
          <Input
            type="text"
            value={arrAInput}
            onChange={(e) => setArrAInput(e.target.value)}
            placeholder="Enter numbers separated by commas"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label className="w-[70px]">listB : </Label>
          <Input
            type="text"
            value={arrBInput}
            onChange={(e) => setArrBInput(e.target.value)}
            placeholder="Enter numbers separated by commas"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label className="w-[70px]">listC : </Label>
          <Input
            type="text"
            value={arrCInput}
            onChange={(e) => setArrCInput(e.target.value)}
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

export default IntersectionOfTwoLinkedListsApproachVisualization;
