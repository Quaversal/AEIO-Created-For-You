import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";
import Reveal from "./Reveal";

const GRADES = ["Elementary", "Middle School", "High School", "Other"];

export default function Enrollment() {
  const { toast } = useToast();
  const [form, setForm] = useState({ parent_name: "", email: "", student_grade: "Elementary", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await base44.entities.Enquiry.create(form);
      setDone(true);
      toast({ title: "Inquiry received", description: "Our team will reach out within one business day." });
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please try again in a moment.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enroll" className="relative overflow-hidden bg-slatedeep py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-iceblue/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-coldstone/30 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-medium tracking-label text-iceblue">Enroll</span>
            <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">Begin your child's journey</h2>
            <p className="mt-4 max-w-md text-white/85">
              Tell us a little about your learner. An advisor will follow up with program recommendations,
              scheduling options, and next steps.
            </p>
            <ul className="mt-8 space-y-3">
              {["No commitment to explore", "Personalized program match", "Flexible start dates year-round"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-iceblue/20">
                    <Check className="h-3 w-3 text-iceblue" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/25 bg-white/10 p-6 shadow-2xl shadow-black/40 ring-1 ring-black/5 backdrop-blur sm:p-8">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-iceblue/20">
                      <Check className="h-7 w-7 text-iceblue" />
                    </span>
                    <h3 className="mt-4 font-heading text-2xl font-semibold">Thank you!</h3>
                    <p className="mt-2 max-w-xs text-white/85">
                      We've received your inquiry and will be in touch within one business day.
                    </p>
                    <button
                      onClick={() => {
                        setDone(false);
                        setForm({ parent_name: "", email: "", student_grade: "Elementary", message: "" });
                      }}
                      className="mt-6 rounded-xl border border-white/20 px-5 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10"
                    >
                      Submit another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={submit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="text-xs font-medium tracking-label text-white/80">Parent / Guardian Name</label>
                      <input
                        required
                        value={form.parent_name}
                        onChange={(e) => update("parent_name", e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-iceblue"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium tracking-label text-white/80">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-iceblue"
                        placeholder="jane@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium tracking-label text-white/80">Student Grade Level</label>
                      <select
                        value={form.student_grade}
                        onChange={(e) => update("student_grade", e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none focus:border-iceblue"
                      >
                        {GRADES.map((g) => (
                          <option key={g} value={g} className="bg-slatedeep text-white">
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium tracking-label text-white/80">Message (optional)</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        rows={3}
                        className="mt-1.5 w-full resize-none rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-iceblue"
                        placeholder="Tell us about your learner's interests and goals."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-iceblue px-5 py-3 text-sm font-semibold text-slatedeep transition hover:bg-iceblue/90 disabled:opacity-60"
                    >
                      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                      {loading ? "Sending..." : "Request Info"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}