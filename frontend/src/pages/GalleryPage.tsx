import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

const CASES = [
  {
    id: "c1",
    title: "Full Smile Restoration",
    treatment: "Dental Implants + Veneers",
    before: "/assets/generated/before-after-1-before.dim_500x400.jpg",
    after: "/assets/generated/before-after-1-after.dim_500x400.jpg",
  },
  {
    id: "c2",
    title: "Teeth Whitening Transformation",
    treatment: "Professional Laser Whitening",
    before: "/assets/generated/before-after-2-before.dim_500x400.jpg",
    after: "/assets/generated/before-after-2-after.dim_500x400.jpg",
  },
  {
    id: "c3",
    title: "Smile Makeover with Veneers",
    treatment: "Porcelain Veneers + Contouring",
    before: "/assets/generated/before-after-1-before.dim_500x400.jpg",
    after: "/assets/generated/before-after-1-after.dim_500x400.jpg",
  },
  {
    id: "c4",
    title: "Orthodontic Correction",
    treatment: "Clear Aligners + Whitening",
    before: "/assets/generated/before-after-2-before.dim_500x400.jpg",
    after: "/assets/generated/before-after-2-after.dim_500x400.jpg",
  },
];

type LightboxData = { before: string; after: string; title: string };

export default function GalleryPage() {
  const [lb, setLb] = useState<LightboxData | null>(null);

  return (
    <main className="pt-20">
      <section className="py-24 hero-gradient noise-overlay relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="eyebrow-dark mb-4">Real Results</div>
            <h1
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Before &amp; After Gallery
            </h1>
            <p className="font-body text-white/65 text-lg">
              Life-changing transformations. Every smile tells a story of
              renewed confidence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASES.map((c) => (
              <ScrollReveal key={c.id}>
                <button
                  type="button"
                  onClick={() =>
                    setLb({ before: c.before, after: c.after, title: c.title })
                  }
                  data-ocid="gallery.card"
                  className="group w-full text-left rounded-3xl overflow-hidden shadow-card hover:shadow-glow-lg transition-all duration-300 bg-white"
                >
                  {/* Side-by-side before/after images */}
                  <div className="relative flex overflow-hidden rounded-t-3xl">
                    {/* Before */}
                    <div className="relative w-1/2 overflow-hidden">
                      <motion.img
                        src={c.before}
                        alt={`${c.title} — before`}
                        className="w-full h-52 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 left-2">
                        <span className="px-2.5 py-1 bg-dental-blue/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full font-body">
                          Before
                        </span>
                      </div>
                    </div>
                    {/* Divider */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white z-10" />
                    {/* After */}
                    <div className="relative w-1/2 overflow-hidden">
                      <motion.img
                        src={c.after}
                        alt={`${c.title} — after`}
                        className="w-full h-52 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 right-2">
                        <span className="px-2.5 py-1 bg-dental-teal/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full font-body">
                          After
                        </span>
                      </div>
                    </div>
                    {/* Zoom overlay */}
                    <div className="absolute inset-0 bg-dental-blue/0 group-hover:bg-dental-blue/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <ZoomIn className="text-white" size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <h3 className="font-heading font-bold text-dental-blue text-lg mb-0.5">
                      {c.title}
                    </h3>
                    <p className="font-body text-dental-teal text-sm font-semibold">
                      {c.treatment}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLb(null)}
            data-ocid="gallery.modal"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLb(null)}
                data-ocid="gallery.close_button"
                aria-label="Close"
                className="absolute -top-11 right-0 text-white/60 hover:text-white transition-colors p-1.5"
              >
                <X size={26} />
              </button>
              <div className="flex gap-1 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-1/2">
                  <img
                    src={lb.before}
                    alt={`${lb.title} — before`}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1.5 bg-dental-blue/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full font-body">
                      Before
                    </span>
                  </div>
                </div>
                <div className="relative w-1/2">
                  <img
                    src={lb.after}
                    alt={`${lb.title} — after`}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1.5 bg-dental-teal/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full font-body">
                      After
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 font-heading font-bold text-white text-xl">
                {lb.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
