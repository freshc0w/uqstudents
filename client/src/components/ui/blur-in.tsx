import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import React from "react";

interface BlurIntProps {
  word?: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  children?: React.ReactNode;
}
const BlurIn = ({ word, className, variant, duration = 1, children }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "drop-shadow-sm",
      )}
    >
      {word}
      {children}
    </motion.h1>
  );
};

export default BlurIn;
