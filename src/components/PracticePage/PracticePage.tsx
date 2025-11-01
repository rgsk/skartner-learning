"use client";

import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import SampleBinarySearch from "../Sample/SampleBinarySearch";

interface PracticePageProps {}
const PracticePage: React.FC<PracticePageProps> = ({}) => {
  return (
    <div className="p-4">
      <SampleBinarySearch />
    </div>
  );
};
export default PracticePage;

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
