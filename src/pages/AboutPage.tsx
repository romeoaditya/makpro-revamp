// AboutPage.tsx
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import AboutImages from "../components/about/AboutImages";
import AboutFeatures from "../components/about/AboutFeatures";
import CompanyProfileModal from "../components/CompanyProfileModal";
import { useState } from "react";
import { contactData } from "../data/aboutData";
import VisiMisi from "../components/about/VisiMisi";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="relative w-full max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          {/* Left — Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
          >
            <AboutImages />
          </motion.div>

          {/* Right — Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full max-w-[580px] mx-auto lg:mx-0 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5"
            >
              <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
                TENTANG KAMI
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Tim Kreatif Kami <br className="hidden lg:block" />
              <span className="text-red-700">Menghidupkan Visi Anda.</span>
            </motion.h2>

            {/* Description dengan Lihat Selengkapnya */}
            <motion.div
              className="mb-10 w-full xl:max-w-[90%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ height: isExpanded ? "auto" : "4.5rem" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm md:text-[15px] font-normal text-neutral-700 leading-relaxed">
                    MAK Production merupakan Digital Agency yang menghadirkan
                    solusi kreatif di bidang Photography, Videography, Graphic
                    Design, dan Motion Graphic. Kami percaya bahwa setiap brand
                    dan individu memiliki visi unik, dan kami hadir untuk
                    mewujudkannya melalui karya visual yang berkualitas dan
                    berdampak.
                    <br />
                    <br />
                    Sesuai dengan slogan kami,{" "}
                    <span className="font-bold">
                      "Our Talent for Your Dreams"
                    </span>
                    , kami menggabungkan kreativitas, teknologi, dan strategi
                    untuk menghadirkan hasil terbaik sesuai dengan kebutuhan dan
                    tujuan klien. Dengan tim profesional dan komitmen tinggi,
                    kami siap menjadi mitra dalam setiap langkah perjalanan
                    kreatif Anda.
                  </p>
                </motion.div>

                {/* Fade gradient saat collapsed */}
                <AnimatePresence>
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-sm font-semibold text-red-700 hover:text-red-900 transition-colors duration-200 flex items-center gap-1 mx-auto lg:mx-0"
              >
                {isExpanded ? "Lebih sedikit" : "Lihat selengkapnya"}
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  <Icon icon="mdi:chevron-down" width={18} height={18} />
                </motion.span>
              </button>
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <AboutFeatures />
            </motion.div>

            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <div className="w-full h-px bg-neutral-200 mb-8" />
              <div className="flex flex-row items-center gap-4 lg:gap-6 w-full">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-5 py-3 lg:px-8 lg:py-4 bg-red-700 shadow-[0px_4px_15px_rgba(226,29,29,0.3)] text-white text-sm lg:text-[15px] font-semibold flex items-center gap-2 lg:gap-2.5 hover:bg-red-800 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
                  style={{ borderRadius: "9999px 9999px 9999px 0px" }}
                >
                  Company Profile
                  <Icon
                    icon="material-symbols:download"
                    width={18}
                    height={18}
                    className="lg:w-[26px] lg:h-[26px]"
                  />
                </button>

                <div className="flex items-center gap-3 lg:gap-4 group cursor-pointer transition-transform hover:-translate-y-1">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-[0px_4px_12px_rgba(226,29,29,0.3)] group-hover:shadow-lg transition-all shrink-0">
                    <Icon
                      icon="mingcute:phone-call-line"
                      width={18}
                      height={18}
                      color="white"
                      className="lg:w-[26px] lg:h-[26px]"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs lg:text-sm text-red-700 font-medium whitespace-nowrap">
                      Call Us Now
                    </span>
                    <span className="text-base lg:text-xl font-bold text-black whitespace-nowrap">
                      {contactData.phone}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CompanyProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <VisiMisi />
    </section>
  );
}
