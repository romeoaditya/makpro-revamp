// AboutPage.tsx
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import AboutImages from "../components/about/AboutImages";
import AboutFeatures from "../components/about/AboutFeatures";
import CompanyProfileModal from "../components/CompanyProfileModal";
import { useState } from "react";
import { contactData } from "../data/aboutData";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                ABOUT US
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Our Creative Team <br className="hidden lg:block" />
              <span className="text-red-700">Inspires Your Vision.</span>
            </motion.h2>

            <motion.p
              className="text-sm md:text-[15px] font-normal text-neutral-700 leading-relaxed mb-10 w-full xl:max-w-[90%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              We're a passionate team from MAK Production, dedicated to bringing
              creative ideas to life from visual design to digital storytelling.
              We help brands connect with audiences through innovation and
              collaboration.
            </motion.p>

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
    </section>
  );
}
