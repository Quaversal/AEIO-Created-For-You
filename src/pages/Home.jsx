import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
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
  const [showArrow, setShowArrow] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

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
        setTypingDone(true);
        setTimeout(() => setShowCursor(false), 1000);
        setTimeout(() => setShowArrow(true), 3000);
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
          {typingDone ? (
            <>
              What would you like to{" "}
              <span className="relative inline-block">
                build
                <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-gold underline-swoosh sm:-bottom-2" />
              </span>
              ?
            </>
          ) : (
            typed
          )}
          {revealed && showCursor && <span className="ml-1 inline-block animate-pulse text-gold">|</span>}
        </h1>

        {showArrow && (
          <button
            onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce transition hover:text-amber-300"
            aria-label="Scroll to content"
          >
            <ChevronDown className="h-10 w-10" strokeWidth={2.5} />
          </button>
        )}
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