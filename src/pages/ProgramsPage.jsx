import React from "react";
import SiteNav from "@/components/SiteNav";
import ProgramsDetail from "@/components/ProgramsDetail";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export default function ProgramsPage() {
  return (
    <div className="relative min-h-screen bg-stonebg">
      <SiteNav />
      <main className="relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slatedeep pt-36 pb-20 text-white sm:pt-44 sm:pb-24">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
          <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-iceblue/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-coldstone/40 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <span className="text-xs font-medium tracking-label text-iceblue">Programs</span>
              <h1 className="mt-4 font-heading text-5xl font-semibold leading-tight sm:text-6xl">
                Choose your learning path
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Three ways to learn with AEIO — from one-on-one teaching to full cohorts to fully
                independent study. Explore each in detail below.
              </p>
            </Reveal>
          </div>
        </section>

        <ProgramsDetail />
      </main>
      <SiteFooter />
    </div>
  );
}