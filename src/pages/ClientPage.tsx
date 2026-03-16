import { useState } from "react";
import { Icon } from "@iconify/react";

// ── Marquee Logos (dari client/logos/) ──
import LogoBlibli from "../assets/client/logos/blibli.png";
import LogoBpom from "../assets/client/logos/bpom.png";
import LogoDana from "../assets/client/logos/dana.png";
import LogoGojek from "../assets/client/logos/gojek.png";
import LogoGoogle from "../assets/client/logos/google.png";
import LogoInterbuana from "../assets/client/logos/interbuana.png";
import LogoKemenag from "../assets/client/logos/kemenag.png";
import LogoKemendag from "../assets/client/logos/kemendag.png";
import LogoKemendikbud from "../assets/client/logos/kemendikbud.png";
import LogoKemenkes from "../assets/client/logos/kemenkes.png";
import LogoKemenparekraf from "../assets/client/logos/Kemenparekraf.png";
import LogoKemensos from "../assets/client/logos/kemensos.png";
import LogoKominfo from "../assets/client/logos/kominfo.png";
import LogoKredivo from "../assets/client/logos/kredivo.png";
import LogoMicrosoft from "../assets/client/logos/microsoft.png";
import LogoPupr from "../assets/client/logos/pupr.png";
import LogoShopee from "../assets/client/logos/shopee.png";
import LogoSpotify from "../assets/client/logos/spotify.png";
import LogoTelkom from "../assets/client/logos/telkom.png";
import LogoTiket from "../assets/client/logos/tiket.png";
import LogoTraveloka from "../assets/client/logos/traveloka.png";
import LogoUber from "../assets/client/logos/uber.png";
import LogoXl from "../assets/client/logos/xl.png";
import LogoZenius from "../assets/client/logos/zenius.png";

// ── Client Showcase Logos (dari client/) ──
import ClientKemenag from "../assets/client/kemenag 1.png";
import ClientKemendag from "../assets/client/kemendag 1.png";
import ClientKemendikbud from "../assets/client/kemendikbud 1.png";
import ClientKemenkes from "../assets/client/kemenkes 1.png";
import ClientKemensos from "../assets/client/kemensos 1.png";
import ClientKominfo from "../assets/client/kominfo 1.png";

// ── Marquee Rows ──
const marqueeRow1 = [
  LogoSpotify,
  LogoShopee,
  LogoGoogle,
  LogoGojek,
  LogoTraveloka,
  LogoTiket,
  LogoBlibli,
  LogoUber,
];
const marqueeRow2 = [
  LogoMicrosoft,
  LogoDana,
  LogoKredivo,
  LogoZenius,
  LogoXl,
  LogoInterbuana,
  LogoBpom,
  LogoTelkom,
];
const marqueeRow3 = [
  LogoKemendag,
  LogoKemenag,
  LogoKominfo,
  LogoKemendikbud,
  LogoKemenkes,
  LogoKemenparekraf,
  LogoKemensos,
  LogoPupr,
];

// ── Clients Data ──
const clientsData = [
  {
    id: 1,
    name: "KEMENTRIAN PERDAGANGAN REPUBLIK INDONESIA",
    desc: "Lembaga pemerintah yang mengatur perdagangan dalam negeri dan luar negeri, menjaga stabilitas harga, serta mendorong ekspor dan perlindungan konsumen.",
    category: "Ministry",
    logo: ClientKemendag,
  },
  {
    id: 2,
    name: "KEMENTRIAN AGAMA REPUBLIK INDONESIA",
    desc: "Kementerian Agama adalah lembaga pemerintah yang mengurus penyelenggaraan urusan keagamaan di Indonesia.",
    category: "Ministry",
    logo: ClientKemenag,
  },
  {
    id: 3,
    name: "KEMENTRIAN KOMUNIKASI DAN DIGITAL",
    desc: "Kementerian yang menangani komunikasi, informatika, penyiaran, dan transformasi digital, termasuk regulasi internet dan keamanan data.",
    category: "Government",
    logo: ClientKominfo,
  },
  {
    id: 4,
    name: "KEMENTRIAN PENDIDIKAN DAN KEBUDAYAAN",
    desc: "Kementerian yang mengelola pendidikan, kebudayaan, riset, dan teknologi untuk meningkatkan kualitas pendidikan dan pelestarian budaya di Indonesia.",
    category: "Education",
    logo: ClientKemendikbud,
  },
  {
    id: 5,
    name: "KEMENTRIAN KESEHATAN REPUBLIK INDONESIA",
    desc: "Kementerian yang mengelola layanan kesehatan, pengendalian penyakit, dan edukasi kesehatan untuk meningkatkan kualitas hidup masyarakat di Indonesia.",
    category: "Ministry",
    logo: ClientKemenkes,
  },
  {
    id: 6,
    name: "KEMENTRIAN SOSIAL REPUBLIK INDONESIA",
    desc: "Kementerian yang menangani perlindungan dan kesejahteraan sosial, termasuk bantuan sosial dan layanan bagi kelompok rentan di Indonesia.",
    category: "Government",
    logo: ClientKemensos,
  },
];

