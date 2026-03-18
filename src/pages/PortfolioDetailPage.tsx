import { useParams, Navigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import LaptopMockup from "../components/portfolio/LaptopMockup";

type Project = (typeof portfolioData)[number];

const specItems = (project: Project) => [
  { icon: "mynaui:user-solid", label: "Klien", value: project.client },
  {
    icon: "material-symbols:devices",
    label: "Platform",
    value: project.platform,
  },
  {
    icon: "bitcoin-icons:calendar-filled",
    label: "Tanggal",
    value: project.date,
  },
  { icon: "tabler:world", label: "Website", value: project.website },
  {
    icon: "material-symbols:category-rounded",
    label: "Jenis Project",
    value: project.title,
  },
  { icon: "mdi:tools", label: "Tools", value: project.tools },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

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
              {...fadeUp(0)}
              className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5 self-start"
            >
              <span className="text-red-700 text-[10px] font-bold uppercase tracking-wider">
                DETAIL PROYEK
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-3xl md:text-5xl font-bold leading-[1.2] text-black mb-6"
            >
              <span className="text-red-700">
                {project.title?.split(" ")[0]}
              </span>{" "}
              <span>{project.title?.split(" ").slice(1).join(" ")}</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-sm md:text-base text-black/80 leading-relaxed mb-12 xl:max-w-[85%]"
            >
              {project.desc}
            </motion.p>

            {/* SPEK */}
            <motion.div
              {...fadeUp(0.3)}
              className="grid grid-cols-2 gap-y-6 gap-x-8 mb-12"
            >
              {specItems(project).map((spec, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                    <Icon icon={spec.icon} width={22} height={22} />
                  </div>
                  <div>
                    <span className="text-black text-xs font-semibold block mb-0.5">
                      {spec.label}
                    </span>
                    <span className="text-black/70 text-sm leading-relaxed">
                      {spec.value ?? "-"}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* BUTTON */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-row items-center gap-3 sm:gap-6"
            >
              <a
                href={
                  project.website && project.website !== "-"
                    ? project.website.startsWith("http")
                      ? project.website
                      : `https://${project.website}`
                    : "#"
                }
                target="_blank"
                rel="noreferrer"
                className={`flex-1 sm:flex-none px-6 py-3 bg-red-700 rounded-full text-white text-sm font-semibold flex justify-center items-center hover:scale-105 transition-all ${
                  !project.website || project.website === "-"
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
              >
                Lihat Website
              </a>

              <Link
                to="/portofolio"
                className="flex-1 sm:flex-none px-6 py-3 rounded-full border border-red-700 text-red-700 text-sm font-semibold flex justify-center items-center gap-2 hover:bg-red-50 transition-all"
              >
                Proyek Lain
                <Icon icon="formkit:arrowright" width={16} height={16} />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            className="w-full flex justify-center lg:justify-end lg:pl-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LaptopMockup image={project.image} title={project.title} />
          </motion.div>
        </div>

        {/* DETAIL IMAGE */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {project.details && project.details.length > 0 ? (
            project.details.map((img, i) => (
              <div
                key={i}
                className="w-full bg-neutral-50 rounded-[30px] p-4 shadow-sm border border-neutral-100"
              >
                <img
                  src={img}
                  alt={`${project.title} Detail ${i + 1}`}
                  className="w-full rounded-[20px] object-contain"
                />
              </div>
            ))
          ) : (
            <div className="w-full bg-neutral-50 rounded-[30px] p-4 shadow-sm border border-neutral-100">
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full rounded-[20px] object-contain"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
