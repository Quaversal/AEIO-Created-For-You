import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NAV_ITEMS = [
{ label: "Programs", href: "#programs" },
{ label: "Approach", href: "#approach" },
{ label: "Stories", href: "#stories" },
{ label: "Enroll", href: "#enroll" }];


export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? "border-b border-border bg-card/90 shadow-sm backdrop-blur" : "border-b border-transparent bg-transparent"}`
      }>
      
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={goHome} className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-lg font-semibold text-primary-foreground [font-family:'Dancing_Script',_system-ui]">A

          </span>
          <span className="text-xl text-foreground [font-family:'Griddy_Blocks',_sans-serif] font-normal">AEIO</span>
        </button>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) =>
          <button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            className="text-sm font-medium text-foreground/70 transition hover:text-primary">
            
              {item.label}
            </button>
          )}
          <Link
            to="/staff-portal"
            className="text-sm font-medium text-foreground/70 transition hover:text-primary">
            
            Staff Portal
          </Link>
          <button
            onClick={() => scrollTo("#enroll")}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90">
            
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
              to="/staff-portal"
              className="py-2 text-left text-sm font-medium text-foreground/80">
              
                Staff Portal
              </Link>
              <button
              onClick={() => scrollTo("#enroll")}
              className="mt-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              
                Enroll Now
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}