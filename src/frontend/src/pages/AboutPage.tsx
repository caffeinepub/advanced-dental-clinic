import AnimatedCounter from "../components/AnimatedCounter";
import ScrollReveal from "../components/ScrollReveal";

const QUALS = [
  "BDS (Bachelor of Dental Surgery) — KLE University, 2008",
  "MDS (Master of Dental Surgery) — Prosthodontics, AIIMS, 2012",
  "Fellowship in Implant Dentistry — Indian Prosthodontic Society",
  "Advanced Certification in Laser Dentistry — AICDE",
  "Member, Indian Dental Association (IDA)",
  "International Member, American Academy of Cosmetic Dentistry (AACD)",
];

const STATS = [
  { value: 5000, suffix: "+", label: "Happy Patients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 3000, suffix: "+", label: "Treatments Completed" },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-24 hero-gradient noise-overlay relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="eyebrow-dark mb-4">Meet Your Doctor</div>
            <h1
              className="font-heading font-bold text-white mb-2"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Dr. Neha Verma
            </h1>
            <p className="font-body text-dental-teal text-lg">
              BDS, MDS — Specialist in Prosthodontics &amp; Cosmetic Dentistry
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative flex flex-col items-center lg:items-start">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-dental-teal/30 to-dental-blue/20 scale-110 animate-float" />
                  <img
                    src="/assets/generated/doctor-profile.dim_400x400.jpg"
                    alt="Dr. Neha Verma, BDS MDS"
                    className="relative w-full h-full rounded-full object-cover border-4 border-dental-teal shadow-glow-lg"
                  />
                </div>
                <div className="mt-6 bg-white rounded-2xl px-6 py-4 shadow-card text-center">
                  <div className="text-3xl mb-1">🏆</div>
                  <div className="font-heading font-bold text-dental-blue text-sm">
                    Award-Winning Dentist
                  </div>
                  <div className="font-body text-dental-blue/50 text-xs mt-0.5">
                    Best Cosmetic Dentist 2023 — IDA Madhya Pradesh
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div>
                <h2 className="font-heading text-3xl font-bold text-dental-blue mb-1">
                  Dr. Neha Verma, BDS MDS
                </h2>
                <p className="font-body text-dental-teal font-semibold mb-5">
                  Founder &amp; Chief Dental Surgeon
                </p>
                <p className="font-body text-dental-blue/65 leading-relaxed mb-4">
                  With over a decade of dedicated practice, Dr. Neha Verma has
                  established herself as one of Indore&apos;s most trusted
                  dental specialists. Her patient-first philosophy and
                  relentless pursuit of clinical excellence has helped thousands
                  rediscover their confident smiles.
                </p>
                <p className="font-body text-dental-blue/65 leading-relaxed mb-7">
                  She integrates the latest digital technologies with a deeply
                  empathetic chairside manner, ensuring every patient feels
                  comfortable, informed, and genuinely cared for.
                </p>
                <h3 className="font-heading text-lg font-bold text-dental-blue mb-3">
                  Qualifications &amp; Credentials
                </h3>
                <ul className="flex flex-col gap-2">
                  {QUALS.map((q) => (
                    <li
                      key={q}
                      className="flex items-start gap-2.5 font-body text-sm text-dental-blue/65"
                    >
                      <span className="text-dental-teal mt-0.5 shrink-0">
                        ✓
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats – UI-CRAFT #3 */}
      <section className="py-20 bg-dental-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {STATS.map((s) => (
              <ScrollReveal key={s.label}>
                <div className="text-center py-12 px-6 bg-dental-blue">
                  <div
                    className="font-heading font-black text-dental-teal mb-1"
                    style={{
                      fontSize: "clamp(48px, 7vw, 80px)",
                      lineHeight: 1,
                    }}
                  >
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-white/45 mt-2">
                    {s.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 mesh-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="eyebrow mb-4">Our Philosophy</div>
            <h2
              className="font-heading font-bold text-dental-blue mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
            >
              Dentistry With Heart
            </h2>
            <div className="bg-white rounded-3xl p-10 shadow-card relative">
              <div className="font-heading text-8xl text-dental-teal/10 absolute -top-4 left-8 leading-none select-none">
                &ldquo;
              </div>
              <p className="font-body text-dental-blue/65 text-lg leading-relaxed italic relative z-10">
                I started Advanced Dental Clinic with a single vision: to create
                a space where patients don&apos;t just get treated — they feel
                genuinely cared for. Every smile we help create is a story of
                renewed confidence, and that responsibility motivates us every
                single day.
              </p>
              <div className="mt-5 font-heading font-bold text-dental-blue">
                — Dr. Neha Verma
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
