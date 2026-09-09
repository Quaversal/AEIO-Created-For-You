import React, { useState } from "react";
import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const COMPASS_URL = "https://compass.aeiocreatedforyou.org";

export default function Programs() {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer.trim()) return;
    window.open(COMPASS_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="programs" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              We create the building blocks you don't see...
            </h2>
            <p className="mt-4 text-foreground/70">
              We provide fully customizable learning experiences tailored to YOU. Get started by taking our AEIO Compass survey below!
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="mt-14 mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Compass className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">AEIO Compass</h3>
                <p className="text-xs font-medium tracking-label text-primary/70">Start your survey</p>
              </div>
            </div>
            <p className="mt-5 text-foreground/75">
              Tell us a little about what you're looking for... (self-paced classwork, artist development, college prep, etc.)
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="flex-1 rounded-xl border border-input bg-stonebg px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                disabled={!answer.trim()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Submit <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-foreground/70">
            Not sure what you're looking for?{" "}
            <Link to="/programs" className="font-semibold text-primary underline-offset-4 hover:underline">
              Check out our programs page
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}