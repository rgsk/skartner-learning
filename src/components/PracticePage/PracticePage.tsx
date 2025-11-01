"use client";

import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

import SampleBinarySearch from "../Sample/SampleBinarySearch";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div className="p-4">
      <SampleBinarySearch />
    </div>
  );
};
export default PracticePage;

function ArrayInput({ onSubmit }: { onSubmit: (arr: number[]) => void }) {
  const [arrinput, setArrInput] = useState("1, 2, 4, 7, 8, 10, 12, 13, 17, 19");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    try {
      const arr = arrinput
        .split(",")
        .map((x) => Number(x.trim()))
        .filter((x) => !isNaN(x));
      if (arr.length === 0) throw new Error("Array is empty");
      onSubmit(arr);
      setError("");
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 w-80">
      <Input
        type="text"
        value={arrinput}
        onChange={(e) => setArrInput(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
        placeholder="Enter numbers separated by commas"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button onClick={handleSubmit}>Set Array</Button>
    </div>
  );
}

function SimpleExample() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }} // starting state
        animate={{ opacity: 1, y: 0 }} // animate to this
        transition={{ duration: 0.8 }} // animation duration
        style={{
          background: "#4F46E5",
          color: "white",
          padding: "20px 40px",
          borderRadius: "12px",
          fontSize: "20px",
        }}
      >
        👋 Hello, Framer Motion!
      </motion.div>
    </div>
  );
}

function HoverButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        padding: "12px 24px",
        background: "#10B981",
        border: "none",
        color: "white",
        borderRadius: "10px",
        fontSize: "18px",
        cursor: "pointer",
      }}
    >
      Hover Me ✨
    </motion.button>
  );
}

function ToggleBox() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Box</button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "#6366F1",
              color: "#fff",
              marginTop: "20px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            I'm animated in and out! 💫
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
