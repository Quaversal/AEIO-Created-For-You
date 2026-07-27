import React from "react";
import { BookOpen, Compass, Mountain, Palette, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const PROGRAMS = [
  { icon: BookOpen, name: "Elementary", grades: "Grades K–5", desc: "Foundational literacy, numeracy, and curiosity-driven exploration with gentle, attentive guidance." },
  { icon: Compass, name: "Middle School", grades: "Grades 6–8", desc: "Critical thinking and project-based learning that helps students find their voice and direction." },
  { icon: Mountain, name: "High School", grades: "Grades 9–12", desc: "Accredited coursework, college prep, and transcripts that open doors to whatever's next." },
  { icon: Palette, name: "Enrichment", grades: "All ages", desc: "Electives from coding to creative writing, music, and beyond — learning that feels like play." },
];

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export default function Programs() {
  return (
    <section id="programs" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-label text-primary">Programs</span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              A path for every learner
            </h2>
            <p className="mt-4 text-foreground/70">
              From first phonics to college applications, our programs adapt to each child's pace,
              passions, and potential.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="text-xs font-medium tracking-label text-primary/70">{p.grades}</p>
                <p className="mt-3 text-sm text-foreground/65">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <button
              onClick={() => scrollTo("#enroll")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              Not sure which fits? Let's find out <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}