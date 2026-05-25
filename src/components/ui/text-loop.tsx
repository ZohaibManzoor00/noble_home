"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  Transition,
  Variants,
  AnimatePresenceProps,
} from "motion/react";
import { useState, useEffect, useRef, Children } from "react";

export type TextLoopProps = {
  children: React.ReactNode[];
  className?: string;
  transition?: Transition;
  variants?: Variants;
  onIndexChange?: (index: number) => void;
  mode?: AnimatePresenceProps["mode"];
};

export function TextLoop({
  children,
  className,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
  mode = "popLayout",
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hoverTarget = ref.current?.closest("a, button");
    if (!hoverTarget) return;

    const onHover = () => {
      setCurrentIndex((current) => {
        const next = (current + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    };

    hoverTarget.addEventListener("mouseenter", onHover);
    return () => hoverTarget.removeEventListener("mouseenter", onHover);
  }, [items.length, onIndexChange]);

  const motionVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <div
      ref={ref}
      className={cn("relative inline-block whitespace-nowrap", className)}
    >
      <AnimatePresence mode={mode} initial={false}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
