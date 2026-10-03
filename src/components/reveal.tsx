"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 18, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RotatingText({ items, className = "" }: { items: readonly string[]; className?: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || items.length < 2) return;
    const id = window.setInterval(() => setIndex((value) => (value + 1) % items.length), 2400);
    return () => window.clearInterval(id);
  }, [items, reduce]);

  if (reduce) return <span className={className}>{items[0]}</span>;
  const label = items[index] ?? items[0] ?? "";
  return (
    <span className={className} aria-live="polite">
      <motion.span
        key={label}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {label}
      </motion.span>
    </span>
  );
}

/**
 * Single text node: the final value is what the server renders, so
 * no-JS and reduced-motion users always see "12+", never "0+".
 * The count-up plays once when the number scrolls into view.
 */
export function CountUp({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(to);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let frame = 0;
    let played = false;

    const io = new IntersectionObserver((entries) => {
      if (!entries[0] || !entries[0].isIntersecting || played) return;
      played = true;
      io.disconnect();

      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(to * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });

    io.observe(el);
    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduce, to]);

  return (
    <span ref={ref} className={className}>
      {reduce ? to : display}
      {suffix}
    </span>
  );
}
