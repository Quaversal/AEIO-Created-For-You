import React, { useState, useEffect } from "react";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Reviews from "@/components/Reviews";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const [videoIn, setVideoIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 3000);
    const v = setTimeout(() => setVideoIn(true), 100);
    return () => { clearTimeout(t); clearTimeout(v); };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f7f5f2]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute top-0 inset-x-0 h-[760px] w-full object-cover"
        style={{ filter: "blur(2px)", transform: "scale(1.04)" }}
      >
        <source
          src={"https://media.base44.com/videos/public/6a67b5b8cea8c1982f3940ce/9a0f4bc50_DJI_20260602085828_0009_D_3.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[850px] bg-gradient-to-b from-iceblue/15 via-iceblue/10 to-[#f7f5f2]" />
      <div
        className={`pointer-events-none absolute top-0 inset-x-0 h-[760px] bg-[#f7f5f2] transition-opacity duration-1000 ease-out ${videoIn ? "opacity-0" : "opacity-100"}`}
      />
      <div
        className={`relative transition-opacity duration-1000 ease-out ${revealed ? "opacity-100" : "opacity-0"}`}
      >
        <SiteNav />
        <main className="relative z-10">
          <Hero />
          <Programs />
          <Reviews />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}