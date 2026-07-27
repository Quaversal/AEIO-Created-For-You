import React from "react";
import SiteNav from "@/components/SiteNav";
import Approach from "@/components/Approach";
import SiteFooter from "@/components/SiteFooter";

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#BFE4EE]">
      <SiteNav />
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pt-36 pb-8">
          <span className="text-xs font-medium tracking-label text-primary">About AEIO</span>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-foreground sm:text-5xl">
            Personalized homeschooling, built around your child.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70">
            AEIO blends certified educators, flexible schedules, and a curriculum tailored to each
            learner — so education happens at their pace, in their way, with family at the center.
          </p>
        </section>
        <Approach />
      </main>
      <SiteFooter />
    </div>
  );
}