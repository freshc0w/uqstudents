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
  Tag?: React.ElementType;
}
const BlurIn = ({
  word,
  className,
  variant,
  duration = 1,
  children,
  Tag = "h1",
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;
  const MotionTag = motion[Tag as "h1"];

  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(className, "drop-shadow-sm")}
    >
      {word}
      {children}
    </MotionTag>
  );
};

export default BlurIn;
