import React, { useState, useEffect } from "react";
import SiteNav from "@/components/SiteNav";
import Programs from "@/components/Programs";
import Reviews from "@/components/Reviews";
import SiteFooter from "@/components/SiteFooter";

const FULL_TEXT = "What would you like to build?";

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const [videoIn, setVideoIn] = useState(false);
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 1000);
    const v = setTimeout(() => setVideoIn(true), 100);
    return () => { clearTimeout(t); clearTimeout(v); };
  }, []);

  useEffect(() => {
    if (!revealed) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(id);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 65);
    return () => clearInterval(id);
  }, [revealed]);

  return (
    <div className="relative min-h-screen bg-[#f7f5f2]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute top-0 inset-x-0 h-[760px] w-full object-cover lg:h-[920px]"
        style={{ filter: "blur(2px)", transform: "scale(1.04)" }}
      >
        <source
          src={"https://media.base44.com/videos/public/6a67b5b8cea8c1982f3940ce/9a0f4bc50_DJI_20260602085828_0009_D_3.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[850px] bg-gradient-to-b from-iceblue/15 via-iceblue/10 to-[#f7f5f2] lg:h-[1010px]" />
      <div
        className={`pointer-events-none absolute top-0 inset-x-0 h-[760px] bg-[#f7f5f2] transition-opacity duration-1000 ease-out lg:h-[920px] ${videoIn ? "opacity-0" : "opacity-100"}`}
      />

      <section className="relative flex h-[760px] items-center justify-center px-6 text-center lg:h-[920px]">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl">
          {typed}
          {revealed && showCursor && <span className="ml-1 inline-block animate-pulse text-gold">|</span>}
        </h1>
      </section>

      <div
        className={`relative transition-opacity duration-1000 ease-out ${revealed ? "opacity-100" : "opacity-0"}`}
      >
        <SiteNav />
        <main className="relative z-10">
          <Programs />
          <Reviews />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}