import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";

const TREATMENTS = [
  {
    icon: "✨",
    num: "01",
    title: "Teeth Whitening",
    desc: "Our advanced laser and Zoom systems lighten teeth up to 8 shades in a single session. Safe, effective, long-lasting with minimal sensitivity.",
    img: null,
  },
  {
    icon: "🦷",
    num: "02",
    title: "Dental Implants",
    desc: "Titanium implants fused to your jawbone provide permanent, indistinguishable replacements for missing teeth. Full mouth reconstruction available.",
    img: null,
  },
  {
    icon: "🔬",
    num: "03",
    title: "Root Canal Treatment",
    desc: "Pain-free root canal therapy using rotary instruments and digital X-rays. We save teeth that would otherwise need extraction.",
    img: null,
  },
  {
    icon: "😁",
    num: "04",
    title: "Braces & Aligners",
    desc: "Straighten discreetly with clear aligners or ceramic braces. Digital smile simulation lets you preview results before treatment begins.",
    img: "/assets/uploads/K842J52A-YZFHi5PF2B1M_yRHxuaV38zFx-Fpf4rznQ2bJHV3r3RCymKe2cu9ppa-prC2RLECg17J3KklO70cMK3oMB1-oMI9jLI8PU4eNU-5.jpg",
  },
  {
    icon: "💎",
    num: "05",
    title: "Cosmetic Dentistry",
    desc: "Porcelain veneers, dental bonding, gum contouring, smile design — every detail crafted for the aesthetically perfect smile unique to you.",
    img: null,
  },
  {
    icon: "⭐",
    num: "06",
    title: "Smile Makeover",
    desc: "A complete aesthetic transformation combining whitening, veneers, alignment, and contouring — planned with digital imaging for dramatic results.",
    img: null,
  },
];

const STEPS = [
  { n: "01", t: "Consultation", d: "Comprehensive exam and digital X-rays" },
  {
    n: "02",
    t: "Treatment Plan",
    d: "Personalised plan with digital smile preview",
  },
  { n: "03", t: "Treatment", d: "Precision care using latest technology" },
  { n: "04", t: "Follow-up", d: "Ongoing care and maintenance support" },
];

export default function TreatmentsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 hero-gradient noise-overlay relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="eyebrow-dark mb-4">What We Offer</div>
            <h1
              className="font-heading font-bold text-white mb-5"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Our Treatments
            </h1>
            <p className="font-body text-white/65 text-lg max-w-xl mx-auto">
              Comprehensive care using the latest technology, tailored to give
              you the healthiest, most beautiful smile.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Treatment Grid – UI-CRAFT #2 cards */}
      <section className="py-24 bg-background mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENTS.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="treatment-card bg-white rounded-3xl shadow-card cursor-pointer group relative overflow-hidden h-full flex flex-col"
                >
                  {/* Card image (if present) */}
                  {t.img && (
                    <div className="aspect-square w-full overflow-hidden rounded-t-2xl">
                      <img
                        src={t.img}
                        alt={t.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1 relative">
                    {/* Corner triangle */}
                    <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className="w-0 h-0"
                        style={{
                          borderWidth: "0 72px 72px 0",
                          borderColor:
                            "transparent oklch(var(--dteal)/0.1) transparent transparent",
                        }}
                      />
                    </div>
                    {/* Background number */}
                    <div className="tc-num absolute -bottom-2 -right-1 font-heading font-black text-8xl text-dental-blue/[0.055] select-none leading-none transition-colors duration-300">
                      {t.num}
                    </div>
                    {/* Icon backplate */}
                    <div
                      className="tc-icon-bg w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5
                      bg-gradient-to-br from-dental-teal/20 to-dental-blue/10 transition-colors duration-300"
                    >
                      {t.icon}
                    </div>
                    <h3 className="tc-title font-heading text-xl font-bold text-dental-blue mb-3 transition-colors duration-300">
                      {t.title}
                    </h3>
                    <p className="tc-desc font-body text-[14px] text-dental-blue/60 leading-relaxed transition-colors duration-300">
                      {t.desc}
                    </p>
                    <div className="tc-link mt-5 h-0.5 w-0 group-hover:w-12 bg-dental-teal rounded-full transition-all duration-500" />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey steps */}
      <section className="py-24 bg-dental-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="eyebrow-dark mb-4">How It Works</div>
              <h2
                className="font-heading font-bold text-white"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                Your Treatment Journey
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 0.12}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-dental-teal/50 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading font-bold text-dental-teal">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-white mb-2">
                    {s.t}
                  </h3>
                  <p className="font-body text-white/50 text-sm">{s.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
