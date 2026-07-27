import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { ArrowDown } from "lucide-react";
import ImpactCounter from "./ImpactCounter";
import Reveal from "./Reveal";

const HERO_IMG = "https://media.base44.com/images/public/6a67b5b8cea8c1982f3940ce/be6138ec2_generated_7544edf0.png";

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="nexus" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="A Nigerian community in motion during golden hour"
          className="h-full w-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/30 to-paper" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/10 px-4 py-1.5 text-xs tracking-label text-paper backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            All · Every · Individual · One
          </span>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="mt-6 max-w-4xl font-heading text-5xl font-medium leading-[1.05] text-paper sm:text-7xl lg:text-8xl">
            We do not lift{" "}
            <button
              onClick={() => scrollTo("#stories")}
              className="text-amber underline decoration-amber/40 decoration-2 underline-offset-8 transition-all hover:decoration-amber"
            >
              communities
            </button>
            .
            <br />
            We{" "}
            <button
              onClick={() => scrollTo("#mission")}
              className="text-amber underline decoration-amber/40 decoration-2 underline-offset-8 transition-all hover:decoration-amber"
            >
              reveal
            </button>{" "}
            their strength.
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/80 sm:text-xl">
            AEIO is a human lattice — a living ecosystem of empowerment, systemic
            transparency, and the profound beauty of collective human potential.
          </p>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("#contribute")}
              className="impact-pulse group relative overflow-hidden rounded-full bg-clay px-8 py-4 text-base font-medium text-paper transition-transform hover:scale-[1.03]"
            >
              <span className="relative z-10">Join the Lattice</span>
            </button>
            <button
              onClick={() => scrollTo("#ledger")}
              className="rounded-full border border-paper/40 px-8 py-4 text-base text-paper transition-colors hover:bg-paper/10"
            >
              See the Impact
            </button>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-paper/15 pt-8 sm:grid-cols-3">
            <ImpactCounter target={1284} label="Lives Touched" />
            <ImpactCounter target={37} label="Communities Served" />
            <div className="col-span-2 text-center sm:col-span-1">
              <div className="font-heading text-4xl font-semibold text-clay sm:text-5xl">
                <span className="text-amber">$</span>0
              </div>
              <div className="mt-2 text-xs tracking-label text-forest/60">Wasted on Overhead</div>
            </div>
          </div>
        </Reveal>
      </div>

      <motion.button
        onClick={() => scrollTo("#mission")}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-paper/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs tracking-label">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}