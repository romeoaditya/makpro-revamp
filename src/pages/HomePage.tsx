import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Icon } from "@iconify/react";

import HeroImg from "../assets/hero-image.png";
import ServiceBadge from "../components/ServiceBadge";

import Img1 from "../assets/portofolio/1.png";
import Img2 from "../assets/portofolio/2.png";
import Img3 from "../assets/portofolio/3.png";

const servicesPreview = [
  {
    icon: "solar:videocamera-record-bold",
    title: "Videography",
    desc: "Professional video & photo services to make your brand stand out.",
  },
  {
    icon: "iconoir:design-nib-solid",
    title: "Graphic Design",
    desc: "Visual identities and brand designs that speak your brand language.",
  },
  {
    icon: "streamline:web-remix",
    title: "Web Development",
    desc: "Smart, responsive, and modern websites tailored to your needs.",
  },
  {
    icon: "fe:vr",
    title: "Virtual Reality",
    desc: "Immersive VR experiences that enhance your business engagement.",
  },
];

const testimonialsPreview = [
  {
    name: "Romeo Aditya",
    role: "Fullstack Developer at NASA",
    text: "Saya kagum dengan profesionalisme dan kecepatan kerja mereka. Setiap revisi selalu ditanggapi dengan cepat dan hasil akhirnya luar biasa.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    text: "Hasil kerja MAK Production benar-benar melampaui ekspektasi kami. Tim yang sangat profesional dan kreatif.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Marketing Manager at Tokopedia",
    text: "Proses kerja yang transparan dan komunikatif. Sangat puas dengan hasil akhir project kami bersama MAK Production.",
    rating: 5,
  },
];

const portfolioPreview = [
  { title: "e-RKAM Bimtek Digital", date: "20 Mei 2024", image: Img1 },
  { title: "VR BIPA Program", date: "20 Mei 2024", image: Img2 },
  { title: "Animasi Konsumen Kemendag", date: "20 Mei 2024", image: Img3 },
];

