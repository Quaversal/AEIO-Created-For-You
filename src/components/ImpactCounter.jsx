import React, { useState, useEffect, useRef } from "react";

// Counts up to a target when scrolled into view — the "Real-Time Impact Counter"
export default function ImpactCounter({ target, suffix = "", label, duration = 2000 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl font-semibold text-primary sm:text-5xl">
        {value.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-2 text-xs tracking-label text-foreground/60">{label}</div>
    </div>
  );
}