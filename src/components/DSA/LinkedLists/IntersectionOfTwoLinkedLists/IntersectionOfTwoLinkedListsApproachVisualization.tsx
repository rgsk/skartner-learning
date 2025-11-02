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
  appendNodeToLinkedList,
  containsNode,
  copyLinkedList,
  formLinkedList,
  getNodeIndex,
  ListNode,
} from "@/components/Visualization/DataStructures/LinkedList";
import { useMemo, useRef, useState } from "react";

const arrA = [11, 12, 13];
const arrB = [21, 22];
const arrC = [1, 2, 3];

type TempIndex = {
  list: "A" | "B" | "C";
  index: number;
};

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
  const [tempAIndex, setTempAIndex] = useState<TempIndex>({
    list: "A",
    index: -2,
  });
  const [tempBIndex, setTempBIndex] = useState<TempIndex>({
    list: "B",
    index: -2,
  });
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
    setTempAIndex({ list: "A", index: -2 });
    setTempBIndex({ list: "B", index: -2 });
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

      const localTempA: TempIndex = {
        list: "A",
        index: 0,
      };
      const localTempB: TempIndex = {
        list: "B",
        index: 0,
      };
      const currentTempAIndex = { ...localTempA };
      const currentTempBIndex = { ...localTempB };
      addStep(() => {
        setTempAIndex(currentTempAIndex);
        setTempBIndex(currentTempBIndex);
      });

      // Traverse both lists; when one pointer reaches the end,
      // switch it to the head of the other list.
      while (tempA !== tempB) {
        if (tempA) {
          tempA = tempA.next;
          localTempA.index += 1;
        } else {
          tempA = headB;
          localTempA.list = "B";
          localTempA.index = 0;
        }
        if (tempB) {
          tempB = tempB.next;
          localTempB.index += 1;
        } else {
          tempB = headA;
          localTempB.list = "A";
          localTempB.index = 0;
        }
        const currentTempAIndex = { ...localTempA };
        const currentTempBIndex = { ...localTempB };
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
    let current =
      head === headC || !intersecting
        ? appendNodeToLinkedList(copyLinkedList(head), new ListNode(-2))
        : head;
    let index = 0;

    while (current) {
      if (intersecting && current === headC && headC !== head) {
        return nodes;
      }

      nodes.push(
        <div key={index} className="flex items-center">
          <div className="relative">
            <div className="border-2 border-accent min-w-[36px] px-2 min-h-[36px] flex justify-center items-center">
              {current.data === -2 ? "NULL" : current.data}
            </div>
            <div>
              {tempAIndex.list === "A" &&
                ((head === headA && tempAIndex.index === index) ||
                  (head === headC &&
                    tempAIndex.index - getNodeIndex(headA, headC) ===
                      index)) && (
                  <div className="absolute top-0 -translate-y-[120%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span>tempA</span>
                    <span>↓</span>
                  </div>
                )}
              {tempAIndex.list === "B" &&
                ((head === headB && tempAIndex.index === index) ||
                  (head === headC &&
                    tempAIndex.index - getNodeIndex(headB, headC) ===
                      index)) && (
                  <div className="absolute bottom-0 translate-y-[120%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span>↑</span>
                    <span>tempA</span>
                  </div>
                )}

              {tempBIndex.list === "B" &&
                ((head === headB && tempBIndex.index === index) ||
                  (head === headC &&
                    tempBIndex.index - getNodeIndex(headB, headC) ===
                      index)) && (
                  <div className="absolute bottom-0 translate-y-[120%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span>↑</span>
                    <span>tempB</span>
                  </div>
                )}

              {tempBIndex.list === "A" &&
                ((head === headA && tempBIndex.index === index) ||
                  (head === headC &&
                    tempBIndex.index - getNodeIndex(headA, headC) ===
                      index)) && (
                  <div className="absolute top-0 -translate-y-[120%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span>tempB</span>
                    <span>↓</span>
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
            <div className="flex-1"></div>
            <div className="flex">{renderHead(headA)}</div>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-[50px]">listB : </p>
            <div className="flex-1"></div>
            <div className="flex">{renderHead(headB)}</div>
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
            <div className="flex">{renderHead(headC)}</div>
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
