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
          <h1 className="mt-3 font-semibold text-foreground [font-family:'DM_Sans',_sans-serif] text-6xl sm:text-6xl">Excited to meet you! 

          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70">AEIO is in the business of educational services, helping you find the pathway to success. From goal orientation to setting a long term plan to reach your peak performance, our goal is to help you feel comfortable performing in the field you are working in.


          </p>
        </section>
        <Approach />
      </main>
      <SiteFooter />
    </div>);

}