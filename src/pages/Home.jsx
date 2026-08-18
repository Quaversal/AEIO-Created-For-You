import React from "react";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Reviews from "@/components/Reviews";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
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
          src={"https://drive.usercontent.google.com/download?id=1qTCahO3QWYCFvSy5DUb-dhbBjjr36t9D&export=download&confirm=t&uuid=b3b697aa-afc4-474f-a4be-c499dbb2de59"}
          type="video/mp4"
        />
      </video>
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[850px] bg-gradient-to-b from-iceblue/15 via-iceblue/10 to-[#f7f5f2]" />
      <SiteNav />
      <main className="relative z-10">
        <Hero />
        <Programs />
        <Reviews />
      </main>
      <SiteFooter />
    </div>
  );
}