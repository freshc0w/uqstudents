"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "@/components/ui/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Large } from "@/components/typography";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <Large>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.p>
      </Large>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.95rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-2"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <HoverBorderGradient
      onMouseLeave={() => setActive(null)} // resets the state
      as="nav"
      containerClassName="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] shadow-input dark:shadow-input"
      className="flex justify-between items-center space-x-4 px-8 py-4 dark:bg-black backdrop:blur-md"
    >
      {children}
    </HoverBorderGradient>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  target,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  target?: string;
}) => {
  return (
    <Link
      to={href}
      className="flex space-x-2 hover:bg-accent hover:text-accent-foreground p-4 rounded-md transition-colors duration-200 ease-in-out"
      target={target}
    >
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, className, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className={`text-neutral-700 dark:text-neutral-200 hover:text-black ${className}`}
    >
      {children}
    </Link>
  );
};
