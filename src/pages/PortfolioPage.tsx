import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import PortfolioCard from "../components/portfolio/PortfolioCard";

const INITIAL_SHOW = 6;

export default function PortfolioPage() {
  const [showAll, setShowAll] = useState(false);
  const displayedPortfolio = showAll
    ? portfolioData
    : portfolioData.slice(0, INITIAL_SHOW);

  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="relative w-full max-w-[1280px] mx-auto px-8">
        <div className="mb-14">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
              PROYEK KAMI
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Proyek Terbaru Kami <br />
            <span className="text-red-700">Dibuat dengan Penuh Dedikasi.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence>
            {displayedPortfolio.map((project, index) => (
              <motion.div
                key={project.id}
                className="h-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay:
                    index >= INITIAL_SHOW
                      ? (index - INITIAL_SHOW) * 0.1
                      : 0.2 + index * 0.1,
                }}
              >
                <PortfolioCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {!showAll && portfolioData.length > INITIAL_SHOW && (
            <motion.div
              className="flex justify-center mt-14 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3.5 rounded-full border border-black/20 text-black text-[15px] font-medium hover:bg-black hover:text-white hover:border-black transition-all shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-lg active:scale-95"
              >
                Lihat Selengkapnya
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
