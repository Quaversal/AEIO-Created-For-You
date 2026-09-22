import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, Plus, Minus, Loader2 } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { base44 } from "@/api/base44Client";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, count, clearCart } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setCheckingOut(true);
    setError(null);
    try {
      const checkoutItems = items.map((i) => ({ productId: i.id, quantity: i.quantity }));
      const res = await base44.functions.invoke("create-checkout", { items: checkoutItems });
      window.location.href = res.data.redirectUrl;
    } catch (err) {
      setError("Could not start checkout. Please try again.");
      setCheckingOut(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[60] bg-black/40"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-card shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="font-heading text-lg font-semibold text-foreground">Your Cart ({count})</h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-foreground/60 hover:text-foreground" aria-label="Close cart">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-12 w-12 text-foreground/30" />
                  <p className="mt-4 text-foreground/60">Your cart is empty</p>
                  <button onClick={() => setIsOpen(false)} className="mt-4 text-sm font-semibold text-primary hover:underline">
                    Browse programs
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-3 rounded-xl border border-border p-4">
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        <p className="text-sm text-foreground/60">
                          ${item.price.toFixed(2)}
                          {item.type === "subscription" ? "/mo" : ""}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-md border border-border p-1 hover:bg-muted" aria-label="Decrease quantity">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-md border border-border p-1 hover:bg-muted" aria-label="Increase quantity">
                            <Plus className="h-3 w-3" />
                          </button>
                          <button onClick={() => removeItem(item.id)} className="ml-2 text-foreground/40 hover:text-destructive" aria-label="Remove item">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right font-semibold text-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border px-6 py-4">
                {error && <p className="mb-2 text-sm text-destructive">{error}</p>}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-foreground/70">Total</span>
                  <span className="font-heading text-xl font-semibold text-foreground">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={checkingOut}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50"
                >
                  {checkingOut ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Redirecting to checkout…
                    </>
                  ) : (
                    "Checkout"
                  )}
                </button>
                <button onClick={clearCart} className="mt-2 w-full text-center text-xs text-foreground/50 hover:text-foreground">
                  Clear cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}