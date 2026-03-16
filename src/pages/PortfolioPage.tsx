import { Link } from "react-router-dom";
import Img1 from "../assets/portofolio/1.png";
import Img2 from "../assets/portofolio/2.png";
import Img3 from "../assets/portofolio/3.png";
import Img4 from "../assets/portofolio/4.png";
import Img5 from "../assets/portofolio/5.png";
import Img6 from "../assets/portofolio/6.png";

export const portfolioData = [
  {
    id: "e-rkam-bimtek",
    title: "e-RKAM Bimtek Digital",
    desc: "Konten digital untuk kegiatan bimbingan teknis e-RKAM oleh Kemenag.",
    date: "20 Mei 2024",
    image: Img1,
    client: "Kemenag",
    platform: "Web Application",
    tools: "Next.js, Tailwind CSS, Figma",
    website: "kemenag.go.id",
  },
  {
    id: "vr-bipa",
    title: "VR BIPA Program",
    desc: "Pengembangan program pembelajaran bahasa berbasis VR untuk pengalaman belajar yang lebih imersif dan interaktif.",
    date: "20 Mei 2024",
    image: Img2,
    client: "Kemendikbud",
    platform: "Virtual Reality",
    tools: "Unity, Blender, Oculus SDK",
    website: "bipa.kemdikbud.go.id",
  },
  {
    id: "animasi-konsumen",
    title: "Animasi Konsumen Kemendag",
    desc: "Produksi animasi edukatif bagi Direktorat Pemberdayaan Konsumen Kemendag untuk menyampaikan pesan dengan cara menarik.",
    date: "20 Mei 2024",
    image: Img3,
    client: "Kemendag",
    platform: "Motion Video",
    tools: "After Effects, Illustrator",
    website: "kemendag.go.id",
  },
  {
    id: "web-lomba",
    title: "Web Lomba Kepala Madrasah",
    desc: "Pembuatan website lomba Kepala Madrasah untuk mempermudah pendaftaran dan publikasi kegiatan secara digital.",
    date: "20 Mei 2024",
    image: Img4,
    client: "Kemendikbud",
    platform: "Web Application",
    tools: "Next.js, ShadcnUI, Figma",
    website: "www.lomba.com",
  },
  {
    id: "cover-buku",
    title: "Desain Cover dan Layout Buku",
    desc: "Desain layout profesional untuk buku panduan kegiatan pelatihan dan publikasi lembaga pemerintahan.",
    date: "20 Mei 2024",
    image: Img5,
    client: "Lembaga Pemerintah",
    platform: "Print / PDF",
    tools: "InDesign, Photoshop",
    website: "-",
  },
  {
    id: "career-expo",
    title: "Digital Career Expo",
    desc: "Pembuatan desain promosi untuk acara Digital Career Expo “Finding Career in Digital Era”.",
    date: "20 Mei 2024",
    image: Img6,
    client: "Career Event Org",
    platform: "Digital & Print",
    tools: "Illustrator, Photoshop",
    website: "careerexpo.com",
  },
];

export default function PortfolioPage() {
  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="relative w-full max-w-[1280px] mx-auto px-8">
        {/* Header Section */}
        <div className="mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5">
            <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
              OUR PROJECTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black">
            Our latest cool projects{" "}
            <span className="text-red-700">
              <br />
              crafted with passion.
            </span>
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <Link
              to={`/portofolio/${project.id}`}
              key={index}
              className="group flex flex-col bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.12)] border border-neutral-100 p-4 transition-all duration-300"
            >
              {/* Image Container with Badge */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Date Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-l from-red-600 to-red-900 border border-white/30 text-white text-[10px] font-bold py-1.5 px-3 rounded-full shadow-md z-10">
                  {project.date}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1 px-1 pb-1">
                <h3 className="text-black text-lg font-bold leading-snug mb-2 group-hover:text-red-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-14 w-full">
          <button className="px-8 py-3.5 rounded-full border border-black/20 text-black text-[15px] font-medium hover:bg-black hover:text-white hover:border-black transition-all shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
