import React from "react";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import Enrollment from "@/components/Enrollment";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-stonebg">
      <SiteNav />
      <main>
        <Hero />
        <Programs />
        <Approach />
        <Testimonials />
        <Enrollment />
      </main>
      <SiteFooter />
    </div>
  );
}