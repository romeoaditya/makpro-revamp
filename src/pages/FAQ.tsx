import { useState } from "react";
import { motion } from "framer-motion";
import { faqData } from "../data/faqData";
import FAQAccordion from "../components/faq/FAQAccordion";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <span className="text-red-700 text-[10px] font-medium tracking-wider uppercase">
              PERTANYAAN
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Pertanyaan Yang <br />
            <span className="text-red-700">Sering Diajukan</span>
          </motion.h1>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >
          <FAQAccordion
            faqs={faqData}
            openIndex={openIndex}
            onToggle={handleToggle}
          />
        </motion.div>
      </div>
    </section>
  );
}
