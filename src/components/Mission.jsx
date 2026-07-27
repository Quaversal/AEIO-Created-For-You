import React from "react";
import { Image } from "@/components/ui/image";
import { Sprout, Eye, Handshake } from "lucide-react";
import Reveal from "./Reveal";

const MISSION_IMG = "https://media.base44.com/images/public/6a67b5b8cea8c1982f3940ce/5373e7827_generated_fe7f87ee.png";

const PILLARS = [
  {
    icon: Sprout,
    title: "Rooted Growth",
    body: "We plant alongside communities, not above them. Every initiative begins with local hands and local vision.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    body: "Every dollar is traced from your hand to a human outcome. No black boxes. No buried ledgers.",
  },
  {
    icon: Handshake,
    title: "The Lattice",
    body: "No individual stands alone. Each thread strengthens the whole — donor, volunteer, and community as one.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="relative z-10 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="text-xs tracking-label text-clay">Our Mission</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-forest sm:text-5xl">
                A monument to impact, not a brochure of intent.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-forest/70">
                AEIO exists at the intersection of earth and aspiration. We curate
                immersive experiences and rigorous human-development plans that
                empower individuals to perform at their best — through expanded
                thinking and a truly unique perspective.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 text-lg leading-relaxed text-forest/70">
                The name means <span className="font-medium text-clay">All Every Individual One</span> —
                a reminder that scale never dilutes dignity. We move from the many
                to the one, and back again.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={400 + i * 100}>
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-medium text-forest">{p.title}</h3>
                      <p className="mt-1 text-forest/60">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={MISSION_IMG}
                alt="Hands working together in a sunlit community garden"
                className="aspect-[4/5] w-full object-cover"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-amber/95 p-6 shadow-xl sm:block">
              <div className="font-heading text-3xl font-semibold text-forest">12</div>
              <div className="text-xs tracking-label text-forest/70">Active Programs</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}