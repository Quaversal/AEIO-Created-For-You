import React from "react";
import SiteNav from "@/components/SiteNav";
import ProgramsDetail from "@/components/ProgramsDetail";
import SiteFooter from "@/components/SiteFooter";

export default function ProgramsPage() {
  return (
    <div className="relative min-h-screen bg-[#f7f5f2]">
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[760px] dot-grid opacity-60" />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[760px] bg-gradient-to-b from-white/70 via-iceblue/5 to-transparent" />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[850px] bg-gradient-to-b from-transparent via-transparent to-[#f7f5f2]" />
      <SiteNav />
      <main className="relative z-10 pt-28">
        <ProgramsDetail />
      </main>
      <SiteFooter />
    </div>
  );
}