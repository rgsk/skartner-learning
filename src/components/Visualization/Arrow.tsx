import { motion } from "motion/react";

import { GoArrowUp } from "react-icons/go";
const Arrow = ({
  index,
  text,
  level = 1,
  space,
}: {
  index: number;
  text: string;
  level?: number;
  space: number;
}) => {
  if (index == -2) return null;
  return (
    <motion.div
      className="absolute translate-y-full w-[36px] pt-2 flex flex-col justify-center items-center"
      style={{ left: -2, bottom: 0 }}
      animate={{ left: space * index }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      <GoArrowUp size={24} />
      <motion.span animate={{ translateY: (level - 1) * 20 }}>
        {text}
      </motion.span>
    </motion.div>
  );
};

export default Arrow;
