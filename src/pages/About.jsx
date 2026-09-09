import React from "react";
import SiteNav from "@/components/SiteNav";
import Approach from "@/components/Approach";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <div className="relative min-h-screen bg-stonebg">
      <SiteNav />
      <main className="relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slatedeep pt-36 pb-24 text-white sm:pt-44 sm:pb-32">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
          <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-iceblue/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-coldstone/40 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <span className="text-xs font-medium tracking-label text-iceblue">About AEIO</span>
              <h1 className="mt-4 font-heading text-5xl font-semibold leading-tight sm:text-6xl">
                Excited to meet you.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                AEIO is in the business of educational services, helping you find the pathway to
                success. From goal orientation to setting a long-term plan to reach your peak
                performance, our goal is to help you feel comfortable performing in the field you
                are working in.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Mission band */}
        <section className="border-b border-border bg-card py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <Reveal>
              <p className="font-display text-2xl font-medium leading-relaxed text-foreground/80 sm:text-3xl">
                "We believe education should bend to the learner — not the other way around."
              </p>
              <p className="mt-6 text-sm font-medium tracking-label text-primary">— The AEIO Team</p>
            </Reveal>
          </div>
        </section>

        <Approach />
      </main>
      <SiteFooter />
    </div>
  );
}