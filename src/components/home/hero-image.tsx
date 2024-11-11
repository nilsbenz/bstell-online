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
    ["52rem", "56rem"]
  );

  return (
    <div ref={ref} className="relative overflow-clip">
      <div className="max-w-3xl mx-auto w-full px-4 md:px-0">
        <motion.img
          src={articles.src}
          alt="Artikel erfassen"
          className="w-full"
          style={{
            aspectRatio: `${articles.width} / ${articles.height}`,
            y,
          }}
        />
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-8 bg-black rounded-[50%] blur-lg mx-auto translate-y-1/2"
        style={{ opacity, maxWidth }}
      />
    </div>
  );
}
