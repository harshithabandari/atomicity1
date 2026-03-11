"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        val: value,
        transition: { duration },
      });
    }
  }, [inView, value, controls, duration]);

  return (
    <motion.span
      ref={ref}
      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-600 dark:text-indigo-400"
      initial={{ val: 0 }}
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
