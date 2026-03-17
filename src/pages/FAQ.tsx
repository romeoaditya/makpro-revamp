import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { faqData } from "../data/faqData";
import FAQAccordion from "../components/faq/FAQAccordion";
import FaqImage from "../assets/faq/faq-image.png";

const ITEMS_PER_PAGE = 5;

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);
  const currentFaqs = faqData.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const handleToggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setOpenIndex(null);
  };

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

        {/* Main */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left — Image */}
          <motion.div
            className="hidden lg:block w-[45%] shrink-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="sticky top-8">
              <img
                src={FaqImage}
                alt="FAQ Illustration"
                className="w-full max-w-[480px] h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            className="flex-1 flex flex-col gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          >
            <FAQAccordion
              faqs={currentFaqs}
              openIndex={openIndex}
              onToggle={handleToggle}
            />

            <div className="flex items-center justify-end gap-4 mt-2">
              <span className="text-red-700 text-sm font-normal">
                Tampilkan Lainnya
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handlePageChange(Math.max(0, page - 1))}
                  disabled={page === 0}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                    page === 0
                      ? "border-neutral-300 text-neutral-300 cursor-not-allowed"
                      : "border-neutral-600 text-neutral-600 hover:bg-neutral-50"
                  }`}
                >
                  <Icon icon="mdi:chevron-left" width={20} height={20} />
                </button>
                <span className="text-black text-base font-normal">
                  {page + 1}/{totalPages}
                </span>
                <button
                  onClick={() =>
                    handlePageChange(Math.min(totalPages - 1, page + 1))
                  }
                  disabled={page === totalPages - 1}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                    page === totalPages - 1
                      ? "border-neutral-300 text-neutral-300 cursor-not-allowed"
                      : "border-red-700 text-red-700 hover:bg-red-50"
                  }`}
                >
                  <Icon icon="mdi:chevron-right" width={20} height={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
