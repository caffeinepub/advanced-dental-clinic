const LINKS = [
  { label: "Home", path: "/" },
  { label: "About Dr. Sharma", path: "/about" },
  { label: "Treatments", path: "/treatments" },
  { label: "Before & After Gallery", path: "/gallery" },
  { label: "Patient Testimonials", path: "/testimonials" },
  { label: "Book Appointment", path: "/book" },
];

export default function Footer({
  onNavigate,
}: { onNavigate: (p: string) => void }) {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;
  return (
    <footer className="bg-dental-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-dental-teal/20 border border-dental-teal/30 flex items-center justify-center text-lg">
                🦷
              </div>
              <div className="leading-none">
                <div className="font-heading font-bold text-white text-base">
                  Advanced Dental
                </div>
                <div className="font-body text-[10px] font-semibold text-dental-teal tracking-[0.2em] uppercase">
                  Clinic
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-5">
              Bringing precision, comfort, and artistry to every smile. Modern
              dentistry designed around your confidence.
            </p>
            <div className="font-body text-sm text-white/55 flex flex-col gap-1.5">
              <span>📍 42, Sunshine Tower, MG Road, Bangalore</span>
              <span>📞 +91-98765-43210</span>
              <span>✉️ hello@advanceddental.in</span>
            </div>
          </div>
          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {LINKS.map((l) => (
                <li key={l.path}>
                  <button
                    type="button"
                    onClick={() => onNavigate(l.path)}
                    className="font-body text-sm text-white/55 hover:text-dental-teal transition-colors"
                  >
                    → {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Hours */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-5">
              Working Hours
            </h4>
            <div className="font-body text-sm flex flex-col gap-2 text-white/55 mb-6">
              {[
                ["Monday – Saturday", "9:00 AM – 7:00 PM"],
                ["Sunday", "10:00 AM – 2:00 PM"],
              ].map(([d, h]) => (
                <div key={d} className="flex justify-between">
                  <span>{d}</span>
                  <span className="text-dental-teal font-medium">{h}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => onNavigate("/book")}
              className="px-5 py-2.5 bg-dental-teal text-white text-sm font-semibold font-body rounded-xl hover:shadow-glow hover:opacity-90 transition-all"
            >
              Book Appointment →
            </button>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/40">
            © {year} Advanced Dental Clinic. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/40">
            Built with ❤️ using{" "}
            <a
              href={utm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dental-teal hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
