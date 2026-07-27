import React from "react";
import GoldenThread from "@/components/GoldenThread";
import VeilNav from "@/components/VeilNav";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ImpactLedger from "@/components/ImpactLedger";
import StoryVault from "@/components/StoryVault";
import ContributionEngine from "@/components/ContributionEngine";
import LatticeFooter from "@/components/LatticeFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-paper">
      <GoldenThread />
      <VeilNav />
      <main className="relative z-10">
        <Hero />
        <Mission />
        <ImpactLedger />
        <StoryVault />
        <ContributionEngine />
        <LatticeFooter />
      </main>
    </div>
  );
}