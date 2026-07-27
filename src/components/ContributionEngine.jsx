import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@/components/ui/image";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";
import { Check, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

const BG_IMG = "https://media.base44.com/images/public/6a67b5b8cea8c1982f3940ce/a8a14ce7c_generated_be57bff6.png";

const AREAS = [
  { key: "Education", icon: "📚", desc: "Books, supplies, mentorship" },
  { key: "Nutrition", icon: "🌾", desc: "Monthly sustenance programs" },
  { key: "Protection", icon: "🛡️", desc: "Safe spaces and advocacy" },
  { key: "Community", icon: "🤝", desc: "Workshops and infrastructure" },
];

const PRESETS = [25, 50, 100, 250];

export default function ContributionEngine() {
  const { toast } = useToast();
  const [area, setArea] = useState("Education");
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const finalAmount = custom ? parseInt(custom) : amount;

  const submit = async (e) => {
    e.preventDefault();
    if (!name || !email || !finalAmount) return;
    setLoading(true);
    try {
      await base44.entities.Donation.create({
        donor_name: name,
        email,
        amount: finalAmount,
        impact_area: area,
      });
      setDone(true);
      toast({
        title: "Your thread joins the lattice.",
        description: `$${finalAmount} toward ${area}. Thank you, ${name.split(" ")[0]}.`,
      });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setDone(false);
    setName("");
    setEmail("");
    setCustom("");
    setAmount(50);
  };

  return (
    <section id="contribute" className="relative z-10 overflow-hidden bg-forest py-28 sm:py-40">
      <div className="absolute inset-0">
        <Image src={BG_IMG} alt="" className="h-full w-full object-cover opacity-30" fittingType="fill" />
        <div className="absolute inset-0 bg-forest/60 texture-weave" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="text-xs tracking-label text-amber">The Contribution Engine</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-paper sm:text-5xl">
                Frictionless. Empowering. Yours.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/60">
                Select your impact. Choose your amount. The moment you give, the
                golden thread glows across the lattice — your connection made visible.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 space-y-4">
                {AREAS.map((a) => (
                  <button
                    key={a.key}
                    onClick={() => setArea(a.key)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                      area === a.key
                        ? "border-amber bg-amber/10"
                        : "border-paper/15 bg-paper/5 hover:border-paper/30"
                    }`}
                  >
                    <span className="text-2xl">{a.icon}</span>
                    <div>
                      <div className="font-heading text-lg text-paper">{a.key}</div>
                      <div className="text-sm text-paper/50">{a.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Floating plate */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-amber/10 blur-2xl" />
              <div className="relative rounded-3xl bg-paper p-8 shadow-2xl sm:p-10">
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center py-12 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber/20">
                        <Check className="h-8 w-8 text-clay" />
                      </div>
                      <h3 className="mt-6 font-heading text-2xl font-medium text-forest">
                        Your thread glows.
                      </h3>
                      <p className="mt-3 max-w-xs text-forest/60">
                        ${finalAmount} toward {area}. You are now part of the lattice —
                        ${finalAmount >= 10 ? "a book, a meal, a hand" : "a seed"} in motion.
                      </p>
                      <button
                        onClick={reset}
                        className="mt-8 rounded-full border border-forest/20 px-6 py-3 text-sm text-forest transition-colors hover:bg-forest/5"
                      >
                        Give Again
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={submit}
                      className="space-y-6"
                    >
                      <div>
                        <label className="text-xs tracking-label text-forest/50">
                          Select Amount
                        </label>
                        <div className="mt-3 grid grid-cols-4 gap-2">
                          {PRESETS.map((p) => (
                            <button
                              key={p}
                              type="button"
                              onClick={() => { setAmount(p); setCustom(""); }}
                              className={`rounded-xl py-3 font-heading text-lg font-medium transition-all ${
                                amount === p && !custom
                                  ? "bg-clay text-paper"
                                  : "bg-forest/5 text-forest hover:bg-forest/10"
                              }`}
                            >
                              ${p}
                            </button>
                          ))}
                        </div>
                        <input
                          type="number"
                          value={custom}
                          onChange={(e) => setCustom(e.target.value)}
                          placeholder="Custom amount"
                          className="mt-3 w-full rounded-xl border border-forest/15 bg-paper px-4 py-3 text-forest outline-none focus:border-clay"
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required
                          className="w-full rounded-xl border border-forest/15 bg-paper px-4 py-3 text-forest outline-none focus:border-clay"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          required
                          className="w-full rounded-xl border border-forest/15 bg-paper px-4 py-3 text-forest outline-none focus:border-clay"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="impact-pulse relative flex w-full items-center justify-center gap-2 rounded-full bg-clay py-4 text-base font-medium text-paper transition-transform hover:scale-[1.02] disabled:opacity-60"
                      >
                        {loading ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <>Give ${finalAmount || 0} · {area}</>
                        )}
                      </button>
                      <p className="text-center text-xs text-forest/40">
                        100% reaches the community. Zero overhead.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}