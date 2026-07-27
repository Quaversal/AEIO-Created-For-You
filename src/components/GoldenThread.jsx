import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// The "Golden Thread" — a continuous SVG path weaving through the background,
// symbolizing the interconnectedness of every individual.
export default function GoldenThread({ glow = false }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0.5, 0.6, 0.6, 0.3]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ y, opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 4000"
        preserveAspectRatio="xMidYMin slice"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M-50,120 C 200,80 380,260 620,200 S 980,60 1200,240 1500,180 1600,300 C 1400,500 1000,420 760,640 S 300,720 60,880 C 320,1040 700,960 980,1180 S 1400,1280 1500,1480 C 1200,1640 800,1560 520,1760 S 120,1880 -50,2080 C 260,2260 680,2200 940,2400 S 1380,2500 1500,2720 C 1180,2900 720,2820 460,3040 S 80,3180 -50,3400 C 300,3600 760,3520 1020,3740 S 1440,3840 1500,4000"
          fill="none"
          stroke={glow ? "#FFB703" : "#D45D31"}
          strokeWidth="1.5"
          strokeDasharray="6 10"
          className="thread-path"
          opacity="0.35"
        />
        <path
          d="M-50,400 C 300,300 600,560 900,420 S 1300,300 1500,520 C 1200,720 700,640 400,880 S 0,960 -50,1160 C 300,1340 760,1240 1040,1460 S 1420,1600 1500,1800 C 1140,1980 640,1900 360,2140 S 60,2300 -50,2520 C 340,2720 840,2620 1120,2860 S 1440,2980 1500,3200 C 1160,3380 680,3300 420,3540 S 100,3700 -50,3900"
          fill="none"
          stroke="#1B4332"
          strokeWidth="1"
          opacity="0.18"
        />
      </svg>
    </motion.div>
  );
}