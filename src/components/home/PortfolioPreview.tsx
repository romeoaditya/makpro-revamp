// PortfolioPreview.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export default function PortfolioPreview() {
  const preview = portfolioData.slice(0, 3);

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Header */}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {preview.map((project) => (
            <Link
              key={project.id}
              to={`/portofolio/${project.id}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Date badge */}
              <div className="absolute top-4 right-4 bg-red-700 text-white text-[10px] font-bold py-1.5 px-3 rounded-full z-10">
                {project.date}
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <h3 className="text-white text-lg font-bold leading-snug mb-2 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed line-clamp-2 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                  {project.desc}
                </p>

                <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  <span className="text-red-400 text-xs font-semibold">
                    View Project
                  </span>
                  <ArrowRight size={12} className="text-red-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/portofolio"
            className="px-8 py-3 rounded-full border border-black/20 text-black text-sm font-medium hover:bg-black hover:text-white transition-all flex items-center gap-2"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