export default function HomePage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <style>{`
        @keyframes scroll-badges {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-badges { animation: scroll-badges 12s linear infinite; }
        .animate-scroll-badges:hover { animation-play-state: paused; }
      `}</style>

      {/* ════════════════════════════
          1. HERO
      ════════════════════════════ */}
      <section className="w-full">
        <div className="relative w-full max-w-[1280px] mx-auto px-8 pt-6 pb-16">
          <div className="relative min-h-[560px] flex items-center pt-8">
            {/* Left */}
            <div className="relative z-10 w-full lg:w-[45%] flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-[50px] shadow-[0px_6px_15px_0px_rgba(0,0,0,0.10)] mb-8">
                <span className="text-red-700 text-xs font-medium">
                  Fuel Your Digital Journey!
                </span>
                <Zap size={18} className="text-red-700 fill-red-700" />
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.4] text-black mb-6 lg:text-[42px] lg:leading-[1.35]">
                Transforming Your Visions into{" "}
                <span className="text-red-700">Digital Reality.</span>
              </h1>
              <p className="text-sm font-normal text-black leading-6 mb-10 max-w-sm">
                We bring your ideas to life through creativity, innovation, and
                technology turning concepts into stunning digital experiences.
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="flex-1 sm:flex-none px-6 py-3 bg-red-700 rounded-[50px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.25)] text-white text-sm font-semibold text-center hover:bg-red-800 hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </Link>
                <Link
                  to="/portofolio"
                  className="flex-1 sm:flex-none px-6 py-3 rounded-[50px] border border-red-700 text-red-700 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-red-50 hover:scale-105 transition-all duration-200"
                >
                  View More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right — Desktop */}
            <div className="absolute top-8 right-0 w-[58%] h-full hidden lg:flex items-center justify-center">
              <div className="relative w-[580px] h-[580px] flex items-center justify-center">
                <img
                  src={HeroImg}
                  alt="MAK Production Team"
                  className="w-full h-full object-contain relative z-10"
                />

                {/* ✅ Icon bulat — static, tidak berputar */}
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

                {/* Badges */}
                <div
                  className="absolute z-30"
                  style={{ top: "6%", right: "0%" }}
                >
                  <ServiceBadge
                    icon={
                      <Icon icon="file-icons:video" width={24} height={24} />
                    }
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
                      <Icon
                        icon="streamline:web-remix"
                        width={24}
                        height={24}
                      />
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
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden mt-8 flex flex-col items-center gap-6">
            <div className="relative w-full max-w-[320px] mx-auto">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(226,29,29,0.15) 0%, rgba(226,29,29,0) 100%)",
                }}
              />

              {/* ✅ Icon bulat mobile — static */}
              <div
                className="absolute w-[38px] h-[38px] bg-red-700 rounded-full flex items-center justify-center shadow-[0px_4px_12px_rgba(185,28,28,0.4)] z-20"
                style={{
                  top: "5%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
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
                style={{
                  top: "40%",
                  left: "-4%",
                  transform: "translateY(-50%)",
                }}
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
            </div>

            {/* Scroll badges */}
            <div className="w-full overflow-hidden">
              <div
                className="flex animate-scroll-badges"
                style={{ width: "max-content" }}
              >
                {[...Array(3)]
                  .flatMap(() => [
                    {
                      icon: "iconoir:design-nib-solid",
                      label: "Graphic Design",
                    },
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
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          2. SERVICES PREVIEW
      ════════════════════════════ */}
      <section className="w-full py-16 lg:py-20 bg-neutral-50">
        <div className="w-full max-w-[1280px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-4">
                <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="text-3xl lg:text-[42px] font-extrabold leading-[1.3] text-black">
                What We <span className="text-red-700">Offer.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-red-700 text-sm font-semibold hover:gap-3 transition-all"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesPreview.map((service, i) => (
              <div
                key={i}
                className="flex flex-col bg-white rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.06)] border border-neutral-100 hover:shadow-[0px_8px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-md mb-5">
                  <Icon
                    icon={service.icon}
                    width={26}
                    height={26}
                    color="white"
                  />
                </div>
                <h3 className="text-black text-base font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="mt-4 flex items-center gap-1.5 text-red-700 text-xs font-semibold hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          3. PORTFOLIO PREVIEW
      ════════════════════════════ */}
      <section className="w-full py-16 lg:py-20">
        <div className="w-full max-w-[1280px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-4">
                <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
                  OUR PROJECTS
                </span>
              </div>
              <h2 className="text-3xl lg:text-[42px] font-extrabold leading-[1.3] text-black">
                Latest <span className="text-red-700">Projects.</span>
              </h2>
            </div>
            <Link
              to="/portofolio"
              className="flex items-center gap-2 text-red-700 text-sm font-semibold hover:gap-3 transition-all"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioPreview.map((project, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white rounded-2xl border border-neutral-100 p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-l from-red-600 to-red-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-full">
                    {project.date}
                  </div>
                </div>
                <h3 className="text-black text-base font-bold leading-snug group-hover:text-red-700 transition-colors">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          4. TESTIMONIALS PREVIEW
      ════════════════════════════ */}
      <section className="w-full py-16 lg:py-20 bg-neutral-50">
        <div className="w-full max-w-[1280px] mx-auto px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-4">
              <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl lg:text-[42px] font-extrabold leading-[1.3] text-black">
              What Our Clients <span className="text-red-700">Say's.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsPreview.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col bg-white rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] border-b-[5px] border-red-700 p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute -top-4 right-4 w-10 h-9 bg-red-700 rounded-lg flex items-center justify-center shadow-md">
                  <Icon
                    icon="mdi:format-quote-close"
                    width={22}
                    height={22}
                    color="white"
                  />
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, s) => (
                    <Icon
                      key={s}
                      icon="mdi:star"
                      width={18}
                      height={18}
                      className="text-amber-300"
                    />
                  ))}
                </div>
                <p className="text-black text-sm font-normal leading-relaxed flex-1 mb-6">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-red-700 flex items-center justify-center bg-neutral-200 shrink-0">
                    <Icon
                      icon="mdi:account"
                      width={24}
                      height={24}
                      className="text-neutral-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black text-sm font-semibold">
                      {item.name}
                    </span>
                    <span className="text-red-700 text-xs font-normal">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link
              to="/testimonials"
              className="px-8 py-3 rounded-full border border-black/20 text-black text-sm font-medium hover:bg-black hover:text-white transition-all flex items-center gap-2"
            >
              View All Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          5. CTA BANNER
      ════════════════════════════ */}
      <section className="w-full py-16 lg:py-20">
        <div className="w-full max-w-[1280px] mx-auto px-8">
          <div className="relative w-full bg-gradient-to-r from-red-700 to-red-900 rounded-[30px] px-8 py-14 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
            <div className="absolute top-[-60px] right-[-60px] w-[250px] h-[250px] rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute bottom-[-80px] right-[100px] w-[200px] h-[200px] rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute top-[-30px] left-[40%] w-[120px] h-[120px] rounded-full bg-white/5 pointer-events-none" />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">
              <h2 className="text-3xl lg:text-[42px] font-extrabold leading-[1.3] text-white mb-4">
                Ready to Start Your <br className="hidden lg:block" />
                Next Project?
              </h2>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                Let's work together to bring your vision to life. Contact us
                today and let our team craft the perfect digital solution for
                you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 z-10 shrink-0">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-white text-red-700 rounded-full text-sm font-bold hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap"
              >
                Get Started Now
              </Link>
              <Link
                to="/portofolio"
                className="px-8 py-3.5 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white/10 hover:scale-105 active:scale-95 transition-all whitespace-nowrap flex items-center gap-2"
              >
                View Our Work <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
