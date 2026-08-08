import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, GraduationCap, Compass, Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const TABS = [
{
  key: "private",
  label: "Private Lessons",
  icon: User,
  tagline: "One-on-one, live instruction",
  desc: "Work directly with a certified educator in focused, personalized sessions tailored to your learner's pace, goals, and interests.",
  features: [
  "1:1 live sessions with certified teachers",
  "Fully customized lesson plans",
  "Flexible scheduling around your family",
  "Direct, ongoing parent-teacher feedback"]

},
{
  key: "full",
  label: "Full Courses",
  icon: GraduationCap,
  tagline: "Fixed schedule, accredited curriculum",
  desc: "Join a structured course with live classes, assignments, and transcripts — a complete academic experience with peer connection.",
  features: [
  "Live cohort classes with classmates",
  "Accredited coursework and transcripts",
  "Graded assignments and progress reports",
  "College prep and counseling included"]

},
{
  key: "self-paced",
  label: "Self-Paced Programs",
  icon: Compass,
  tagline: "Learn independently, on your time",
  desc: "Move through rich, guided materials at your own speed — perfect for motivated learners and families who need maximum flexibility.",
  features: [
  "On-demand lessons and resources",
  "No fixed schedule — learn anytime",
  "Built-in checks and mastery badges",
  "Ideal for travel and shifting routines"]

}];


const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export default function Programs() {
  const [active, setActive] = useState("private");
  const navigate = useNavigate();
  const current = TABS.find((t) => t.key === active);

  return (
    <section id="programs" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-label text-primary">Programs</span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">Everyone's a learner at heart

            </h2>
            <p className="mt-4 text-foreground/70">With our faculty ranging from PhD professors to accredited elementary school teachers, you'll find just what you're looking for below.


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
                    isActive ?
                    "border-primary bg-primary text-primary-foreground shadow-lg" :
                    "border-border bg-card text-foreground hover:border-primary/40 hover:shadow-sm"}`
                    }>
                    
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      isActive ? "bg-primary-foreground/15 text-primary-foreground" : "bg-primary/10 text-primary"}`
                      }>
                      
                      <t.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-heading text-lg font-semibold">{t.label}</div>
                      <div className={`text-xs ${isActive ? "text-primary-foreground/80" : "text-foreground/55"}`}>
                        {t.tagline}
                      </div>
                    </div>
                  </button>);

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
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.features.map((f) =>
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    {f}
                  </li>
                )}
              </ul>
              <button
                onClick={() => navigate("/enroll")}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                
                Enroll in {current.label} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("/enroll")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3">
              
              Not sure which fits? Let's find out <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>);

}