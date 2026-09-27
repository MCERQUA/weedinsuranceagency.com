import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const REASONS = [
  { title: "Cannabis Business Insurance Specialists", desc: "We work with dispensaries, cultivators, processors and hemp brands, and we know the coverage questions specific to them: product liability, crop and inventory, and the insurance your license and lease require." },
  { title: "Surplus Market Access", desc: "Most standard carriers decline cannabis. We place coverage with the specialty and surplus-lines carriers that do write it, and compare their options for you." },
  { title: "Certificates When You Need Them", desc: "Need proof of insurance for a lease, a license application or a vendor agreement? Once coverage is bound we issue certificates and additional-insured endorsements quickly." },
  { title: "Licensed in All 50 States", desc: "Wherever your operation is licensed to run, we can place coverage there." },
  { title: "Founded in 2005", desc: "Contractors Choice Agency has placed specialty business insurance for 20+ years. We've seen the market cycles and we know which carriers pay claims." },
  { title: "Claims Advocacy", desc: "When a claim happens, we're in your corner — not hiding behind carrier call centers. Direct advocate support." },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-warm-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/team-review.jpg"
                alt="Cannabis business insurance consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/20 to-transparent" />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="font-body text-sm font-bold text-ember-orange uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-bark font-bold mb-4">
                Why Cannabis Businesses Choose Us
              </h2>
              <p className="font-body text-muted leading-relaxed mb-8">
                We focus on businesses that standard carriers turn away. That means we know cannabis business insurance: the surplus markets that write it, the coverage your license and lease require, and the gaps a generic policy leaves.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {REASONS.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-forest-green rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-bold text-bark text-sm mb-0.5">{r.title}</p>
                      <p className="font-body text-sm text-muted leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
