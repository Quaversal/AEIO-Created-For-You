import React, { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useCart } from "@/lib/CartContext";

export default function ThankYou() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="relative min-h-screen bg-[#f7f5f2]">
      <SiteNav />
      <main className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
        <CheckCircle2 className="h-16 w-16 text-primary" />
        <h1 className="mt-6 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Thank you for your purchase!
        </h1>
        <p className="mt-4 max-w-md text-foreground/70">
          Your payment was successful. We'll be in touch shortly to get you started. A confirmation has been sent to your email.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Return home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}