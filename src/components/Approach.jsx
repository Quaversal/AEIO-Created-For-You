import React from "react";
import { Target, UserCheck, CalendarClock, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";
import ImpactCounter from "./ImpactCounter";

const PILLARS = [
  { icon: Target, title: "Personalized curriculum", desc: "Every learner gets a path built around their level, interests, and goals — not a one-size template." },
  { icon: UserCheck, title: "Certified educators", desc: "Licensed teachers with real classroom experience guide each subject, one student at a time." },
  { icon: CalendarClock, title: "Flexible schedule", desc: "Learn on a rhythm that fits your family — asynchronous core, live support, year-round starts." },
  { icon: HeartHandshake, title: "Holistic growth", desc: "We tend to character, wellbeing, and curiosity as carefully as we tend to academics." },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-mist/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-xs font-medium tracking-label text-primary">Our Approach</span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Why families choose AEIO
            </h2>
            <p className="mt-4 text-foreground/70">
              We believe homeschooling works best when it's personal. So we built a model that bends to
              the child — not the other way around.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <ImpactCounter target={2400} suffix="+" label="Active learners" />
              <ImpactCounter target={98} suffix="%" label="Parent satisfaction" />
              <ImpactCounter target={45} suffix="+" label="Certified educators" />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-foreground/65">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}