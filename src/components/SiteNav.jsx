import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NAV_ITEMS = [
{ label: "Programs", href: "#programs" },
{ label: "Stories", href: "#stories" }];


export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (href) => {
    setOpen(false);
    if (location.pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${href}`);
    }
  };

  const goHome = () => {
    setOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-card shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={goHome} className="flex items-center gap-2">
          <span className="text-foreground [font-family:'Griddy_Blocks',_sans-serif] font-normal text-5xl">Aeio</span>
        </button>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) =>
          <button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            className="text-sm font-medium text-foreground transition hover:text-primary">
            
              {item.label}
            </button>
          )}
          <Link
            to="/about"
            className="text-sm font-medium text-foreground transition hover:text-primary">

            About
          </Link>
          <a
            href="https://staff-portal.aeiocreatedforyou.org"
            className="text-sm font-medium text-foreground transition hover:text-primary">

            Staff Portal
          </a>
          <button
            onClick={() => scrollTo("#enroll")}
            className="rounded-lg bg-slatedeep px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md ring-1 ring-white/30 transition hover:bg-slatedeep/90">

            Enroll Now
          </button>
        </div>
        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden border-t border-border bg-card md:hidden">
          
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) =>
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="py-2 text-left text-sm font-medium text-foreground/80">
              
                  {item.label}
                </button>
            )}
              <Link
              to="/about"
              className="py-2 text-left text-sm font-medium text-foreground/80">

                About
              </Link>
              <a
              href="https://staff-portal.aeiocreatedforyou.org"
              className="py-2 text-left text-sm font-medium text-foreground/80">

                Staff Portal
              </a>
              <button
              onClick={() => scrollTo("#enroll")}
              className="mt-2 rounded-lg bg-slatedeep px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md ring-1 ring-white/30">

                Enroll Now
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}