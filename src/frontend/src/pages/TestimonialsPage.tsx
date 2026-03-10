import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

const T = [
  {
    name: "Ananya Reddy",
    city: "Indore",
    treatment: "Dental Veneers",
    review:
      "Dr. Verma completely transformed my smile. I was so self-conscious before — now I smile in every photo. The entire team was gentle, professional, and incredibly skilled.",
    img: "/assets/generated/patient-1.dim_100x100.jpg",
  },
  {
    name: "Vikram Nair",
    city: "Bhopal",
    treatment: "Dental Implants",
    review:
      "The procedure was absolutely painless, and the implant looks and feels exactly like my natural tooth. Truly remarkable work — I waited too long to get it done!",
    img: "/assets/generated/patient-2.dim_100x100.jpg",
  },
  {
    name: "Meera Krishnan",
    city: "Ujjain",
    treatment: "Teeth Whitening",
    review:
      "My wedding was coming up and I wanted perfect teeth. The whitening treatment was fast and stunning — 8 shades lighter in one session. I felt like a celebrity!",
    img: "/assets/generated/patient-3.dim_100x100.jpg",
  },
  {
    name: "Rajesh Kumar",
    city: "Jabalpur",
    treatment: "Root Canal Treatment",
    review:
      "I was terrified of root canals but Dr. Verma made the experience completely pain-free. Her patience at every step put me fully at ease.",
    img: "/assets/generated/patient-4.dim_100x100.jpg",
  },
  {
    name: "Arjun Patel",
    city: "Ratlam",
    treatment: "Clear Aligners",
    review:
      "I wore aligners for 14 months and the results are phenomenal. My teeth are perfectly straight and my confidence has shot through the roof!",
    img: "/assets/generated/patient-5.dim_100x100.jpg",
  },
];

const DOTS = ["1", "2", "3", "4", "5"];

export default function TestimonialsPage() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);

  const next = () => {
    setDir(1);
    setCur((p) => (p + 1) % T.length);
  };
  const prev = () => {
    setDir(-1);
    setCur((p) => (p - 1 + T.length) % T.length);
  };

  const t = T[cur];

  return (
    <main className="pt-20">
      <section className="py-24 hero-gradient noise-overlay relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="eyebrow-dark mb-4">Patient Stories</div>
            <h1
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Testimonials
            </h1>
            <p className="font-body text-white/65 text-lg">
              Thousands of patients trust us with their smiles.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured slider */}
      <section className="py-24 bg-dental-blue relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={cur}
              custom={dir}
              initial={{ opacity: 0, x: dir * 72 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -72 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="glass rounded-3xl px-10 py-12 lg:px-14 text-center"
            >
              <div className="text-dental-teal text-2xl mb-6 tracking-wider">
                ★★★★★
              </div>
              <p className="font-body text-white/85 text-xl lg:text-2xl italic leading-relaxed mb-8">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-dental-teal shadow-glow"
                />
                <div className="text-left">
                  <div className="font-heading font-bold text-white text-lg">
                    {t.name}
                  </div>
                  <div className="font-body text-dental-teal text-sm">
                    {t.city} · {t.treatment}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              type="button"
              onClick={prev}
              data-ocid="testimonials.pagination_prev"
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-dental-teal transition-all flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {DOTS.map((d, i) => (
                <button
                  type="button"
                  key={d}
                  aria-label={`Go to ${i + 1}`}
                  onClick={() => {
                    setDir(i > cur ? 1 : -1);
                    setCur(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === cur ? "bg-dental-teal w-5" : "bg-white/30 w-1.5"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              data-ocid="testimonials.pagination_next"
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-dental-teal transition-all flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* All testimonials grid */}
      <section className="py-24 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="eyebrow mb-6">More Happy Patients</div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {T.map((item) => (
              <ScrollReveal key={item.name}>
                <div className="bg-white rounded-3xl p-7 shadow-card h-full flex flex-col">
                  <div className="text-dental-teal text-base mb-3">★★★★★</div>
                  <p className="font-body text-dental-blue/65 text-sm leading-relaxed italic mb-5 flex-1">
                    &ldquo;{item.review}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-body font-semibold text-dental-blue text-sm">
                        {item.name}
                      </div>
                      <div className="font-body text-dental-teal text-xs">
                        {item.city}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
