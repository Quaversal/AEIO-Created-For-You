import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, GraduationCap, Compass, Check, Clock, Users, Target, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const TABS = [
  {
    key: "private",
    label: "Private Lessons",
    icon: User,
    tagline: "One-on-one, live instruction",
    desc: "Work directly with a certified educator in focused, personalized sessions tailored entirely to your learner's pace, goals, and interests. Every lesson is built around your child — no two plans are alike.",
    includes: [
      "1:1 live sessions with a certified teacher",
      "Fully customized lesson plans updated weekly",
      "Flexible scheduling around your family's routine",
      "Direct, ongoing parent–teacher feedback channel",
      "Progress tracking and monthly learning reports",
    ],
    format: { icon: Users, label: "Format", value: "Live, one-on-one · 45–60 min sessions" },
    cadence: { icon: Clock, label: "Cadence", value: "Weekly or bi-weekly — you choose" },
    bestFor: { icon: Target, label: "Best for", value: "Students needing personalized attention, acceleration, or catch-up support" },
    pricing: "Starting at $60 / session",
  },
  {
    key: "full",
    label: "Full Courses",
    icon: GraduationCap,
    tagline: "Fixed schedule, accredited curriculum",
    desc: "Join a structured cohort with live classes, graded assignments, and official transcripts. A complete academic experience with classmates, teachers, and the accountability of a real school calendar.",
    includes: [
      "Live cohort classes with classmates",
      "Accredited coursework and official transcripts",
      "Graded assignments and progress reports",
      "College prep and counseling included",
      "Semester-based calendar with set start dates",
    ],
    format: { icon: Users, label: "Format", value: "Live cohort · 2–4 classes per week" },
    cadence: { icon: Clock, label: "Cadence", value: "Semester-based, fixed schedule" },
    bestFor: { icon: Target, label: "Best for", value: "Families wanting structure, community, and a recognized academic record" },
    pricing: "Starting at $1,200 / semester",
  },
  {
    key: "self-paced",
    label: "Self-Paced Programs",
    icon: Compass,
    tagline: "Learn independently, on your time",
    desc: "Move through rich, guided materials at your own speed. Perfect for motivated learners and families who need maximum flexibility — learn anytime, anywhere, with built-in checks to keep momentum.",
    includes: [
      "On-demand video lessons and resources",
      "No fixed schedule — learn anytime, anywhere",
      "Built-in mastery checks and achievement badges",
      "Ideal for travel and shifting routines",
      "Optional weekly check-ins with an advisor",
    ],
    format: { icon: Users, label: "Format", value: "Asynchronous, on-demand · self-guided" },
    cadence: { icon: Clock, label: "Cadence", value: "Go at your own pace" },
    bestFor: { icon: Target, label: "Best for", value: "Motivated, independent learners and highly mobile families" },
    pricing: "Starting at $120 / month",
  },
];

export default function ProgramsDetail() {
  const [active, setActive] = useState("private");
  const navigate = useNavigate();
  const current = TABS.find((t) => t.key === active);

  return (
    <section id="programs" className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-label text-primary">Programs</span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Choose your learning path
            </h2>
            <p className="mt-4 text-foreground/70">
              Three ways to learn with AEIO — from one-on-one teaching to full cohorts to fully
              independent study. Explore each in detail below.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-6 lg:grid-cols-[320px_1fr]">
            {/* Vertical tabs */}
            <div className="flex flex-col gap-3">
              {TABS.map((t) => {
                const isActive = t.key === active;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-lg"
                        : "border-border bg-card text-foreground hover:border-primary/40 hover:shadow-sm"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        isActive ? "bg-primary-foreground/15 text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <t.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-heading text-lg font-semibold">{t.label}</div>
                      <div className={`text-xs ${isActive ? "text-primary-foreground/80" : "text-foreground/55"}`}>
                        {t.tagline}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active tab content */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <current.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">{current.label}</h3>
                  <p className="text-xs font-medium tracking-label text-primary/70">{current.tagline}</p>
                </div>
              </div>
              <p className="mt-5 text-foreground/75">{current.desc}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[current.format, current.cadence, current.bestFor].map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-stonebg p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <m.icon className="h-4 w-4" />
                      <span className="text-xs font-medium tracking-label">{m.label}</span>
                    </div>
                    <p className="mt-2 text-sm text-foreground/75">{m.value}</p>
                  </div>
                ))}
              </div>

              <h4 className="mt-7 text-xs font-semibold tracking-label text-foreground/50">What's included</h4>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {current.includes.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
                <div>
                  <div className="text-xs font-medium tracking-label text-foreground/50">Pricing</div>
                  <div className="font-heading text-xl font-semibold text-foreground">{current.pricing}</div>
                </div>
                <button
                  onClick={() => navigate("/enroll")}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Enroll in {current.label} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}