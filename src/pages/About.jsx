import React from "react";
import SiteNav from "@/components/SiteNav";
import Approach from "@/components/Approach";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Image } from "@/components/ui/image";

export default function About() {
  return (
    <div className="relative min-h-screen bg-stonebg">
      <SiteNav />
      <main className="relative z-10">
        {/* Hero — quote first */}
        <section className="relative overflow-hidden bg-slatedeep pt-40 pb-28 text-white sm:pt-48 sm:pb-36">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
          <div className="pointer-events-none absolute -top-24 right-10 h-80 w-80 rounded-full bg-iceblue/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-coldstone/40 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <Reveal>
              <p className="font-display text-3xl font-medium leading-snug sm:text-4xl md:text-[2.75rem]">
                "We need to move from a system of education based on industrialism and conformity to
                one based on human flourish and diversity."
              </p>
              <p className="mt-8 text-sm font-medium tracking-label text-iceblue">— Sir Ken Robinson</p>
            </Reveal>
          </div>
        </section>

        {/* Body + image */}
        <section className="bg-stonebg py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <span className="text-xs font-medium tracking-label text-primary">About AEIO</span>
                <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
                  Excited to meet you.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/75">
                  AEIO is in the business of educational services, helping you find the pathway to
                  success. From goal orientation to setting a long-term plan to reach your peak
                  performance, our goal is to help you feel comfortable performing in the field you
                  are working in.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-foreground/75">
                  We believe homeschooling works best when it's personal — so we built a model that
                  bends to the learner, not the other way around.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1503676260728-1c05a053432f?auto=format&fit=crop&w=1200&q=80"
                    alt="A student learning in a calm, focused environment"
                    className="h-[420px] w-full"
                    fittingType="fill"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slatedeep/40 to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Approach />
      </main>
      <SiteFooter />
    </div>
  );
}