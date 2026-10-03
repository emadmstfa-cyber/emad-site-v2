"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal on scroll — CSS transition + IntersectionObserver.
 * No animation library: keeps the bundle small and TBT low.
 */
export function Reveal({ children, delay = 0, y = 18, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-70px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={"reveal" + (shown ? " reveal-in" : "") + (className ? " " + className : "")}
      style={delay ? { transitionDelay: delay + "s" } : undefined}
    >
      {children}
    </div>
  );
}

export function RotatingText({ items, className = "" }: { items: readonly string[]; className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const id = window.setInterval(() => setIndex((value) => (value + 1) % items.length), 2400);
    return () => window.clearInterval(id);
  }, [items.length]);

  const label = items[index] ?? items[0] ?? "";
  return (
    <span className={className}>
      <span key={label} className="rt-fade">{label}</span>
    </span>
  );
}

/**
 * Single text node: the final value is what the server renders, so
 * no-JS and reduced-motion users always see "12+", never "0+".
 */
export function CountUp({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(to);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let frame = 0;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0] || !entries[0].isIntersecting) return;
      io.disconnect();
      setAnimate(true);
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
  }, [to]);

  return (
    <span ref={ref} className={className}>
      {animate ? display : to}
      {suffix}
    </span>
  );
}
