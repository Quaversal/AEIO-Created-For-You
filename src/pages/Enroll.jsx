import React from "react";
import SiteNav from "@/components/SiteNav";
import Enrollment from "@/components/Enrollment";
import SiteFooter from "@/components/SiteFooter";

export default function Enroll() {
  return (
    <div className="relative min-h-screen bg-[#f7f5f2]">
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[520px] bg-gradient-to-b from-iceblue/25 via-iceblue/10 to-[#f7f5f2]" />
      <SiteNav />
      <main className="relative z-10 pt-28">
        <Enrollment />
      </main>
      <SiteFooter />
    </div>
  );
}