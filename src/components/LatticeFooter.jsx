import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Loader2, Check } from "lucide-react";
import Reveal from "./Reveal";

export default function LatticeFooter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await base44.entities.Subscriber.create({ email });
      setDone(true);
      toast({
        title: "Welcome to the lattice.",
        description: "You'll hear from us when the thread grows.",
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

  return (
    <footer className="relative z-10 overflow-hidden bg-forest texture-weave">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center sm:py-40">
        <Reveal>
          <span className="text-xs tracking-label text-amber">The Final Invitation</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-6 max-w-2xl font-heading text-4xl font-medium leading-tight text-paper sm:text-6xl">
            Join the Lattice.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-paper/60">
            One email. One thread. You become part of a living network of dignity,
            transparency, and collective human potential.
          </p>
        </Reveal>

        <Reveal delay={300}>
          {done ? (
            <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-3 rounded-full bg-amber/15 px-6 py-4">
              <Check className="h-5 w-5 text-amber" />
              <span className="text-paper">You're in. The lattice grows.</span>
            </div>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="flex-1 rounded-full border border-paper/20 bg-paper/5 px-6 py-4 text-paper placeholder:text-paper/40 outline-none focus:border-amber"
              />
              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-center gap-2 rounded-full bg-clay px-8 py-4 font-medium text-paper transition-transform hover:scale-[1.03] disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                  <>
                    Join
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/10 text-paper font-heading font-semibold">
              A
            </span>
            <span className="font-heading text-lg text-paper">AEIO</span>
            <span className="ml-2 text-sm text-paper/40">All Every Individual One</span>
          </div>
          <div className="flex gap-8 text-sm text-paper/50">
            <a href="#nexus" className="transition-colors hover:text-amber">Nexus</a>
            <a href="#mission" className="transition-colors hover:text-amber">Mission</a>
            <a href="#ledger" className="transition-colors hover:text-amber">Ledger</a>
            <a href="#contribute" className="transition-colors hover:text-amber">Contribute</a>
          </div>
          <p className="text-xs text-paper/30">
            © {new Date().getFullYear()} AEIO. Ethical radiance for every individual.
          </p>
        </div>
      </div>
    </footer>
  );
}