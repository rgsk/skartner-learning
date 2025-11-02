import {
  Controls,
  ControlsHandle,
  ControlsProps,
} from "@/components/Shared/Controls";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  appendLinkedLists,
  containsNode,
  formLinkedList,
  ListNode,
} from "@/components/Visualization/DataStructures/LinkedList";
import { useMemo, useRef, useState } from "react";

const arrA = [11, 12, 13];
const arrB = [21, 22];
const arrC = [1, 2, 3];

const IntersectionOfTwoLinkedListsApproachVisualization = () => {
  const [headC, setHeadC] = useState(formLinkedList(arrC));
  const [headA, setHeadA] = useState(() => {
    const a = formLinkedList(arrA);
    return appendLinkedLists(a, headC);
  });
  const [headB, setHeadB] = useState(() => {
    const b = formLinkedList(arrB);
    return appendLinkedLists(b, headC);
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [arrAInput, setArrAInput] = useState(() => {
    return arrA.join(", ") + ", C";
  });
  const [arrBInput, setArrBInput] = useState(() => {
    return arrB.join(", ") + ", C";
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
        throw new Error("List A is empty");
      }

      if (!arrBInput) {
        throw new Error("List B is empty");
      }

      if (!arrCInput) {
        throw new Error("List C is empty");
      }

      const arrC = arrCInput
        .split(",")
        .map((x) => Number(x.trim()))
        .filter((x) => !isNaN(x));
      if (arrC.length === 0) {
        throw new Error("List C is empty");
      }
      const newHeadC = formLinkedList(arrC);
      setHeadC(newHeadC);

      const arrA = arrAInput.split(",").map((x) => x.trim());
      const dummyA = new ListNode(-1);
      let tA = dummyA;
      for (const v of arrA) {
        if (v === "C") {
          tA.next = newHeadC;
          break;
        } else {
          if (!isNaN(Number(v))) {
            tA.next = new ListNode(Number(v));
            tA = tA.next;
          }
        }
      }
      setHeadA(dummyA.next);

      const arrB = arrBInput.split(",").map((x) => x.trim());
      const dummyB = new ListNode(-1);
      let tB = dummyB;
      for (const v of arrB) {
        if (v === "C") {
          tB.next = newHeadC;
          break;
        } else {
          if (!isNaN(Number(v))) {
            tB.next = new ListNode(Number(v));
            tB = tB.next;
          }
        }
      }
      setHeadB(dummyB.next);

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
      const currentTempAIndex = getIndex(tempA, headA);
      const currentTempBIndex = getIndex(tempB, headB);
      addStep(() => {
        setTempAIndex(currentTempAIndex);
        setTempBIndex(currentTempBIndex);
      });

      // Traverse both lists; when one pointer reaches the end,
      // switch it to the head of the other list.
      while (tempA !== tempB) {
        tempA = tempA ? tempA.next : headB;
        tempB = tempB ? tempB.next : headA;

        const currentTempAIndex = getIndex(tempA, headA);
        const currentTempBIndex = getIndex(tempB, headB);
        addStep(() => {
          setTempAIndex(currentTempAIndex);
          setTempBIndex(currentTempBIndex);
        });
      }

      // Either both are null (no intersection) or at the intersection node
      return tempA;
    }
  };

  const intersecting = useMemo(() => {
    return containsNode(headA, headC) && containsNode(headB, headC);
  }, [headA, headB, headC]);

  const renderHead = (head: ListNode | null) => {
    const nodes = [];
    let current = head;
    let index = 0;

    while (current) {
      if (intersecting && current === headC && headC !== head) {
        return nodes;
      }
      nodes.push(
        <div key={index} className="flex items-center">
          <div className="relative">
            <div className="border-2 border-accent min-w-[36px] min-h-[36px] flex justify-center items-center">
              {current.data}
            </div>
            <div>
              {head === headA && tempAIndex === index && (
                <div className="absolute top-0 -translate-y-[120%] left-1/2 -translate-x-1/2">
                  ↓
                </div>
              )}
              {head === headB && tempBIndex === index && (
                <div className="absolute bottom-0 translate-y-[120%] left-1/2 -translate-x-1/2">
                  ↑
                </div>
              )}
            </div>
          </div>
          {current.next && (intersecting ? current.next !== headC : true) && (
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
        {intersecting && (
          <>
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
              </div>
            </div>
          </>
        )}
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