const categories = [
  { label: "All", value: "All" },
  { label: "Government", value: "Government" },
  { label: "Education", value: "Education" },
  { label: "Ministry", value: "Ministry" },
];

// ── Marquee Row Component ──
function MarqueeRow({
  logos,
  direction = "left",
}: {
  logos: string[];
  direction?: "left" | "right";
}) {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex gap-16 items-center ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } hover:[animation-play-state:paused]`}
        style={{ width: "max-content" }}
      >
        {doubled.map((logo, i) => (
          <div key={i} className="flex items-center justify-center shrink-0">
            <img
              src={logo}
              alt="client logo"
              className="h-14 w-auto max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

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
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>

      <div className="w-full max-w-[1280px] mx-auto px-8 py-16 lg:py-24">
        {/* ════ HERO SECTION ════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-20">
          {/* Left */}
          <div className="flex flex-col">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-6 self-start">
              <span className="text-red-700 text-[10px] font-medium tracking-wider uppercase">
                CLIENTS & PARTNERS
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black mb-6">
              Collaborating With <br />
              <span className="text-red-700">
                Forward-Thinking <br /> Clients
              </span>
            </h1>
            <p className="text-sm text-black font-normal leading-5 max-w-sm">
              We work with visionary clients to build impactful and <br />
              high-quality digital experiences.
            </p>
          </div>

          {/* Right — Marquee */}
          <div className="flex flex-col gap-8 overflow-hidden">
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
          </div>
        </div>

        {/* ════ CLIENT SHOWCASE ════ */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* ✅ Sidebar — hanya desktop */}
          <div className="hidden lg:block w-[260px] shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <Icon
                icon="mdi:filter"
                width={20}
                height={20}
                className="text-zinc-800"
              />
              <span className="text-zinc-800 text-sm font-semibold">
                Filter
              </span>
            </div>
            <div className="w-full h-px bg-black/10 mb-4" />

            {/* Category Dropdown */}
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center justify-between w-full mb-2 px-2.5 py-2 hover:bg-neutral-50 rounded-lg transition-colors"
            >
              <span className="text-black/80 text-sm font-semibold">
                Category
              </span>
              <Icon
                icon="mdi:chevron-down"
                width={20}
                height={20}
                className={`text-zinc-800 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Collapsible options */}
            <div
              className={`flex flex-col gap-1 overflow-hidden transition-all duration-200 ${
                isCategoryOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {categories.map((cat) => {
                const isChecked = selectedCategories.includes(cat.value);
                return (
                  <button
                    key={cat.value}
                    onClick={() => toggleCategory(cat.value)}
                    className="flex items-center gap-2.5 px-2.5 py-2 hover:bg-neutral-50 rounded-lg transition-colors text-left"
                  >
                    <div
                      className={`w-4 h-4 rounded-[5px] border flex items-center justify-center shrink-0 transition-colors ${
                        isChecked
                          ? "bg-red-700 border-red-700"
                          : "border-black/20 bg-white"
                      }`}
                    >
                      {isChecked && (
                        <Icon
                          icon="mdi:check"
                          width={12}
                          height={12}
                          color="white"
                        />
                      )}
                    </div>
                    <span className="text-zinc-800 text-sm font-semibold flex-1">
                      {cat.label}
                    </span>
                    <span className="text-black/30 text-xs font-semibold">
                      {countByCategory(cat.value)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="w-full h-px bg-black/10 my-4" />
            <button
              onClick={clearFilter}
              className="px-4 py-2 rounded-md border border-black/20 text-zinc-800 text-sm font-semibold hover:bg-neutral-50 transition-colors"
            >
              Clear type
            </button>
          </div>

          {/* Client Grid */}
          <div className="flex-1">
            <h3 className="text-zinc-800 text-sm font-semibold mb-4">
              Client Showcase
            </h3>
            <div className="w-full h-px bg-black/10 mb-6" />

            {/* ✅ Mobile Filter Pills — di atas grid */}
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

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  className="flex flex-col bg-neutral-50 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.10)] p-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm shrink-0">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <h4 className="text-zinc-800 text-sm font-bold uppercase leading-snug mb-3">
                    {client.name}
                  </h4>
                  <p className="text-zinc-800/70 text-xs font-normal leading-relaxed flex-1 mb-5">
                    {client.desc}
                  </p>
                  <button className="flex items-center gap-1.5 text-red-700 text-xs font-medium hover:gap-2.5 transition-all self-start">
                    View More
                    <Icon icon="formkit:arrowright" width={14} height={14} />
                  </button>
                </div>
              ))}
            </div>

            {filteredClients.length === 0 && (
              <div className="flex items-center justify-center h-40 text-neutral-400 text-sm">
                No clients found for selected category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
