import React from "react";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote: "My daughter went from dreading math to asking for extra problems. Her teacher actually sees her.",
    name: "Maria L.",
    role: "Parent, Grade 6",
    initials: "ML",
  },
  {
    quote: "The flexibility lets us travel as a family without falling behind. It's the best of both worlds.",
    name: "David & Sun Park",
    role: "Parents, Grades 4 & 9",
    initials: "DP",
  },
  {
    quote: "We got real transcripts and college counseling. My son is headed to his top-choice school.",
    name: "Tasha R.",
    role: "Parent, Grade 12",
    initials: "TR",
  },
];

export default function Testimonials() {
  return (
    <section id="stories" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-label text-primary">Stories</span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Loved by families
            </h2>
            <p className="mt-4 text-foreground/70">Real words from parents who made the switch to AEIO.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <Quote className="h-8 w-8 text-primary/30" />
                <blockquote className="mt-4 flex-1 text-foreground/80">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-heading text-sm font-semibold text-primary">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-foreground/55">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}