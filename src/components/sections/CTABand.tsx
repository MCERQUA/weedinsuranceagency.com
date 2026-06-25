import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-brand py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand to-brand-900" />
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-brand-bright/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-brand-ink/30 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark" />

      <div className="relative container-xl text-center">
        <FadeIn>
          <p className="eyebrow text-brand-300 mb-3">Specialty Cannabis Markets</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-white font-bold mb-4">
            Get Your Cannabis Operation Covered
          </h2>
          <p className="font-body text-white/75 text-lg mb-8 max-w-2xl mx-auto">
            Same-day quotes for dispensaries, cultivators, processors, and hemp brands.
            Surplus and specialty carriers that actually write cannabis coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-cta text-white px-8 py-4 rounded-xl font-body font-bold text-base shadow-cta hover:bg-cta-dark hover:-translate-y-0.5 transition-all"
            >
              Get Your Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-body font-bold text-base hover:bg-white/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
