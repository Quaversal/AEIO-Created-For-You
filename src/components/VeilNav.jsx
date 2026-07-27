import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "The Nexus", href: "#nexus", state: "We are 1,284 lives strong and growing." },
  { label: "Our Mission", href: "#mission", state: "Empowerment is not given. It is unlocked." },
  { label: "Impact Ledger", href: "#ledger", state: "Every dollar traced to a human outcome." },
  { label: "Story Vault", href: "#stories", state: "From the many to the one." },
  { label: "Contribute", href: "#contribute", state: "Your thread joins the lattice today." },
];

export default function VeilNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (href) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-paper/85 backdrop-blur-md py-3 shadow-[0_1px_0_rgba(27,67,50,0.08)]" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <button onClick={() => go("#nexus")} className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-paper font-heading text-lg font-semibold">
              A
            </span>
            <span className="font-heading text-xl font-semibold tracking-tight text-forest">
              AEIO
            </span>
          </button>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-forest transition-colors hover:text-clay"
            aria-label="Open menu"
          >
            <span className="hidden text-sm tracking-label sm:inline">Menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-forest texture-weave"
          >
            <div className="absolute right-6 top-6">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-paper/80 transition-colors hover:text-amber"
                aria-label="Close menu"
              >
                <span className="text-sm tracking-label">Close</span>
                <X className="h-7 w-7" />
              </button>
            </div>

            <nav className="flex h-full flex-col justify-center px-6 sm:px-20">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  onClick={() => go(item.href)}
                  className="group flex items-baseline gap-6 border-b border-paper/10 py-5 text-left"
                >
                  <span className="font-mono text-xs text-amber/70">
                    0{i + 1}
                  </span>
                  <div>
                    <span className="font-heading text-3xl font-medium text-paper transition-colors group-hover:text-amber sm:text-5xl">
                      {item.label}
                    </span>
                    <p className="mt-1 text-sm text-paper/50">{item.state}</p>
                  </div>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}