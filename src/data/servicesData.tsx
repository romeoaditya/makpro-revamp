import IconPr from "../assets/services/icons/pr.png";
import IconAe from "../assets/services/icons/ae.png";
import IconDavinci from "../assets/services/icons/davinci.png";
import IconPs from "../assets/services/icons/ps.png";
import IconAi from "../assets/services/icons/ai.png";
import IconFigma from "../assets/services/icons/figma.png";
import IconCanva from "../assets/services/icons/canva.png";
import IconCinema4d from "../assets/services/icons/cinema4d.png";
import IconBlender from "../assets/services/icons/blender.png";
import IconAa from "../assets/services/icons/aa.png";
import IconVscode from "../assets/services/icons/vscode.png";
import IconReact from "../assets/services/icons/react.png";
import IconHtml from "../assets/services/icons/html.png";
import IconCss from "../assets/services/icons/css.png";
import IconUe from "../assets/services/icons/ue.png";
import IconOculus from "../assets/services/icons/oculus.png";

import ImgVideography from "../assets/services/videography.png";
import ImgGraphicDesign from "../assets/services/graphic design.png";
import ImgMotionGraphic from "../assets/services/motion graphic.png";
import ImgWebDev from "../assets/services/web development.png";
import ImgVr from "../assets/services/vr.png";

export interface SoftwareItem {
  icon: string;
  name: string;
}

export interface ServiceItem {
  title: string;
  description: React.ReactNode;
  image: string;
  howWeHelp: string[];
  software: SoftwareItem[];
}

export const servicesData: ServiceItem[] = [
  {
    title: "Videografi",
    description: (
      <>
        <strong>Storytelling Visual yang Menginspirasi dan Terhubung</strong>
        <br />
        MAK Production menyediakan layanan video dan foto profesional untuk
        membantu bisnis Anda tampil menonjol di berbagai platform.
      </>
    ),
    image: ImgVideography,
    howWeHelp: [
      "Video Profil Perusahaan",
      "Dokumentasi Acara",
      "Video Komersial & Produk",
      "Layanan Fotografi",
    ],
    software: [
      { icon: IconPr, name: "Adobe Premiere Pro" },
      { icon: IconAe, name: "Adobe After Effects" },
      { icon: IconDavinci, name: "DaVinci Resolve" },
    ],
  },
  {
    title: "Desain Grafis",
    description: (
      <>
        <strong>Menciptakan Identitas Visual yang Mewakili Brand Anda</strong>
        <br />
        Jika Anda ingin membangun brand yang menarik, fungsional, dan mudah
        diingat, tim kami siap memberikan hasil terbaik.
      </>
    ),
    image: ImgGraphicDesign,
    howWeHelp: [
      "Logo & Identitas Brand",
      "Desain Cetak & Digital",
      "Materi Pemasaran",
      "Desain Kemasan",
    ],
    software: [
      { icon: IconPs, name: "Adobe Photoshop" },
      { icon: IconAi, name: "Adobe Illustrator" },
      { icon: IconFigma, name: "Figma" },
      { icon: IconCanva, name: "Canva" },
    ],
  },
  {
    title: "Motion Graphic",
    description: (
      <>
        <strong>Mengubah Ide Menjadi Animasi yang Menarik</strong>
        <br />
        Kami membuat animasi berkualitas tinggi mulai dari konsep dan storyboard
        hingga visual akhir untuk menyampaikan pesan Anda secara unik dan
        berkesan.
      </>
    ),
    image: ImgMotionGraphic,
    howWeHelp: [
      "Video Penjelasan (Explainer)",
      "Desain Motion 2D/3D",
      "Animasi Brand",
      "Animasi Infografis",
    ],
    software: [
      { icon: IconAe, name: "Adobe After Effects" },
      { icon: IconCinema4d, name: "Cinema 4D" },
      { icon: IconBlender, name: "Blender" },
      { icon: IconAa, name: "Adobe Animate" },
    ],
  },
  {
    title: "Pengembangan Web",
    description: (
      <>
        <strong>Membangun Website Modern, Responsif, dan Berkualitas</strong>
        <br />
        Kami berkomitmen menghadirkan website profesional dengan desain menarik,
        performa optimal, serta fitur yang sesuai dengan kebutuhan bisnis Anda.
      </>
    ),
    image: ImgWebDev,
    howWeHelp: [
      "Website Perusahaan",
      "Desain Landing Page",
      "Pengembangan E-Commerce",
      "Maintenance & Optimasi",
    ],
    software: [
      { icon: IconVscode, name: "VS Code" },
      { icon: IconReact, name: "React" },
      { icon: IconHtml, name: "HTML5" },
      { icon: IconCss, name: "CSS3" },
    ],
  },
  {
    title: "Realitas Virtual",
    description: (
      <>
        <strong>Pengalaman Virtual Imersif untuk Pertumbuhan Bisnis</strong>
        <br />
        MAK Pro berfokus pada pengembangan konten dan pemanfaatan teknologi VR
        untuk menghadirkan pengalaman interaktif yang meningkatkan engagement
        bisnis Anda.
      </>
    ),
    image: ImgVr,
    howWeHelp: [
      "Pembuatan Virtual Tour",
      "Pelatihan Berbasis VR",
      "Simulasi Produk",
      "Showcase 3D Interaktif",
    ],
    software: [
      { icon: IconUe, name: "Unreal Engine" },
      { icon: IconOculus, name: "Meta Oculus" },
      { icon: IconBlender, name: "Blender" },
    ],
  },
];
