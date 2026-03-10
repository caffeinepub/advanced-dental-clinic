import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const msg = encodeURIComponent(
    "Hello, I would like to book a dental appointment.",
  );
  return (
    <motion.a
      href={`https://wa.me/919425011234?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg relative wp-pulse"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.93 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 16 }}
    >
      <SiWhatsapp className="text-white text-2xl relative z-10" />
    </motion.a>
  );
}
