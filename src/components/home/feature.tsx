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
        "flex flex-col items-center sm:flex-row",
        index % 2 === 0
          ? "rounded-lg border-2 bg-card text-card-foreground shadow-xl"
          : "sm:flex-row-reverse",
      )}
      ref={ref}
    >
      <div className="flex shrink-0 justify-center">
        <FadeIn from={index % 2 === 0 ? "left" : "right"} delay={0.3}>
          <img
            src={image}
            alt={`«Bstell online» Dokumentation – ${title}`}
            className="size-60 sm:size-80"
          />
        </FadeIn>
      </div>
      <motion.div
        className={cn(
          "space-y-4 px-4 pb-10 pt-2 text-center sm:space-y-6 sm:p-4 sm:text-left",
          index % 2 === 1 && "sm:text-right",
        )}
        style={{ y }}
      >
        <h3 className="text-3xl font-semibold sm:text-4xl">{title}</h3>
        <p className="text-balance">{description}</p>
      </motion.div>
    </div>
  );
}
