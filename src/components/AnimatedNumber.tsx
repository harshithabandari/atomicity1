"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";


interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1 }) => {
  const controls = useAnimation();
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    // animate whenever `value` changes (or on mount)
    controls.start({
      val: value,
      transition: { duration },
    } as any);
  }, [value, controls, duration]);

  return (
    <motion.span
      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-600 dark:text-indigo-400"
      initial={{ val: 0 } as any}
      animate={controls}
      onUpdate={(latest) => {
        if (typeof latest.val === "number") {
          setDisplay(latest.val.toFixed(0));
        }
      }}
    >
      {display}
    </motion.span>
  );
};

export default AnimatedNumber;
