import { useParams, Navigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import MockupImage from "../assets/portofolio/mockup-demo.png";
import FullPreviewImage from "../assets/portofolio/full-demo.png";

type Project = (typeof portfolioData)[number];

const specItems = (project: Project | undefined) => [
  { icon: "mynaui:user-solid", label: "Client", value: project?.client },
  {
    icon: "material-symbols:devices",
    label: "Platform",
    value: project?.platform,
  },
  {
    icon: "bitcoin-icons:calendar-filled",
    label: "Created On",
    value: project?.date,
  },
  { icon: "tabler:world", label: "Website", value: project?.website },
  {
    icon: "material-symbols:category-rounded",
    label: "Project",
    value: "UI/UX Design, Development",
  },
  { icon: "mdi:tools", label: "Tools", value: project?.tools },
];

export default function PortfolioDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.find((item) => item.id === id);

  if (!project) return <Navigate to="/portofolio" replace />;

  return (
    <section className="w-full bg-white relative">
      {/* Background */}
      <div className="absolute top-0 right-0 lg:right-40 w-[500px] h-[500px] lg:w-[870px] lg:h-[870px] bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(226,29,29,0.15)_0%,_rgba(226,29,29,0)_100%)] rounded-full -z-10 pointer-events-none" />

      <div className="relative w-full max-w-[1280px] mx-auto px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-24 lg:mb-32">
          {/* LEFT */}
          <div className="flex flex-col">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5 self-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-red-700 text-[10px] font-bold uppercase tracking-wider">
                DETAIL PROJECT
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl font-bold leading-[1.2] text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-red-700">
                {project.title?.split(" ")[0] || ""}
              </span>{" "}
              <span>{project.title?.split(" ").slice(1).join(" ") || ""}</span>
            </motion.h1>

            <motion.p
              className="text-sm md:text-base text-black/80 leading-relaxed mb-12 xl:max-w-[85%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {project.desc}
            </motion.p>

            {/* SPEC */}
            <motion.div
              className="grid grid-cols-2 gap-y-6 gap-x-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {specItems(project).map((spec, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                    <Icon icon={spec.icon} width={22} height={22} />
                  </div>
                  <div>
                    <span className="text-black text-xs font-semibold block">
                      {spec.label}
                    </span>
                    <span className="text-black/80 text-sm">{spec.value}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.div
              className="flex flex-row items-center gap-3 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* ✅ FIX UTAMA DI SINI */}
              <a
                href={
                  project.website !== "-" &&
                  !project.website?.startsWith("http")
                    ? `https://${project.website}`
                    : project.website !== "-"
                      ? project.website
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
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            className="w-full flex justify-center lg:justify-end lg:pl-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative inline-flex justify-center">
              {/* Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] lg:w-[700px] lg:h-[700px] rounded-full z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(226,29,29,0.5) 0%, rgba(226,29,29,0) 100%)",
                }}
              />

              {/* Shadow */}
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
                className="relative w-full max-w-[400px] object-contain z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* FULL PREVIEW */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-full bg-neutral-50 rounded-[30px] p-4 shadow border">
            <img
              src={FullPreviewImage}
              alt={`${project.title} Full Preview`}
              className="w-full rounded-[24px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
