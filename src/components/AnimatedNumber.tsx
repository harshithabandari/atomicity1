"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";


interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50% 0px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      // `val` is not a known motion property, but we use it purely for timing.
      // cast to `any` so TypeScript does not complain.
      controls.start({
        val: value,
        transition: { duration },
      } as any);
    }
  }, [inView, value, controls, duration]);

  return (
    <motion.span
      ref={ref}
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
