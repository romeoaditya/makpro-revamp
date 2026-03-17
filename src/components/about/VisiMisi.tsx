// components/about/VisiMisi.tsx
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { visiData, misiData } from "../../data/aboutData";

export default function VisiMisi() {
  return (
    <section className="w-full bg-neutral-50 py-16 lg:py-24 mt-24">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-4">
            <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
              Visi & Misi
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black">
            Arah & Tujuan <span className="text-red-700">MAK Production</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visi */}
          <motion.div
            className="bg-red-700 rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[260px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Icon
                  icon="mdi:eye-outline"
                  width={20}
                  height={20}
                  color="white"
                />
              </div>
              <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">
                Visi
              </span>
            </div>

            <p className="text-white text-2xl lg:text-3xl font-extrabold leading-snug">
              {visiData}
            </p>

            <div className="mt-8 flex gap-2">
              <div className="h-1 w-12 rounded-full bg-white/60" />
              <div className="h-1 w-4 rounded-full bg-white/30" />
              <div className="h-1 w-2 rounded-full bg-white/20" />
            </div>
          </motion.div>

          {/* Misi */}
          <motion.div
            className="bg-white rounded-3xl p-8 lg:p-10 border border-neutral-100 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <Icon
                  icon="mdi:flag-outline"
                  width={20}
                  height={20}
                  color="#b91c1c"
                />
              </div>
              <span className="text-red-700 text-sm font-semibold uppercase tracking-widest">
                Misi
              </span>
            </div>

            <ul className="flex flex-col gap-4">
              {misiData.map((misi, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-red-50 text-red-700 text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-neutral-700 text-sm md:text-[15px] leading-relaxed">
                    {misi}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
