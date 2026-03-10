import { AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { useActor } from "../hooks/useActor";

const TREATMENTS = [
  "Teeth Whitening",
  "Dental Implants",
  "Root Canal Treatment",
  "Braces & Aligners",
  "Cosmetic Dentistry",
  "Smile Makeover",
  "General Checkup",
  "Other",
];

interface F {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  treatmentType: string;
  message: string;
}
interface E {
  name?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
  treatmentType?: string;
}

export default function BookPage() {
  const { actor } = useActor();
  const [form, setForm] = useState<F>({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    treatmentType: "",
    message: "",
  });
  const [errors, setErrors] = useState<E>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const validate = (): boolean => {
    const e: E = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone))
      e.phone = "Enter a valid phone number";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.preferredDate) e.preferredDate = "Please select a date";
    if (!form.treatmentType) e.treatmentType = "Please select a treatment";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate() || !actor) return;
    setStatus("loading");
    try {
      await actor.submitAppointment(
        form.name,
        form.phone,
        form.email,
        form.treatmentType,
        form.preferredDate,
        form.message,
      );
      setStatus("success");
      setForm({
        name: "",
        phone: "",
        email: "",
        preferredDate: "",
        treatmentType: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const upd =
    (f: keyof F) =>
    (
      ev: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((p) => ({ ...p, [f]: ev.target.value }));
      if (errors[f as keyof E]) setErrors((p) => ({ ...p, [f]: undefined }));
    };

  const ic = (err?: string) =>
    `w-full px-4 py-3 rounded-xl border font-body text-dental-blue bg-white transition-all focus:outline-none focus:ring-2 focus:ring-dental-teal/40 ${
      err
        ? "border-red-400 bg-red-50/20"
        : "border-border hover:border-dental-teal"
    }`;

  return (
    <main className="pt-20">
      <section className="py-24 hero-gradient noise-overlay relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="eyebrow-dark mb-4">Schedule Your Visit</div>
            <h1
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Book an Appointment
            </h1>
            <p className="font-body text-white/65 text-lg">
              Fill in your details and we&apos;ll confirm within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 mesh-bg">
        <div className="max-w-xl mx-auto px-4">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              data-ocid="book.success_state"
              className="bg-white rounded-3xl p-12 shadow-card text-center"
            >
              <div className="w-16 h-16 rounded-full bg-dental-teal/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="text-dental-teal" size={36} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-dental-blue mb-3">
                Appointment Booked!
              </h2>
              <p className="font-body text-dental-blue/60">
                Thank you! We&apos;ll be in touch shortly to confirm your
                details.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-7 px-7 py-3 bg-dental-teal text-white font-semibold font-body rounded-xl hover:opacity-90 transition"
              >
                Book Another
              </button>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h2 className="font-heading text-xl font-bold text-dental-blue mb-7">
                Your Appointment Details
              </h2>
              {status === "error" && (
                <div
                  data-ocid="book.error_state"
                  className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl mb-5"
                >
                  <AlertCircle className="text-red-500 shrink-0" size={18} />
                  <p className="font-body text-red-600 text-sm">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="b-name"
                    className="block font-body text-sm font-semibold text-dental-blue mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="b-name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={upd("name")}
                    data-ocid="book.input"
                    className={ic(errors.name)}
                  />
                  {errors.name && (
                    <p
                      data-ocid="book.error_state"
                      className="font-body text-red-500 text-xs mt-1"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="b-phone"
                      className="block font-body text-sm font-semibold text-dental-blue mb-1.5"
                    >
                      Phone *
                    </label>
                    <input
                      id="b-phone"
                      type="tel"
                      placeholder="+91 94250 11234"
                      value={form.phone}
                      onChange={upd("phone")}
                      data-ocid="book.input"
                      className={ic(errors.phone)}
                    />
                    {errors.phone && (
                      <p className="font-body text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="b-email"
                      className="block font-body text-sm font-semibold text-dental-blue mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="b-email"
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={upd("email")}
                      data-ocid="book.input"
                      className={ic(errors.email)}
                    />
                    {errors.email && (
                      <p className="font-body text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="b-date"
                      className="block font-body text-sm font-semibold text-dental-blue mb-1.5"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="b-date"
                      type="date"
                      value={form.preferredDate}
                      onChange={upd("preferredDate")}
                      min={new Date().toISOString().split("T")[0]}
                      data-ocid="book.input"
                      className={ic(errors.preferredDate)}
                    />
                    {errors.preferredDate && (
                      <p className="font-body text-red-500 text-xs mt-1">
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="b-treatment"
                      className="block font-body text-sm font-semibold text-dental-blue mb-1.5"
                    >
                      Treatment *
                    </label>
                    <select
                      id="b-treatment"
                      value={form.treatmentType}
                      onChange={upd("treatmentType")}
                      data-ocid="book.select"
                      className={ic(errors.treatmentType)}
                    >
                      <option value="">Select treatment...</option>
                      {TREATMENTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.treatmentType && (
                      <p className="font-body text-red-500 text-xs mt-1">
                        {errors.treatmentType}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="b-msg"
                    className="block font-body text-sm font-semibold text-dental-blue mb-1.5"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="b-msg"
                    rows={4}
                    placeholder="Any concerns or questions for the doctor..."
                    value={form.message}
                    onChange={upd("message")}
                    data-ocid="book.textarea"
                    className={`${ic()} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || !actor}
                  data-ocid="book.submit_button"
                  className="w-full py-3.5 bg-dental-teal text-white font-bold font-body rounded-xl hover:shadow-glow hover:opacity-90 transition-all disabled:opacity-50 mt-1"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Booking...
                    </span>
                  ) : (
                    "Book Appointment →"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
