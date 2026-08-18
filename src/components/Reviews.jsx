import React from "react";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
{
  quote:
    "My daughter loves her harp classes. She looks forward to the class each week. We are grateful for such an amazing opportunity to learn this wonderful instrument in our home.",
  name: "Beth D.",
  date: "Jul 30",
  course: "Harp Performance & Technique 102",
  initials: "BD"
},
{
  quote:
    "I appreciate that the instructor really tailor's the lesson to what you want. She also has gone out of her way to make schedule adjustments and send follow-up notes regarding what they worked on. Very personable.",
  name: "Jenny",
  date: "Apr 3",
  course: "Trombone Novice - Entry Level Ages 11-13",
  initials: "JN"
},
{
  quote:
    "The class was a great introduction for our son that is musically inclined. The teacher was detail oriented and allowed the students to interact. The class was structured, engaged and informative. We'd highly recommend the class to others.",
  name: "Kenneth - Sharee P.",
  date: "Feb 26",
  course: "Middle School Drum Pad Level 101",
  initials: "KP"
}];


function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) =>
      <Star key={i} className="h-4 w-4 fill-current" />
      )}
    </div>);

}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-slatedeep py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-label text-gold">testimonials</span>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">Hear from our family

            </h2>
            <div className="mt-4 flex items-center gap-3">
              <Stars />
              <p className="text-white/70">Rated 5.0 by 85+ families</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((t, i) =>
          <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-gold/30" />
                  <Stars />
                </div>
                <blockquote className="mt-4 flex-1 text-foreground/80">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-heading text-sm font-semibold text-gold">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-foreground/55">{t.course}</div>
                    <div className="text-xs text-foreground/40">{t.date}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}