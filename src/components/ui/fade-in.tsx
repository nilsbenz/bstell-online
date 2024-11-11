import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import React from "react";

const FadeIn = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div"> & {
    children?: ReactNode;
    delay?: number;
    duration?: number;
    from?: "top" | "bottom" | "left" | "right";
  }
>(
  (
    {
      variants,
      initial = "hidden",
      whileInView = "visible",
      viewport = { once: true },
      transition,
      children,
      delay = 0.2,
      duration = 0.8,
      from = "bottom",
      ...props
    },
    ref
  ) => (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          ...(from === "bottom"
            ? { y: 16 }
            : from === "top"
              ? { y: -16 }
              : from === "left"
                ? { x: -24 }
                : { x: 24 }),
        },
        visible: { opacity: 1, y: 0, x: 0 },
        ...variants,
      }}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={{ delay, type: "spring", duration, ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  )
);
FadeIn.displayName = "FadeIn";

export { FadeIn };
