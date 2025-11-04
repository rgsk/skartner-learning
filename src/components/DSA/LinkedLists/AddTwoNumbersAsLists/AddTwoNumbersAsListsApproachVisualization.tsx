import {
  Controls,
  ControlsHandle,
  ControlsProps,
} from "@/components/Shared/Controls";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  appendNodeToLinkedList,
  copyLinkedList,
  formLinkedList,
  getLinkedListLength,
  getNodeIndex,
  ListNode,
} from "@/components/Visualization/DataStructures/LinkedList";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

const defaultA = 501;
const defaultB = 639;

const numberToLL = (n: number) => {
  return formLinkedList(
    String(n)
      .split("")
      .reverse()
      .map((v) => +v)
  );
};
const AddTwoNumbersAsListsApproachVisualization = () => {
  const [headA, setHeadA] = useState(() => numberToLL(defaultA));
  const [headB, setHeadB] = useState(() => numberToLL(defaultB));
  const [errorMessage, setErrorMessage] = useState("");
  const [aInput, setAInput] = useState(() => String(defaultA));
  const [bInput, setBInput] = useState(() => String(defaultB));
  const controlsRef = useRef<ControlsHandle>(null);
  const [firstIndex, setFirstIndex] = useState(-2);
  const [secondIndex, setSecondIndex] = useState(-2);
  const [carryIndex, setCarryIndex] = useState(-2);
  const [carry, setCarry] = useState(0);
  const [resultHead, setResultHead] = useState<ListNode | null>(null);
  const [highlightSumParticipants, setHighlightSumParticipants] =
    useState(false);
  const handleSubmit = () => {
    try {
      if (!aInput.trim()) {
        throw new Error("a is empty");
      }
      if (isNaN(+aInput)) {
        throw new Error("a is not valid");
      }
      setHeadA(numberToLL(+aInput));
      if (!bInput.trim()) {
        throw new Error("b is empty");
      }
      if (isNaN(+bInput)) {
        throw new Error("b is not valid");
      }
      setHeadB(numberToLL(+bInput));
      setErrorMessage("");
      controlsRef.current?.resetSteps();
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  };

  const resetState = () => {
    setCarry(0);
    setFirstIndex(-2);
    setSecondIndex(-2);
    setCarryIndex(-2);
    setResultHead(null);
  };

  const runAlgo: ControlsProps["runAlgo"] = ({ addStep }) => {
    const resultList = addTwoNumbers(headA, headB);
    function addTwoNumbers(
      firstList: ListNode | null,
      secondList: ListNode | null
    ): ListNode | null {
      // Dummy node to simplify list construction
      const dummy = new ListNode(0);
      let current = dummy;
      let carry = 0;

      // Traverse both lists
      while (firstList !== null || secondList !== null || carry !== 0) {
        const currentFirstIndex = getNodeIndex(headA, firstList);
        const currentSecondIndex = getNodeIndex(headB, secondList);

        addStep(() => {
          setHighlightSumParticipants(true);
          setFirstIndex(currentFirstIndex);
          setSecondIndex(currentSecondIndex);
        });

        let total = carry;

        if (firstList !== null) {
          total += firstList.data;
          firstList = firstList.next;
        }

        if (secondList !== null) {
          total += secondList.data;
          secondList = secondList.next;
        }

        carry = Math.floor(total / 10);
        const digit = total % 10;

        // Append new node with current digit
        current.next = new ListNode(digit);
        current = current.next;
        const currentResultHead = copyLinkedList(dummy.next);
        const currentCarry = carry;
        const currentCarryIndex = (() => {
          const v = Math.max(
            getNodeIndex(headA, firstList),
            getNodeIndex(headB, secondList)
          );
          if (v !== -1) {
            return v;
          } else {
            return Math.max(
              getLinkedListLength(headA),
              getLinkedListLength(headB)
            );
          }
        })();
        addStep(() => {
          setHighlightSumParticipants(false);
          setCarry(currentCarry);
          setCarryIndex(currentCarryIndex);
          setResultHead(currentResultHead);
        });
      }

      // Return the head of the new list
      return dummy.next;
    }
  };

  const renderNodes = (head: ListNode | null) => {
    return (
      <div className="flex">
        {(() => {
          const nodes = [];

          let current = appendNodeToLinkedList(
            copyLinkedList(head),
            new ListNode(NaN)
          );
          let index = 0;

          while (current) {
            const highlight =
              highlightSumParticipants &&
              ((head === headA && index === firstIndex) ||
                (head === headB && index === secondIndex));
            nodes.push(
              <div key={index} className={cn("flex items-center")}>
                <div
                  className={cn(
                    "border-2 border-accent px-2 min-w-[36px] min-h-[36px] flex justify-center items-center",
                    highlight && "border-blue-300"
                  )}
                >
                  {isNaN(current.data) ? "NULL" : current.data}
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
      </div>
    );
  };

  return (
    <div>
      <div className="h-[30px]"></div>
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <p className="w-[70px]">carry : </p>
          <p
            className={cn([
              "w-[36px] h-[36px] border-2 flex justify-center items-center",
              highlightSumParticipants ? "border-blue-300" : "border-accent",
            ])}
            style={{
              transform: `translateX(${carryIndex * 72}px)`,
              opacity: carry === 0 ? 0 : 1,
            }}
          >
            {carry}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[70px]">headA : </p>
          {renderNodes(headA)}
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[70px]">headB : </p>
          {renderNodes(headB)}
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[70px]">result : </p>
          {renderNodes(resultHead)}
        </div>
      </div>
      <div className="h-[60px]"></div>
      <div className="flex flex-col items-stretch gap-2 w-80">
        <div className="flex items-center gap-2">
          <Label className="w-[70px]">a : </Label>
          <Input
            type="number"
            value={aInput}
            onChange={(e) => setAInput(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Label className="w-[70px]">b : </Label>
          <Input
            type="number"
            value={bInput}
            onChange={(e) => setBInput(e.target.value)}
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

export default AddTwoNumbersAsListsApproachVisualization;
