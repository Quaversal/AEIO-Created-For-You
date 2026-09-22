import React from "react";
import SiteNav from "@/components/SiteNav";
import Enrollment from "@/components/Enrollment";
import SiteFooter from "@/components/SiteFooter";

export default function Enroll() {
  return (
    <div className="relative min-h-screen bg-[#f7f5f2]">
      <SiteNav />
      <main className="relative z-10 pt-28">
        <Enrollment />
      </main>
      <SiteFooter />
    </div>
  );
}