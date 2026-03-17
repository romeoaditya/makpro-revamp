import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import HeroImg from "../../assets/hero-image.png";
import ServiceBadge from "../ServiceBadge";

export default function HeroSection() {
  return (
    <section className="w-full">
      <style>{`
        @keyframes scroll-badges {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-badges { animation: scroll-badges 12s linear infinite; }
        .animate-scroll-badges:hover { animation-play-state: paused; }
      `}</style>

      <div className="relative w-full max-w-[1280px] mx-auto px-8 pt-6 pb-16">
        <div className="relative min-h-[560px] flex items-center pt-8">
          {/* Left */}
          <div className="relative z-10 w-full lg:w-[45%] flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-[50px] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.10)] mb-8">
                <span className="text-red-700 text-xs font-medium">
                  Wujudkan Perjalanan Digital Anda!
                </span>
                <Zap size={18} className="text-red-700 fill-red-700" />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl font-extrabold leading-[1.4] text-black mb-6 lg:text-[42px] lg:leading-[1.35]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              Wujudkan Visi Anda Menjadi{" "}
              <span className="text-red-700">Realitas Digital.</span>
            </motion.h1>

            <motion.p
              className="text-sm font-normal text-black leading-6 mb-10 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            >
              Kami mewujudkan ide Anda melalui kreativitas, inovasi, dan
              teknologi, mengubah konsep menjadi pengalaman digital yang
              menarik.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            >
              <Link
                to="/contact"
                className="flex-1 sm:flex-none px-6 py-3 bg-red-700 rounded-[50px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.25)] text-white text-sm font-semibold text-center hover:bg-red-800 hover:scale-105 transition-all duration-200"
              >
                Mulai Sekarang
              </Link>
              <Link
                to="/portofolio"
                className="flex-1 sm:flex-none px-6 py-3 rounded-[50px] border border-red-700 text-red-700 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-red-50 hover:scale-105 transition-all duration-200"
              >
                Lihat Selengkapnya <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right — Desktop */}
          <motion.div
            className="absolute top-8 right-0 w-[58%] h-full hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-[580px] h-[580px] flex items-center justify-center">
              <img
                src={HeroImg}
                alt="MAK Production Team"
                className="w-full h-full object-contain relative z-10"
              />
              <div
                className="absolute z-20 w-[52px] h-[52px] bg-red-700 rounded-full flex items-center justify-center shadow-[0px_4px_12px_rgba(185,28,28,0.4)] hover:scale-110 transition-transform cursor-pointer"
                style={{
                  top: "2%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Icon
                  icon="raphael:pallete"
                  width={26}
                  height={26}
                  color="white"
                />
              </div>
              <div
                className="absolute z-20 w-[52px] h-[52px] bg-red-700 rounded-full flex items-center justify-center shadow-[0px_4px_12px_rgba(185,28,28,0.4)] hover:scale-110 transition-transform cursor-pointer"
                style={{
                  top: "42%",
                  left: "-2%",
                  transform: "translateY(-50%)",
                }}
              >
                <Icon
                  icon="ion:rocket-sharp"
                  width={26}
                  height={26}
                  color="white"
                />
              </div>
              <div
                className="absolute z-20 w-[52px] h-[52px] bg-red-700 rounded-full flex items-center justify-center shadow-[0px_4px_12px_rgba(185,28,28,0.4)] hover:scale-110 transition-transform cursor-pointer"
                style={{
                  top: "42%",
                  right: "-2%",
                  transform: "translateY(-50%)",
                }}
              >
                <Icon
                  icon="game-icons:brain"
                  width={26}
                  height={26}
                  color="white"
                />
              </div>
              <div className="absolute z-30" style={{ top: "6%", right: "0%" }}>
                <ServiceBadge
                  icon={<Icon icon="file-icons:video" width={24} height={24} />}
                  label="Company Profile"
                />
              </div>
              <div
                className="absolute z-30"
                style={{ top: "10%", left: "12%" }}
              >
                <ServiceBadge
                  icon={
                    <Icon
                      icon="iconoir:design-nib-solid"
                      width={24}
                      height={24}
                    />
                  }
                  label="Graphic Design"
                />
              </div>
              <div
                className="absolute z-30"
                style={{ bottom: "9%", right: "10%" }}
              >
                <ServiceBadge
                  icon={
                    <Icon icon="streamline:web-remix" width={24} height={24} />
                  }
                  label="Web Development"
                />
              </div>
              <div
                className="absolute z-30"
                style={{ bottom: "6%", left: "5%" }}
              >
                <ServiceBadge
                  icon={<Icon icon="bi:headset-vr" width={24} height={24} />}
                  label="Virtual Reality"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden mt-8 flex flex-col items-center gap-6">
          <motion.div
            className="relative w-full max-w-[320px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(226,29,29,0.15) 0%, rgba(226,29,29,0) 100%)",
              }}
            />
            <div
              className="absolute w-[38px] h-[38px] bg-red-700 rounded-full flex items-center justify-center shadow-[0px_4px_12px_rgba(185,28,28,0.4)] z-20"
              style={{ top: "5%", left: "50%", transform: "translateX(-50%)" }}
            >
              <Icon
                icon="raphael:pallete"
                width={18}
                height={18}
                color="white"
              />
            </div>
            <div
              className="absolute w-[38px] h-[38px] bg-red-700 rounded-full flex items-center justify-center shadow-[0px_4px_12px_rgba(185,28,28,0.4)] z-20"
              style={{ top: "40%", left: "-4%", transform: "translateY(-50%)" }}
            >
              <Icon
                icon="ion:rocket-sharp"
                width={18}
                height={18}
                color="white"
              />
            </div>
            <div
              className="absolute w-[38px] h-[38px] bg-red-700 rounded-full flex items-center justify-center shadow-[0px_4px_12px_rgba(185,28,28,0.4)] z-20"
              style={{
                top: "40%",
                right: "-4%",
                transform: "translateY(-50%)",
              }}
            >
              <Icon
                icon="game-icons:brain"
                width={18}
                height={18}
                color="white"
              />
            </div>
            <img
              src={HeroImg}
              alt="MAK Production Team"
              className="relative z-10 w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            className="w-full overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div
              className="flex animate-scroll-badges"
              style={{ width: "max-content" }}
            >
              {[...Array(3)]
                .flatMap(() => [
                  { icon: "iconoir:design-nib-solid", label: "Graphic Design" },
                  { icon: "file-icons:video", label: "Company Profile" },
                  { icon: "bi:headset-vr", label: "Virtual Reality" },
                  { icon: "streamline:web-remix", label: "Web Development" },
                ])
                .map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 mx-2 px-4 py-2.5 bg-white rounded-[10px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-neutral-100 shrink-0"
                  >
                    <div className="w-5 h-5 flex items-center justify-center text-red-700 shrink-0">
                      <Icon icon={item.icon} width={18} height={18} />
                    </div>
                    <span className="text-black text-xs font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
