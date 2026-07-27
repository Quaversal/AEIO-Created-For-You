import React from "react";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Reveal from "./Reveal";

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

const PLAN = [
{ s: "Math — fractions", v: "Live 10:00" },
{ s: "Reading — folk tales", v: "Async" },
{ s: "Science — plant life", v: "Project" },
{ s: "Art — watercolor", v: "Fri 14:00" }];


export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute top-44 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium tracking-label text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Personalized homeschool education
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
                Homeschooling, <span className="text-primary">reimagined</span> for every learner.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-lg text-lg text-foreground/70">
                AEIO blends certified educators, flexible schedules, and a curriculum tailored to your
                child — so learning happens at their pace, in their way, with you at the center.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("#enroll")}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90">
                  
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollTo("#programs")}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40">
                  
                  Explore Programs
                </button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["AM", "JL", "RK", "TS"].map((x) =>
                  <span
                    key={x}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-primary/15 text-xs font-semibold text-primary">
                    
                      {x}
                    </span>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) =>
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    )}
                  </div>
                  <span className="text-xs text-foreground/60">Loved by 85+</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 -rotate-2 rounded-[2rem] bg-gradient-to-br from-primary/15 to-accent/20 blur-2xl" />
              <div className="relative rounded-3xl border border-border bg-card p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs tracking-label text-foreground/50">This week</div>
                    <div className="font-heading text-lg font-semibold text-foreground">Maya's Learning Plan</div>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Grade 4</span>
                </div>
                <div className="mt-5 space-y-3">
                  {PLAN.map((row) =>
                  <div key={row.s} className="flex items-center justify-between rounded-xl bg-stonebg px-4 py-3">
                      <span className="text-sm font-medium text-foreground/80">{row.s}</span>
                      <span className="text-xs font-medium text-foreground/55">{row.v}</span>
                    </div>
                  )}
                </div>
                <div className="mt-5 flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-primary-foreground">
                  <span className="text-xs font-medium tracking-label">Weekly progress</span>
                  <span className="font-heading text-lg font-semibold">86%</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}