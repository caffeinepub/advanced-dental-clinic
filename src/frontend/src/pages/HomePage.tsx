import { motion, useScroll, useTransform } from "motion/react";
import AnimatedCounter from "../components/AnimatedCounter";
import ScrollReveal from "../components/ScrollReveal";

const TREATMENTS_PREVIEW = [
  {
    icon: "✨",
    num: "01",
    title: "Teeth Whitening",
    desc: "Up to 8 shades brighter in a single laser session.",
  },
  {
    icon: "🦷",
    num: "02",
    title: "Dental Implants",
    desc: "Permanent titanium replacements that feel completely natural.",
  },
  {
    icon: "💎",
    num: "03",
    title: "Cosmetic Dentistry",
    desc: "Veneers, bonding, and smile design crafted to your face.",
  },
];

const STATS = [
  { value: 5000, suffix: "+", label: "Happy Patients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 3000, suffix: "+", label: "Treatments Done" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

const TESTIMONIALS = [
  {
    name: "Ananya Reddy",
    city: "Indore",
    text: "Dr. Verma completely transformed my smile. I feel so confident now — best investment I've ever made in myself!",
    img: "/assets/generated/patient-1.dim_100x100.jpg",
  },
  {
    name: "Vikram Nair",
    city: "Bhopal",
    text: "The implant looks and feels exactly like my natural tooth. Remarkable work and absolutely painless process.",
    img: "/assets/generated/patient-2.dim_100x100.jpg",
  },
];

const TRUST = [
  { icon: "🏥", label: "ISO Certified Clinic" },
  { icon: "⚕️", label: "IDA Registered" },
  { icon: "🔬", label: "Digital X-Ray & Imaging" },
  { icon: "✅", label: "5-Year Treatment Warranty" },
];

export default function HomePage({
  onNavigate,
}: { onNavigate: (p: string) => void }) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <main className="w-full">
      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Layer 1 – photo with parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="/assets/generated/clinic-interior.dim_1200x600.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        {/* Layer 2 – dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.13_0.07_248/0.97)] via-[oklch(0.15_0.06_245/0.88)] to-[oklch(0.16_0.05_242/0.55)]" />

        {/* Layer 2.5 – animated soft blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              top: "10%",
              left: "55%",
              background:
                "radial-gradient(circle, oklch(0.63 0.11 192 / 0.08) 0%, transparent 70%)",
            }}
          />
          <motion.div
            animate={{ y: [0, 18, 0], x: [0, -8, 0] }}
            transition={{
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              top: "40%",
              left: "20%",
              background:
                "radial-gradient(circle, oklch(0.63 0.11 192 / 0.05) 0%, transparent 70%)",
            }}
          />
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute w-[300px] h-[300px] rounded-full"
            style={{
              bottom: "15%",
              right: "10%",
              background:
                "radial-gradient(circle, oklch(0.75 0.08 200 / 0.06) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Layer 3 – diagonal light beams SVG */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0, 60, 120, 180, 240, 300].map((x) => (
              <rect
                key={x}
                x={x}
                y="-50"
                width="18"
                height="800"
                fill="url(#beam)"
                transform={`rotate(-30 ${x} 300)`}
              />
            ))}
          </svg>
        </div>
        {/* Layer 4 – ghost typography watermark */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 select-none pointer-events-none overflow-hidden"
          style={{ lineHeight: 0.85 }}
        >
          <span
            className="font-heading font-black text-white"
            style={{
              fontSize: "clamp(120px, 20vw, 260px)",
              opacity: 0.04,
              letterSpacing: "-0.04em",
            }}
          >
            SMILE
          </span>
        </div>

        {/* Content – two-column on lg+ */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* ── LEFT COLUMN: copy ── */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-dental-teal animate-pulse" />
                <span className="font-body text-xs font-bold tracking-[0.22em] uppercase text-dental-teal">
                  Premier Dental Care · Indore
                </span>
              </motion.div>

              {/* 3-tier typographic headline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="font-body text-xl sm:text-2xl font-light text-white/60 tracking-wide mb-2">
                  Modern dentistry
                </p>
                <h1
                  className="font-heading font-extrabold text-white leading-[0.92] tracking-tight"
                  style={{
                    fontSize: "clamp(48px, 7vw, 100px)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  for a<br />
                  <span className="text-dental-teal">Confident</span>
                  <br />
                  Smile.
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-body text-white/65 text-lg leading-relaxed mt-6 mb-8 max-w-lg"
              >
                Experience world-class dental care with precision technology and
                compassionate specialists — designed to give you the smile you
                deserve.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-wrap gap-3"
              >
                <button
                  type="button"
                  onClick={() => onNavigate("/book")}
                  data-ocid="home.primary_button"
                  className="px-8 py-3.5 bg-dental-teal text-white font-semibold font-body rounded-2xl hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 text-[15px]"
                >
                  Book Appointment
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("/treatments")}
                  data-ocid="home.secondary_button"
                  className="px-8 py-3.5 glass text-white font-semibold font-body rounded-2xl hover:bg-white/15 transition-all duration-200 text-[15px]"
                >
                  View Treatments →
                </button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {TRUST.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.07] border border-white/10"
                  >
                    <span className="text-sm">{t.icon}</span>
                    <span className="font-body text-xs text-white/60 font-medium">
                      {t.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN: feature cards (lg+ only) ── */}
            <motion.div
              className="hidden lg:flex flex-col gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Social proof strip */}
              <div className="glass rounded-2xl px-5 py-4 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[
                    "/assets/generated/patient-1.dim_100x100.jpg",
                    "/assets/generated/patient-2.dim_100x100.jpg",
                    "/assets/generated/patient-3.dim_100x100.jpg",
                  ].map((s) => (
                    <img
                      key={s}
                      src={s}
                      alt=""
                      className="w-9 h-9 rounded-full border-2 border-dental-blue object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm font-body">
                    5,000+ smiles
                  </div>
                  <div className="text-dental-teal text-xs font-body">
                    transformed & counting
                  </div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-dental-teal text-sm">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Treatment highlight cards */}
              {TREATMENTS_PREVIEW.map((t, i) => (
                <motion.div
                  key={t.title}
                  className="glass rounded-2xl px-5 py-4 flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.65 + i * 0.12,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => onNavigate("/treatments")}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-dental-teal/30 to-dental-blue/20 flex items-center justify-center text-xl flex-shrink-0">
                    {t.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-body font-semibold text-white text-sm">
                      {t.title}
                    </div>
                    <div className="font-body text-white/55 text-xs leading-snug mt-0.5 truncate">
                      {t.desc}
                    </div>
                  </div>
                  <span className="text-dental-teal text-sm flex-shrink-0">
                    →
                  </span>
                </motion.div>
              ))}

              {/* Quick stat pill */}
              <div className="glass rounded-2xl px-5 py-4 grid grid-cols-3 gap-3 text-center">
                {[
                  { v: "10+", l: "Years" },
                  { v: "98%", l: "Satisfaction" },
                  { v: "5★", l: "Rating" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-heading font-black text-dental-teal text-xl">
                      {s.v}
                    </div>
                    <div className="font-body text-white/50 text-[11px] tracking-wide uppercase">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 64" fill="none" aria-hidden="true">
            <path
              d="M0 64L60 53C120 42 240 21 360 16C480 11 600 21 720 26.7C840 32 960 32 1080 29.3C1200 27 1320 21 1380 18.7L1440 16V64H0Z"
              fill="oklch(0.995 0.003 240)"
            />
          </svg>
        </div>
      </section>

      {/* ───── STATS ───── */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden shadow-card">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div className="bg-white px-6 py-10 text-center flex flex-col items-center gap-2">
                  <div
                    className="font-heading font-black text-dental-teal"
                    style={{
                      fontSize: "clamp(42px, 6vw, 68px)",
                      lineHeight: 1,
                    }}
                  >
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-body text-[11px] font-bold tracking-[0.18em] uppercase text-dental-blue/50">
                    {s.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TREATMENTS PREVIEW ───── */}
      <section className="w-full py-24 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="eyebrow mb-4">Our Services</div>
              <h2
                className="font-heading font-bold text-dental-blue"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                Comprehensive Dental Care
              </h2>
              <p className="font-body text-dental-blue/55 mt-3 max-w-lg mx-auto">
                From routine cleanings to complete smile makeovers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TREATMENTS_PREVIEW.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 0.12}>
                <div className="treatment-card bg-white rounded-3xl p-8 shadow-card cursor-pointer group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="absolute top-0 right-0 w-0 h-0"
                      style={{
                        borderWidth: "0 80px 80px 0",
                        borderColor:
                          "transparent oklch(var(--dteal)/0.12) transparent transparent",
                      }}
                    />
                  </div>
                  <div className="tc-num absolute -bottom-2 -right-1 font-heading font-black text-7xl text-dental-blue/[0.06] select-none transition-colors duration-300">
                    {t.num}
                  </div>
                  <div
                    className="tc-icon-bg w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5
                    bg-gradient-to-br from-dental-teal/20 to-dental-blue/10 transition-colors duration-300"
                  >
                    {t.icon}
                  </div>
                  <h3 className="tc-title font-heading text-xl font-bold text-dental-blue mb-2 transition-colors duration-300">
                    {t.title}
                  </h3>
                  <p className="tc-desc font-body text-sm text-dental-blue/60 leading-relaxed transition-colors duration-300">
                    {t.desc}
                  </p>
                  <div className="tc-link mt-5 font-body text-sm font-semibold text-dental-teal transition-colors duration-300 flex items-center gap-1">
                    Learn More <span className="text-base">→</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <button
                type="button"
                onClick={() => onNavigate("/treatments")}
                data-ocid="home.secondary_button"
                className="px-8 py-3.5 border-2 border-dental-teal text-dental-teal font-semibold font-body rounded-2xl hover:bg-dental-teal hover:text-white transition-all duration-200"
              >
                View All Treatments
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── TESTIMONIALS PREVIEW ───── */}
      <section className="w-full py-24 bg-dental-blue relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="eyebrow-dark mb-4">Patient Stories</div>
              <h2
                className="font-heading font-bold text-white"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                What Our Patients Say
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.12}>
                <div className="glass rounded-3xl p-8">
                  <div className="text-dental-teal text-lg mb-4 tracking-wide">
                    ★★★★★
                  </div>
                  <p className="font-body text-white/80 leading-relaxed mb-6 italic text-[15px]">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-dental-teal"
                    />
                    <div>
                      <div className="font-body font-semibold text-white text-sm">
                        {t.name}
                      </div>
                      <div className="font-body text-white/45 text-xs">
                        {t.city}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-10">
              <button
                type="button"
                onClick={() => onNavigate("/testimonials")}
                data-ocid="home.secondary_button"
                className="px-8 py-3.5 glass font-body text-white font-semibold rounded-2xl hover:bg-white/15 transition-all duration-200"
              >
                Read All Reviews →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── CTA BANNER ───── */}
      <section className="w-full py-24 bg-dental-mint">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2
              className="font-heading font-bold text-dental-blue mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Ready for Your Perfect Smile?
            </h2>
            <p className="font-body text-dental-blue/60 text-lg mb-8">
              Book your consultation today. New patients always welcome.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                onClick={() => onNavigate("/book")}
                data-ocid="home.primary_button"
                className="px-10 py-4 bg-dental-teal text-white font-bold font-body rounded-2xl hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 text-base"
              >
                Book Appointment
              </button>
              <button
                type="button"
                onClick={() => onNavigate("/contact")}
                data-ocid="home.secondary_button"
                className="px-10 py-4 border-2 border-dental-blue text-dental-blue font-bold font-body rounded-2xl hover:bg-dental-blue hover:text-white transition-all duration-200 text-base"
              >
                Contact Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
