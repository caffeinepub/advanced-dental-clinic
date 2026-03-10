import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const NAV = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Treatments", path: "/treatments" },
  { label: "Gallery", path: "/gallery" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (path: string) => {
    onNavigate(path);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-sm border-b border-black/[0.06]"
          : "bg-white/80 backdrop-blur-xl"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <button
          type="button"
          onClick={() => go("/")}
          data-ocid="nav.link"
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-dental-blue flex items-center justify-center text-lg shadow-sm">
            🦷
          </div>
          <div className="leading-none">
            <div className="font-heading font-bold text-base text-dental-blue tracking-tight">
              Advanced Dental
            </div>
            <div className="font-body text-[10px] font-semibold text-dental-teal tracking-[0.2em] uppercase">
              Clinic
            </div>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV.map((link) => (
            <button
              type="button"
              key={link.path}
              onClick={() => go(link.path)}
              data-ocid="nav.link"
              className={`relative px-3.5 py-2 text-sm font-medium rounded-lg font-body transition-all duration-200 ${
                currentPath === link.path
                  ? "text-dental-teal font-semibold"
                  : "text-dental-blue/70 hover:text-dental-blue hover:bg-black/[0.04]"
              }`}
            >
              {link.label}
              {currentPath === link.path && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-dental-teal"
                />
              )}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go("/book")}
            data-ocid="nav.primary_button"
            className="ml-3 px-5 py-2.5 bg-dental-teal text-white text-sm font-semibold rounded-xl hover:shadow-glow hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 font-body"
          >
            Book Now
          </button>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg text-dental-blue hover:bg-dental-mint transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-dental-mint overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV.map((link) => (
                <button
                  type="button"
                  key={link.path}
                  onClick={() => go(link.path)}
                  data-ocid="nav.link"
                  className={`px-4 py-3 rounded-xl text-left text-sm font-body font-medium transition-colors ${
                    currentPath === link.path
                      ? "text-dental-teal bg-dental-mint font-semibold"
                      : "text-dental-blue hover:bg-dental-mint/50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => go("/book")}
                className="mt-1 px-4 py-3 bg-dental-teal text-white rounded-xl text-sm font-semibold font-body"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
