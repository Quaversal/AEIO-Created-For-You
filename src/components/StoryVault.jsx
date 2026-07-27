import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const PORTRAIT_IMG = "https://media.base44.com/images/public/6a67b5b8cea8c1982f3940ce/939e35d50_generated_103e0413.png";

const STORIES = [
  {
    name: "Amara Okafor",
    role: "Community Leader, Enugu",
    quote:
      "They did not bring us a future. They handed us the tools to build the one we already carried inside.",
    metrics: [
      { label: "Programs Led", value: "14" },
      { label: "Families Reached", value: "320" },
      { label: "Years with AEIO", value: "6" },
    ],
  },
];

export default function StoryVault() {
  const [hovered, setHovered] = useState(false);
  const story = STORIES[0];

  return (
    <section id="stories" className="relative z-10 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 text-center">
          <span className="text-xs tracking-label text-clay">The Story Vault</span>
          <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-forest sm:text-5xl">
            From the many to the one.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-forest/60">
            Behind every number is a name. Hover the portrait to hear her voice.
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
          {/* Fixed portrait */}
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div
              className="heartbeat group relative overflow-hidden rounded-3xl"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Image
                src={PORTRAIT_IMG}
                alt={story.name}
                className="aspect-[4/5] w-full object-cover transition-all duration-500 group-hover:scale-105"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <motion.div
                initial={false}
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <Quote className="h-8 w-8 text-amber" />
                <p className="mt-3 font-heading text-xl italic text-paper">
                  {story.quote}
                </p>
              </motion.div>
            </div>
          </Reveal>

          {/* Scrolling narrative */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="text-xs tracking-label text-clay">{story.role}</span>
              <h3 className="mt-3 font-heading text-4xl font-medium text-forest">
                {story.name}
              </h3>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 text-lg leading-relaxed text-forest/70">
                Amara remembers the day the first library opened in her village.
                Not because of the books — but because for the first time, the
                children could see a horizon beyond the one they were born to.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-4 text-lg leading-relaxed text-forest/70">
                Six years later, she leads fourteen programs across Enugu. She
                trains the mentors she once sat beside as a student. The lattice,
                she says, is not a structure — it is a pulse.
              </p>
            </Reveal>
            <Reveal delay={350}>
              <p className="mt-4 text-lg leading-relaxed text-forest/70">
                "We do not lift communities," she tells the new volunteers each
                season. "We reveal their strength."
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-12 grid grid-cols-3 gap-4">
                {story.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-forest/10 bg-forest/[0.03] p-5 text-center"
                  >
                    <div className="font-heading text-3xl font-semibold text-clay">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs tracking-label text-forest/50">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={550}>
              <div className="mt-10 rounded-2xl border-l-4 border-amber bg-amber/5 p-6">
                <p className="font-heading text-lg italic text-forest">
                  "The lattice is not a structure. It is a pulse."
                </p>
                <p className="mt-2 text-sm text-forest/50">— Amara, Year Six</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}