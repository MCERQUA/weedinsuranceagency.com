"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { STATS } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 30, stiffness: 100 });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString());

  if (isInView) mv.set(value);

  return (
    <span ref={ref} className="font-heading text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-brand-200 bg-clip-text text-transparent">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand section-pad">
      {/* layered depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand to-brand-900" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-bright/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-brand-ink/40 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark" />

      <div className="relative container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.07}>
              <div className={i < STATS.length - 1 ? "lg:border-r lg:border-white/15 lg:pr-8" : ""}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="font-body text-sm text-white/60 mt-2 uppercase tracking-wide">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
