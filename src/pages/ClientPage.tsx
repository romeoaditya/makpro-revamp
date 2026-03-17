import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  clientsData,
  categories,
  marqueeRow1,
  marqueeRow2,
  marqueeRow3,
} from "../data/clientsData";
import MarqueeRow from "../components/clients/MarqueeRow";
import ClientCard from "../components/clients/ClientCard";
import FilterSidebar from "../components/clients/FilterSidebar";

export default function ClientsPage() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);

  const toggleCategory = (value: string) => {
    if (value === "All") {
      setSelectedCategories(["All"]);
      return;
    }
    const without = selectedCategories.filter((c) => c !== "All");
    if (without.includes(value)) {
      const next = without.filter((c) => c !== value);
      setSelectedCategories(next.length === 0 ? ["All"] : next);
    } else {
      setSelectedCategories([...without, value]);
    }
  };

  const clearFilter = () => setSelectedCategories(["All"]);
  const filteredClients = selectedCategories.includes("All")
    ? clientsData
    : clientsData.filter((c) => selectedCategories.includes(c.category));
  const countByCategory = (cat: string) =>
    cat === "All"
      ? clientsData.length
      : clientsData.filter((c) => c.category === cat).length;

  return (
    <section className="w-full bg-white overflow-hidden">
      <style>{`
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee-left { animation: marquee-left 30s linear infinite; }
        .animate-marquee-right { animation: marquee-right 30s linear infinite; }
      `}</style>

      <div className="w-full max-w-[1280px] mx-auto px-8 py-16 lg:py-24">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-20">
          {/* Left */}
          <div className="flex flex-col">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-6 self-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            >
              <span className="text-red-700 text-[10px] font-medium tracking-wider uppercase">
                CLIENTS & PARTNERS
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              Collaborating With <br />
              <span className="text-red-700">
                Forward-Thinking <br /> Clients
              </span>
            </motion.h1>

            <motion.p
              className="text-sm text-black font-normal leading-5 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            >
              We work with visionary clients to build impactful and <br />
              high-quality digital experiences.
            </motion.p>
          </div>

          {/* Right — Marquee */}
          <motion.div
            className="flex flex-col gap-8 overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {[
              { logos: marqueeRow1, dir: "right" as const },
              { logos: marqueeRow2, dir: "left" as const },
              { logos: marqueeRow3, dir: "right" as const },
            ].map((row, i) => (
              <div key={i} className="relative">
                <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                <MarqueeRow logos={row.logos} direction={row.dir} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* CLIENT SHOWCASE */}
        <motion.div
          className="flex flex-col lg:flex-row gap-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
        >
          <FilterSidebar
            selectedCategories={selectedCategories}
            isCategoryOpen={isCategoryOpen}
            onToggleCategory={toggleCategory}
            onClearFilter={clearFilter}
            onToggleCategoryOpen={() => setIsCategoryOpen(!isCategoryOpen)}
            countByCategory={countByCategory}
          />

          <div className="flex-1">
            <h3 className="text-zinc-800 text-sm font-semibold mb-4">
              Client Showcase
            </h3>
            <div className="w-full h-px bg-black/10 mb-6" />

            <div className="lg:hidden flex items-center gap-2 mb-6 overflow-x-auto pb-2">
              {categories.map((cat) => {
                const isActive = selectedCategories.includes(cat.value);
                return (
                  <button
                    key={cat.value}
                    onClick={() => toggleCategory(cat.value)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border transition-all shrink-0 ${
                      isActive
                        ? "bg-red-700 text-white border-red-700"
                        : "bg-white text-zinc-800 border-black/20 hover:border-red-300"
                    }`}
                  >
                    {cat.label}
                    <span
                      className={`ml-1.5 text-xs ${isActive ? "text-white/70" : "text-black/30"}`}
                    >
                      {countByCategory(cat.value)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredClients.map((client) => (
                <ClientCard key={client.id} client={client} />
              ))}
            </div>

            {filteredClients.length === 0 && (
              <div className="flex items-center justify-center h-40 text-neutral-400 text-sm">
                No clients found for selected category.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
