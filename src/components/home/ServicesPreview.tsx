import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";

const servicesPreview = [
  {
    icon: "solar:videocamera-record-bold",
    title: "Videography",
    desc: "Layanan video & foto profesional untuk membuat brand Anda menonjol.",
  },
  {
    icon: "iconoir:design-nib-solid",
    title: "Graphic Design",
    desc: "Identitas visual dan desain brand yang berbicara dalam bahasa brand Anda.",
  },
  {
    icon: "streamline:web-remix",
    title: "Web Development",
    desc: "Website cerdas, responsif, dan modern yang disesuaikan dengan kebutuhan Anda.",
  },
  {
    icon: "fe:vr",
    title: "Virtual Reality",
    desc: "Pengalaman VR imersif yang meningkatkan keterlibatan bisnis Anda.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="w-full py-16 lg:py-24 bg-neutral-50">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-4">
              <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
                LAYANAN KAMI
              </span>
            </div>
            <h2 className="text-3xl lg:text-[42px] font-extrabold leading-[1.3] text-black">
              Apa Yang Kami <span className="text-red-700">Tawarkan.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="flex items-center gap-2 text-red-700 text-sm font-semibold hover:gap-3 transition-all"
          >
            Lihat Semua Layanan <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {servicesPreview.map((service, i) => (
            <Link
              to="/services"
              key={i}
              className="group relative flex flex-col bg-white border border-neutral-200 rounded-2xl p-5 lg:p-6 h-[200px] lg:h-[220px] overflow-hidden hover:border-red-200 hover:shadow-[0px_8px_30px_rgba(226,29,29,0.12)] transition-all duration-300"
            >
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-red-700 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              <div className="flex flex-col gap-3 lg:gap-4 mt-auto z-10">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300">
                  <Icon
                    icon={service.icon}
                    width={18}
                    height={18}
                    className="text-red-700 group-hover:text-white transition-colors duration-300 lg:w-[22px] lg:h-[22px]"
                  />
                </div>
                <div>
                  <h3 className="text-black text-sm lg:text-base font-bold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-[11px] lg:text-xs leading-relaxed line-clamp-2">
                    {service.desc}
                  </p>
                </div>
                <div className="hidden lg:flex items-center gap-1.5 text-red-700 text-xs font-semibold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Pelajari Lebih Lanjut <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
