import React from "react";
import SiteNav from "@/components/SiteNav";
import Enrollment from "@/components/Enrollment";
import SiteFooter from "@/components/SiteFooter";

export default function Enroll() {
  return (
    <div className="relative min-h-screen bg-[#BFE4EE]">
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-[760px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.base44.com/images/public/6a67b5b8cea8c1982f3940ce/f4b9080d5_image.png')",
          filter: "blur(3px)",
          transform: "scale(1.06)",
        }}
      />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[850px] bg-gradient-to-b from-iceblue/15 via-iceblue/10 to-[#BFE4EE]" />
      <SiteNav />
      <main className="relative z-10 pt-20">
        <Enrollment />
      </main>
      <SiteFooter />
    </div>
  );
}