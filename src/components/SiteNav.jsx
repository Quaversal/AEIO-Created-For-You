import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/lib/CartContext";
import CartDrawer from "@/components/CartDrawer";

const NAV_ITEMS = [
{ label: "Programs", to: "/programs" }];


export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { count, setIsOpen } = useCart();

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
            key={item.to}
            onClick={() => { setOpen(false); navigate(item.to); }}
            className="text-sm font-medium text-foreground transition hover:text-primary">
            
              {item.label}
            </button>
          )}
          <a
            href="https://gamesandapps.aeiocreatedforyou.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground transition hover:text-primary">

            Apps
          </a>
          <Link
            to="/about"
            className="text-sm font-medium text-foreground transition hover:text-primary">

            About
          </Link>
          <a
            href="https://staff-portal.aeiocreatedforyou.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground transition hover:text-primary">

            Staff Portal
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-foreground transition hover:text-primary"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => navigate("/enroll")}
            className="rounded-lg bg-slatedeep px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md ring-1 ring-white/30 transition hover:bg-slatedeep/90">

            Message AEIO Now
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
              key={item.to}
              onClick={() => { setOpen(false); navigate(item.to); }}
              className="py-2 text-left text-sm font-medium text-foreground/80">
              
                  {item.label}
                </button>
            )}
              <a
              href="https://gamesandapps.aeiocreatedforyou.org"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-left text-sm font-medium text-foreground/80">

                Apps
              </a>
              <Link
              to="/about"
              className="py-2 text-left text-sm font-medium text-foreground/80">

                About
              </Link>
              <a
              href="https://staff-portal.aeiocreatedforyou.org"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-left text-sm font-medium text-foreground/80">

                Staff Portal
              </a>
              <button
                onClick={() => { setOpen(false); setIsOpen(true); }}
                className="flex items-center gap-2 py-2 text-left text-sm font-medium text-foreground/80"
              >
                <ShoppingBag className="h-4 w-4" /> Cart {count > 0 && `(${count})`}
              </button>
              <button
              onClick={() => navigate("/enroll")}
              className="mt-2 rounded-lg bg-slatedeep px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md ring-1 ring-white/30">

                Message AEIO Now
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
      <CartDrawer />
    </header>);

}