import { useState } from "react";
import { Icon } from "@iconify/react";
import Foto1 from "../assets/about/foto1g.png";
import Foto2 from "../assets/about/foto2g.png";
import CompanyProfileModal from "../components/CompanyProfileModal";

function StatBadge({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute bg-white rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.12)] px-4 py-2.5 flex flex-col items-center justify-center z-30 transition-transform hover:scale-105 ${className}`}
    >
      <span className="text-red-700 text-xl font-extrabold leading-tight">
        {title}
      </span>
      <span className="text-neutral-500 text-[11px] font-medium whitespace-nowrap">
        {subtitle}
      </span>
    </div>
  );
}

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      {/* ── Modal Injected Here ── */}
      <CompanyProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="relative w-full max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          {/* ════ LEFT COLUMN ════ */}
          <div
            className="relative w-full mx-auto lg:mx-0"
            style={{ height: "560px", maxWidth: "560px" }}
          >
            {/* Foto atas kiri — z-index lebih rendah */}
            <div
              className="absolute top-0 left-0 rounded-[24px] overflow-hidden bg-zinc-200 z-10"
              style={{ width: "330px", height: "370px" }}
            >
              <img
                src={Foto2}
                alt="MAK Production Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foto bawah kanan — langsung overlap, shadow ke bawah saja */}
            <div
              className="absolute bottom-0 right-0 rounded-[24px] overflow-hidden bg-zinc-200 z-20 border-8 border-white"
              style={{ width: "304px", height: "400px" }}
            >
              <img
                src={Foto1}
                alt="MAK Production Team Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ✅ Badge dirapikan sesuai posisi foto */}

            {/* Services — kiri tengah, di tepi foto atas */}
            <StatBadge
              title="5+"
              subtitle="Services"
              className="top-[28%] -left-6 z-30"
            />

            {/* Active Clients — kanan atas, di atas foto bawah */}
            <StatBadge
              title="5+"
              subtitle="Active Clients"
              className="top-[5%] right-[30%] z-30"
            />

            {/* Projects Done — bawah kiri, di bawah foto atas */}
            <StatBadge
              title="10+"
              subtitle="Projects Done"
              className="bottom-[12%] left-[35%] z-30"
            />

            {/* Team Work — kanan tengah, di tepi foto bawah */}
            <StatBadge
              title="20+"
              subtitle="Team Work"
              className="top-[25%] -right-6 z-30"
            />
          </div>

          {/* ════ RIGHT COLUMN ════ */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full max-w-[580px] mx-auto lg:mx-0 lg:pl-10">
            {/* Tag Pill */}
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5">
              <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
                ABOUT US
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black mb-5">
              Our Creative Team <br className="hidden lg:block" />
              <span className="text-red-700">Inspires Your Vision.</span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-[15px] font-normal text-neutral-700 leading-relaxed mb-10 w-full xl:max-w-[90%]">
              We're a passionate team from MAK Production, dedicated to bringing
              creative ideas to life from visual design to digital storytelling.
              We help brands connect with audiences through innovation and
              collaboration.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-6 mb-10 text-left w-full">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-md">
                  <Icon
                    icon="solar:videocamera-record-bold"
                    width={26}
                    height={26}
                    color="white"
                  />
                </div>
                <div className="flex flex-col gap-1.5 justify-center mt-1">
                  <h4 className="text-base font-bold text-black">
                    Creative Production
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-[340px]">
                    From concept to execution we craft high-quality visuals and
                    stories that engage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-md">
                  <Icon icon="mdi:web" width={28} height={28} color="white" />
                </div>
                <div className="flex flex-col gap-1.5 justify-center mt-1">
                  <h4 className="text-base font-bold text-black">
                    Digital Development
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-[340px]">
                    Innovative web and app solutions designed to make your brand
                    stand out.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-200 mb-8" />

            {/* CTA Buttons */}
            {/* CTA Buttons */}
            <div className="flex flex-row items-center gap-4 lg:gap-6 w-full">
              {/* Company Profile */}
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

              {/* Call Us Now */}
              <div className="flex items-center gap-3 lg:gap-4 group cursor-pointer transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-[0px_4px_12px_rgba(226,29,29,0.4)] group-hover:shadow-lg transition-all shrink-0">
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
                    (021) 589-076-47
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
