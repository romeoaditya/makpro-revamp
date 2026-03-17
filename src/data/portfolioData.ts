import Img1 from "../assets/portofolio/1.png";
import Img2 from "../assets/portofolio/2.png";
import Img3 from "../assets/portofolio/3.png";
import Img4 from "../assets/portofolio/4.png";
import Img5 from "../assets/portofolio/5.png";
import Img6 from "../assets/portofolio/6.png";

export interface PortfolioItem {
  id: string;
  title: string;
  desc: string;
  date: string;
  image: string;
  client?: string;
  platform?: string;
  website?: string;
  tools?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "e-rkam",
    title: "e-RKAM Bimtek Digital",
    desc: "Konten digital untuk kegiatan bimbingan teknis e-RKAM oleh Kemenag.",
    date: "20 Mei 2024",
    image: Img1,
    client: "Kemenag",
    platform: "Web Application",
    website: "www.kemenag.go.id",
    tools: "Figma, React",
  },
  {
    id: "vr-bipa",
    title: "VR BIPA Program",
    desc: "Pengembangan program pembelajaran bahasa berbasis VR untuk pengalaman belajar yang lebih imersif dan interaktif.",
    date: "20 Mei 2024",
    image: Img2,
    client: "Kemendikbud",
    platform: "VR Application",
    website: "-",
    tools: "Unreal Engine, Blender",
  },
  {
    id: "animasi-kemendag",
    title: "Animasi Konsumen Kemendag",
    desc: "Produksi animasi edukatif bagi Direktorat Pemberdayaan Konsumen Kemendag untuk menyampaikan pesan dengan cara menarik.",
    date: "20 Mei 2024",
    image: Img3,
    client: "Kemendag",
    platform: "Digital Media",
    website: "-",
    tools: "After Effects, Cinema 4D",
  },
  {
    id: "web-lomba",
    title: "Web Lomba Kepala Madrasah",
    desc: "Pembuatan website lomba Kepala Madrasah untuk mempermudah pendaftaran dan publikasi kegiatan secara digital.",
    date: "20 Mei 2024",
    image: Img4,
    client: "Kominfo",
    platform: "Web Application",
    website: "www.lomba.com",
    tools: "Next.js, ShadcnUI, Figma",
  },
  {
    id: "desain-buku",
    title: "Desain Cover dan Layout Buku",
    desc: "Desain layout profesional untuk buku panduan kegiatan pelatihan dan publikasi lembaga pemerintahan.",
    date: "20 Mei 2024",
    image: Img5,
    client: "Kemendikbud",
    platform: "Print Media",
    website: "-",
    tools: "Adobe InDesign, Illustrator",
  },
  {
    id: "digital-career",
    title: "Digital Career Expo",
    desc: "Pembuatan desain promosi untuk acara Digital Career Expo “Finding Career in Digital Era”.",
    date: "20 Mei 2024",
    image: Img6,
    client: "Kominfo",
    platform: "Digital Media",
    website: "-",
    tools: "Photoshop, Illustrator",
  },
];
