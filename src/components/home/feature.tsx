import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { FadeIn } from "../ui/fade-in";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Feature({
  title,
  description,
  image,
  index,
}: {
  title: string;
  description: ReactNode;
  image: string;
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useParallax(scrollYProgress, 24);

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center",
        index % 2 === 0
          ? "border-2 shadow-xl rounded-lg bg-card text-card-foreground"
          : "sm:flex-row-reverse"
      )}
      ref={ref}
    >
      <div className="flex justify-center shrink-0">
        <FadeIn from={index % 2 === 0 ? "left" : "right"} delay={0.3}>
          <img src={image} alt={title} className="size-60 sm:size-80" />
        </FadeIn>
      </div>
      <motion.div
        className={cn(
          "space-y-4 sm:space-y-6 text-center sm:text-left px-4 pt-2 pb-10 sm:p-4",
          index % 2 === 1 && "sm:text-right"
        )}
        style={{ y }}
      >
        <h3 className="text-3xl sm:text-4xl font-semibold">{title}</h3>
        <p className="text-balance">{description}</p>
      </motion.div>
    </div>
  );
}
