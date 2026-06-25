import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

const HIGHLIGHTS = [
  "Surplus market access — carriers that write cannabis",
  "Licensed in all 50 states",
  "24-hour quote turnaround",
];

export function Hero() {
  return (
    <section className="relative bg-canvas pt-24 pb-0 overflow-hidden">
      {/* depth blooms */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-cta/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dots pointer-events-none" />

      <div className="container-xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pb-12">
          <div className="py-12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-brand/8 border border-brand/15 rounded-full px-4 py-1.5 mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                <span className="font-body text-sm font-bold text-brand">Cannabis Business Insurance Specialists</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-ink font-bold leading-tight mb-6">
                Insurance for{" "}
                <span className="text-canna">Cannabis Businesses</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-body text-lg text-muted leading-relaxed mb-8 max-w-lg">
                GL, product liability, and specialty coverage built for dispensaries, cultivators,
                processors, and hemp brands. Most standard carriers decline cannabis — we shop the
                surplus markets that write it right.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-cta text-white px-7 py-3.5 rounded-xl font-body font-bold text-base shadow-cta hover:bg-cta-dark hover:-translate-y-0.5 transition-all"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 border-2 border-brand/30 text-brand px-7 py-3.5 rounded-xl font-body font-bold text-base hover:border-brand hover:bg-brand/5 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3">
                {HIGHLIGHTS.map((h) => (
                  <div key={h} className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand flex-shrink-0" />
                    <span className="font-body text-sm text-ink-soft">{h}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} direction="left" className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-float">
            <Image
              src="/images/hero-cannabis business insurance.jpg"
              alt="Professional cannabis business insurance consultation"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 via-transparent to-transparent" />

            {/* glass teaser card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-card border border-white/60 p-4">
              <p className="font-body text-xs text-muted mb-1 uppercase tracking-wide">Most Popular Bundle</p>
              <p className="font-heading font-bold text-ink text-sm">Dispensary Coverage Bundle</p>
              <p className="font-body text-xs font-bold mt-1">
                <span className="text-amber-grad">Starting from $2,500/year</span>
                <span className="text-muted ml-1">— specialty cannabis markets</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
