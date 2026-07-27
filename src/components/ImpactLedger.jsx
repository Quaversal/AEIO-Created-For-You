import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const BOOKS_IMG = "https://media.base44.com/images/public/6a67b5b8cea8c1982f3940ce/8e275f44b_generated_32a4e567.png";

// The Impact Ledger — transparency hub. Financial threads connect donations to outcomes.
const THREADS = [
  { amount: 10, outcome: "1 Library Book", color: "#D45D31" },
  { amount: 25, outcome: "A Month of Nutrition", color: "#FFB703" },
  { amount: 50, outcome: "School Supplies for 5", color: "#1B4332" },
  { amount: 100, outcome: "A Mentorship Cycle", color: "#D45D31" },
  { amount: 250, outcome: "A Community Workshop", color: "#FFB703" },
  { amount: 500, outcome: "Clean Water Access Point", color: "#1B4332" },
];

export default function ImpactLedger() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section id="ledger" className="relative z-10 bg-forest py-28 texture-weave sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <span className="text-xs tracking-label text-amber">The Impact Ledger</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-medium leading-tight text-paper sm:text-5xl">
            Every dollar traced to a human outcome.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/60">
            Scroll sideways through the financial threads. Watch each contribution
            land — not in a report, but in a hand, a book, a classroom.
          </p>
        </Reveal>
      </div>

      {/* Horizontal scroll ledger */}
      <div ref={sectionRef} className="mt-16 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-6">
          {THREADS.map((t, i) => (
            <div
              key={i}
              className="relative flex h-80 w-72 flex-shrink-0 flex-col justify-between rounded-2xl bg-paper p-8"
            >
              {/* Thread visualization */}
              <svg className="absolute right-6 top-0 h-40 w-32" viewBox="0 0 100 120">
                <path
                  d={`M 50 0 Q ${i % 2 === 0 ? 20 : 80} 40, 50 60 T 50 120`}
                  fill="none"
                  stroke={t.color}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
                <circle cx="50" cy="60" r="4" fill={t.color} />
              </svg>

              <div>
                <span className="text-xs tracking-label text-clay">Thread 0{i + 1}</span>
                <div className="mt-3 font-heading text-5xl font-semibold text-forest">
                  <span className="text-amber">$</span>
                  {t.amount}
                </div>
              </div>

              <div className="relative z-10">
                <div className="h-px w-full bg-forest/10" />
                <p className="mt-4 font-heading text-xl text-forest">{t.outcome}</p>
                <p className="mt-1 text-sm text-forest/50">
                  Traced, verified, delivered.
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={BOOKS_IMG}
              alt="A child's hands opening a new book"
              className="aspect-[16/7] w-full object-cover"
              fittingType="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-16">
              <span className="text-xs tracking-label text-amber">Verified Outcome</span>
              <p className="mt-3 max-w-md font-heading text-2xl font-medium text-paper sm:text-3xl">
                2,418 books delivered this year — each one opened by a hand, not a statistic.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}