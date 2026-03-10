import { AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { useActor } from "../hooks/useActor";

interface CF {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INFO = [
  {
    icon: "📍",
    label: "Address",
    value: "12, Prestige Plaza, MG Road, Indore — 452001",
  },
  { icon: "📞", label: "Phone", value: "+91-94250-11234" },
  { icon: "✉️", label: "Email", value: "hello@advanceddental.in" },
  {
    icon: "🕐",
    label: "Hours",
    value: "Mon–Sat: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 2:00 PM",
  },
];

export default function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState<CF>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Partial<CF>>({});

  const validate = () => {
    const e: Partial<CF> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate() || !actor) return;
    setStatus("loading");
    try {
      await actor.submitContactRequest(
        form.name,
        form.phone,
        form.email,
        form.message,
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const upd =
    (f: keyof CF) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [f]: ev.target.value }));
      if (errors[f]) setErrors((p) => ({ ...p, [f]: undefined }));
    };

  const ic = (err?: string) =>
    `w-full px-4 py-3 rounded-xl border font-body text-dental-blue bg-white transition-all focus:outline-none focus:ring-2 focus:ring-dental-teal/40 ${
      err ? "border-red-400" : "border-border hover:border-dental-teal"
    }`;

  return (
    <main className="pt-20">
      <section className="py-24 hero-gradient noise-overlay relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="eyebrow-dark mb-4">Get In Touch</div>
            <h1
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Contact Us
            </h1>
            <p className="font-body text-white/65 text-lg">
              Have a question? We&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-heading text-2xl font-bold text-dental-blue mb-7">
                  Visit Our Clinic
                </h2>
                <div className="flex flex-col gap-5 mb-8">
                  {INFO.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-dental-mint flex items-center justify-center text-lg shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-body font-semibold text-dental-blue text-sm">
                          {item.label}
                        </div>
                        <div className="font-body text-dental-blue/60 text-sm whitespace-pre-line">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl border-2 border-dental-teal/25 bg-dental-mint/30 p-8 text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <div className="font-heading font-bold text-dental-blue text-base mb-1">
                    Find Us Here
                  </div>
                  <div className="font-body text-dental-blue/55 text-sm">
                    12, Prestige Plaza, MG Road, Indore
                  </div>
                  <div className="mt-3 font-body text-xs text-dental-teal font-semibold">
                    📌 Near Rajwada Chowk
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  data-ocid="contact.success_state"
                  className="bg-white rounded-3xl p-12 shadow-card text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-14 h-14 rounded-full bg-dental-teal/10 flex items-center justify-center mb-4">
                    <CheckCircle className="text-dental-teal" size={30} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-dental-blue mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-body text-dental-blue/55 text-sm">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-5 px-6 py-2.5 bg-dental-teal text-white font-semibold font-body rounded-xl hover:opacity-90 transition text-sm"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <div className="bg-white rounded-3xl p-8 shadow-card">
                  <h2 className="font-heading text-xl font-bold text-dental-blue mb-6">
                    Send a Message
                  </h2>
                  {status === "error" && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl mb-5"
                    >
                      <AlertCircle
                        className="text-red-500 shrink-0"
                        size={16}
                      />
                      <p className="font-body text-red-600 text-sm">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label
                        htmlFor="c-name"
                        className="block font-body text-sm font-semibold text-dental-blue mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={upd("name")}
                        data-ocid="contact.input"
                        className={ic(errors.name)}
                      />
                      {errors.name && (
                        <p className="font-body text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="c-email"
                          className="block font-body text-sm font-semibold text-dental-blue mb-1.5"
                        >
                          Email *
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          placeholder="you@email.com"
                          value={form.email}
                          onChange={upd("email")}
                          data-ocid="contact.input"
                          className={ic(errors.email)}
                        />
                        {errors.email && (
                          <p className="font-body text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="c-phone"
                          className="block font-body text-sm font-semibold text-dental-blue mb-1.5"
                        >
                          Phone
                        </label>
                        <input
                          id="c-phone"
                          type="tel"
                          placeholder="+91..."
                          value={form.phone}
                          onChange={upd("phone")}
                          data-ocid="contact.input"
                          className={ic()}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="c-msg"
                        className="block font-body text-sm font-semibold text-dental-blue mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="c-msg"
                        rows={5}
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={upd("message")}
                        data-ocid="contact.textarea"
                        className={`${ic(errors.message)} resize-none`}
                      />
                      {errors.message && (
                        <p className="font-body text-red-500 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={status === "loading" || !actor}
                      data-ocid="contact.submit_button"
                      className="w-full py-3.5 bg-dental-teal text-white font-bold font-body rounded-xl hover:shadow-glow hover:opacity-90 transition-all disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message →"
                      )}
                    </button>
                  </form>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
