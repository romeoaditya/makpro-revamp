import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "6285691507889";
const WA_MESSAGE = "Halo, saya ingin bertanya tentang layanan MAK Production.";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-50">
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 52 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 52 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              background: "linear-gradient(135deg, #dc2626, #7f1d1d)",
            }}
            className="w-[52px] h-[52px] rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[49]"
            aria-label="Back to top"
          >
            <Icon icon="mdi:chevron-up" width={26} height={26} color="white" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-[52px] h-[52px] bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:scale-110 active:scale-95 transition-all z-[50]"
        aria-label="Chat WhatsApp"
      >
        <Icon icon="mdi:whatsapp" width={28} height={28} color="white" />
      </motion.a>
    </div>
  );
}
