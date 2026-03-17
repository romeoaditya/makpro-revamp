import { Link } from "react-router-dom";
import type { PortfolioItem } from "../../data/portfolioData";

interface PortfolioCardProps {
  project: PortfolioItem;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Link
      to={`/portofolio/${project.id}`}
      className="group flex flex-col h-full bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.12)] border border-neutral-100 p-4 transition-all duration-300"
    >
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-neutral-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-l from-red-600 to-red-900 border border-white/30 text-white text-[10px] font-bold py-1.5 px-3 rounded-full shadow-md z-10">
          {project.date}
        </div>
      </div>
      <div className="flex flex-col flex-1 px-1 pb-1">
        <h3 className="text-black text-lg font-bold leading-snug mb-2 group-hover:text-red-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
          {project.desc}
        </p>
      </div>
    </Link>
  );
}
