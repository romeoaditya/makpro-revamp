import { useParams, Navigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { portfolioData } from "./PortfolioPage";

// Assets fallback
import MockupImage from "../assets/portofolio/mockup-demo.png";
import FullPreviewImage from "../assets/portofolio/full-demo.png";

export default function PortfolioDetailPage() {
  const { id } = useParams<{ id: string }>();

  // Find the requested project from the global data.
  const project = portfolioData.find((item) => item.id === id);

  // If not found, redirect back to portofolio page or show a 404 (using Navigate)
  if (!project) {
    return <Navigate to="/portofolio" replace />;
  }

  return (
    <section className="w-full bg-white relative overflow-hidden">
      {/* Red Radial Background Glow */}
      <div className="absolute top-0 right-0 lg:right-40 w-[500px] h-[500px] lg:w-[870px] lg:h-[870px] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(226,29,29,0.15)_0%,_rgba(226,29,29,0)_100%)] rounded-full -z-10 pointer-events-none" />

      <div className="relative w-full max-w-[1280px] mx-auto px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* ════ UPPER SECTION (Hero) ════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-24 lg:mb-32">
          {/* Left Column: Info Setup */}
          <div className="flex flex-col animate-fade-in-up">
            {/* Tag Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5 self-start">
              <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
                DETAIL PROJECT
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.2] text-black mb-6">
              <span className="text-red-700">
                {project.title.split(" ")[0]}
              </span>{" "}
              <span>{project.title.split(" ").slice(1).join(" ")}</span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base font-normal text-black/80 leading-relaxed mb-12 xl:max-w-[85%]">
              {project.desc}
            </p>

            {/* Specs Grid (2 Columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
              {/* Client */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <Icon icon="mynaui:user-solid" width={22} height={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-xs font-semibold mb-1">
                    Client
                  </span>
                  <span className="text-black/80 text-sm">
                    {project.client}
                  </span>
                </div>
              </div>

              {/* Platform */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <Icon
                    icon="material-symbols:devices"
                    width={22}
                    height={22}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-xs font-semibold mb-1">
                    Platform
                  </span>
                  <span className="text-black/80 text-sm">
                    {project.platform}
                  </span>
                </div>
              </div>

              {/* Created On */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <Icon
                    icon="bitcoin-icons:calendar-filled"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-xs font-semibold mb-1">
                    Created On
                  </span>
                  <span className="text-black/80 text-sm">{project.date}</span>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <Icon icon="tabler:world" width={24} height={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-xs font-semibold mb-1">
                    Website
                  </span>
                  <span className="text-black/80 text-sm">
                    {project.website}
                  </span>
                </div>
              </div>

              {/* Project Type */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <Icon
                    icon="material-symbols:category-rounded"
                    width={22}
                    height={22}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-xs font-semibold mb-1">
                    Project
                  </span>
                  <span className="text-black/80 text-sm">
                    UI/UX Design, Development
                  </span>
                </div>
              </div>

              {/* Tools */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                  <Icon icon="mdi:tools" width={22} height={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-xs font-semibold mb-1">
                    Tools
                  </span>
                  <span className="text-black/80 text-sm">{project.tools}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-3 sm:gap-6">
              <a
                href={
                  project.website !== "-" && !project.website.startsWith("http")
                    ? `https://${project.website}`
                    : "#"
                }
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-red-700 to-red-900 rounded-full shadow-[0px_8px_20px_rgba(226,29,29,0.3)] text-white text-sm font-semibold flex justify-center items-center hover:scale-105 active:scale-95 transition-all"
              >
                Lihat Website
              </a>
              <Link
                to="/portofolio"
                className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-red-700 text-red-700 text-sm font-semibold flex justify-center items-center gap-2 hover:bg-red-50 active:scale-95 transition-all"
              >
                More Project
                <Icon icon="formkit:arrowright" width={16} height={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Mockup */}
          <div className="relative w-full flex justify-center lg:justify-end animate-fade-in-up lg:pl-10">
            <div className="relative inline-flex justify-center">
              {/* ✅ Red glow — relatif terhadap gambar langsung */}
              {/* ✅ Red glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] lg:w-[700px] lg:h-[700px] rounded-full pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(226,29,29,0.5) 0%, rgba(226,29,29,0) 100%)",
                }}
              />

              {/* ✅ Shadow hitam — lebih ke bawah dan lebih tebal */}
              <div
                className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[80%] h-[70px] z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
                  filter: "blur(20px)",
                }}
              />
              <img
                src={MockupImage}
                alt={`${project.title} Mockup`}
                className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[500px] object-contain z-10"
              />
            </div>
          </div>
        </div>

        {/* ════ MIDDLE SECTION (Full Browser Preview) ════ */}
        <div className="w-full animate-fade-in-up flex flex-col items-center">
          <div className="w-full bg-neutral-50 rounded-[30px] p-2 md:p-3 lg:p-4 shadow-[0px_0px_15px_rgba(0,0,0,0.06)] border border-neutral-100">
            <img
              src={FullPreviewImage}
              alt={`${project.title} Full Preview`}
              className="w-full rounded-[24px] shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
