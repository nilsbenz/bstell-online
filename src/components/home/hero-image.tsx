import articles from "@/assets/images/articles.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroImage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 800,
    damping: 80,
  });
  const y = useTransform(scrollYProgressSpring, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgressSpring, [0, 1], [0.2, 0.4]);
  const maxWidth = useTransform(
    scrollYProgressSpring,
    [0, 1],
    ["52rem", "56rem"],
  );

  return (
    <div ref={ref} className="relative overflow-clip">
      <div className="mx-auto w-full max-w-3xl px-4 md:px-0">
        <motion.img
          src={articles.src}
          alt="«Bstell online» ist ein preiswertes und einfach zu bedienendes Bestellsystem für Vereine."
          className="w-full"
          style={{
            aspectRatio: `${articles.width} / ${articles.height}`,
            y,
          }}
        />
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 mx-auto h-8 translate-y-1/2 rounded-[50%] bg-black blur-lg"
        style={{ opacity, maxWidth }}
      />
    </div>
  );
}
