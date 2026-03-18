// ── Marquee Logos ──
import LogoBahasaSastra from "../assets/client/logos/bahasa dan sastra.png";
import LogoFestivo from "../assets/client/logos/festivo.png";
import LogoForit from "../assets/client/logos/ptforit.png";
import LogoKemenag from "../assets/client/logos/kemenag.png";
import LogoKemendag from "../assets/client/logos/kemendag.png";
import LogoKemendikbud from "../assets/client/logos/kemendikbud.png";
import LogoKemnaker from "../assets/client/logos/kemnaker.png";
import LogoKominfo from "../assets/client/logos/kominfo.png";
import LogoShintaVR from "../assets/client/logos/shintavr.png";
import LogoMan4jakarta from "../assets/client/logos/man4jakarta.png";
import LogoMuaraPrima from "../assets/client/logos/muaraprima.png";
import LogoBatikPunta from "../assets/client/logos/batikpunta.png";
import LogoDewanStudio from "../assets/client/logos/dewanstudio.png";
import LogoSaveTheChildren from "../assets/client/logos/savethechildren.png";
import LogoKreasi from "../assets/client/logos/kreasi.png";

// ── Client Showcase Logos ──
import ClientKemenag from "../assets/client/kemenag 1.png";
import ClientKemendag from "../assets/client/kemendag 1.png";
import ClientKemendikbud from "../assets/client/kemendikbud 1.png";
import ClientLogoFestivo from "../assets/client/festivo.png";
import ClientKominfo from "../assets/client/kominfo 1.png";
import ClientLogoig from "../assets/client/logoig.png";
import ClientManIcSerpong from "../assets/client/man ic serpong.png";
import ClientMan2jakarta from "../assets/client/man2jakarta.png";
import ClientMan4jakarta from "../assets/client/man4jakarta.png";
import ClientMtsn14jatim from "../assets/client/mtsn14jatim.png";
import ClientPtforit from "../assets/client/ptforit.png";
import ClientShintavr from "../assets/client/shintavr.png";
import ClientLogoSaveTheChildren from "../assets/client/logosavethechildren.png";
import ClientLogoKemnaker from "../assets/client/kemnaker.png";
import ClientLogoBatikPunta from "../assets/client/batikpunta.png";
import ClientLogoDewanStudio from "../assets/client/dewanstudio.png";
import ClientLogoMuaraPrima from "../assets/client/muaraprima.png";
import ClientLogoKreasi from "../assets/client/kreasi.png";

export interface ClientItem {
  id: number;
  name: string;
  desc: string;
  category: string;
  logo: string;
}

export const marqueeRow1 = [
  LogoKreasi,
  LogoKemendag,
  LogoMuaraPrima,
  LogoKominfo,
  LogoBatikPunta,
  LogoKemnaker,
  LogoDewanStudio,
  LogoSaveTheChildren,
  LogoKemenag,
  LogoFestivo,
  LogoKemendikbud,
];

export const marqueeRow2 = [
  LogoShintaVR,
  LogoFestivo,
  LogoBahasaSastra,
  LogoKemendag,
  LogoMuaraPrima,
  LogoKreasi,
  LogoMan4jakarta,
  LogoDewanStudio,
  LogoKominfo,
  LogoKemnaker,
  LogoSaveTheChildren,
];

export const marqueeRow3 = [
  LogoKemenag,
  LogoBatikPunta,
  LogoForit,
  LogoKemendikbud,
  LogoMuaraPrima,
  LogoBahasaSastra,
  LogoKominfo,
  LogoDewanStudio,
  LogoMan4jakarta,
  LogoFestivo,
  LogoKreasi,
];

export const clientsData: ClientItem[] = [
  {
    id: 1,
    name: "KEMENTERIAN PERDAGANGAN REPUBLIK INDONESIA",
    desc: "Lembaga pemerintah yang mengatur perdagangan dalam negeri dan luar negeri, menjaga stabilitas harga, serta mendorong ekspor dan perlindungan konsumen.",
    category: "Ministry",
    logo: ClientKemendag,
  },
  {
    id: 2,
    name: "KEMENTERIAN AGAMA REPUBLIK INDONESIA",
    desc: "Kementerian Agama adalah lembaga pemerintah yang mengurus penyelenggaraan urusan keagamaan di Indonesia.",
    category: "Ministry",
    logo: ClientKemenag,
  },
  {
    id: 3,
    name: "KEMENTERIAN KOMUNIKASI DAN DIGITAL",
    desc: "Kementerian yang menangani komunikasi, informatika, penyiaran, dan transformasi digital, termasuk regulasi internet dan keamanan data.",
    category: "Government",
    logo: ClientKominfo,
  },
  {
    id: 4,
    name: "KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN",
    desc: "Kementerian yang mengelola pendidikan, kebudayaan, riset, dan teknologi untuk meningkatkan kualitas pendidikan dan pelestarian budaya di Indonesia.",
    category: "Education",
    logo: ClientKemendikbud,
  },
  {
    id: 5,
    name: "Festivo",
    desc: "Brand yang bergerak di bidang event dan hiburan, menghadirkan pengalaman acara yang kreatif, modern, dan berkesan.",
    category: "Business",
    logo: ClientLogoFestivo,
  },
  {
    id: 6,
    name: "MAN IC SERPONG",
    desc: "Madrasah Aliyah Negeri Insan Cendekia Serpong, sekolah unggulan berbasis riset dan teknologi di bawah Kementerian Agama.",
    category: "Education",
    logo: ClientManIcSerpong,
  },
  {
    id: 7,
    name: "MAN 2 JAKARTA",
    desc: "Madrasah Aliyah Negeri 2 Jakarta, salah satu madrasah unggulan di ibu kota dengan program akademik dan keagamaan terpadu.",
    category: "Education",
    logo: ClientMan2jakarta,
  },
  {
    id: 8,
    name: "MAN 4 JAKARTA",
    desc: "Madrasah Aliyah Negeri 4 Jakarta, lembaga pendidikan menengah atas berbasis agama dengan prestasi akademik tinggi.",
    category: "Education",
    logo: ClientMan4jakarta,
  },
  {
    id: 9,
    name: "MTsN 14 JAKARTA TIMUR",
    desc: "Madrasah Tsanawiyah Negeri 14 Jakarta Timur, lembaga pendidikan menengah pertama berbasis agama Islam di Jakarta Timur.",
    category: "Education",
    logo: ClientMtsn14jatim,
  },
  {
    id: 10,
    name: "PT FORIT",
    desc: "Perusahaan teknologi informasi yang bergerak di bidang pengembangan solusi digital dan transformasi bisnis.",
    category: "Government",
    logo: ClientPtforit,
  },
  {
    id: 11,
    name: "SHINTA VR",
    desc: "Perusahaan yang bergerak di bidang pengembangan konten Virtual Reality untuk berbagai kebutuhan industri dan pendidikan.",
    category: "Government",
    logo: ClientShintavr,
  },
  {
    id: 12,
    name: "Ikatan Guru Indonesia",
    desc: "Organisasi profesi yang berfokus pada peningkatan kompetensi dan pengembangan guru di Indonesia.",
    category: "Government",
    logo: ClientLogoig,
  },
  {
    id: 13,
    name: "Save the Children",
    desc: "Organisasi internasional yang berfokus pada perlindungan dan peningkatan kesejahteraan anak melalui program pendidikan, kesehatan, dan bantuan kemanusiaan.",
    category: "Government",
    logo: ClientLogoSaveTheChildren,
  },
  {
    id: 14,
    name: "Kementerian Ketenagakerjaan Republik Indonesia",
    desc: "Lembaga pemerintah yang bertugas dalam perumusan dan pelaksanaan kebijakan di bidang ketenagakerjaan, termasuk pelatihan kerja, hubungan industrial, dan perlindungan tenaga kerja.",
    category: "Government",
    logo: ClientLogoKemnaker,
  },
  {
    id: 15,
    name: "Batik Punta",
    desc: "Brand lokal yang bergerak di bidang fashion batik dengan fokus pada desain modern dan kualitas produk yang unggul.",
    category: "Business",
    logo: ClientLogoBatikPunta,
  },
  {
    id: 16,
    name: "Muara Prima Organizer",
    desc: "Event organizer profesional yang menyediakan layanan perencanaan dan pelaksanaan berbagai acara dengan konsep kreatif dan terorganisir.",
    category: "Business",
    logo: ClientLogoMuaraPrima,
  },
  {
    id: 17,
    name: "Dewan Studio",
    desc: "Studio kreatif yang berfokus pada produksi konten visual dan multimedia untuk kebutuhan branding dan promosi.",
    category: "Creative",
    logo: ClientLogoDewanStudio,
  },
  {
    id: 18,
    name: "Badan Pengembangan dan Pembinaan Bahasa",
    desc: "Lembaga di bawah Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi yang berfokus pada pengembangan, pembinaan, dan pelindungan bahasa serta sastra Indonesia.",
    category: "Government",
    logo: ClientKemendikbud,
  },
  {
    id: 19,
    name: "KREASI",
    desc: "Kolaborasi untuk Edukasi Anak Indonesia, sebuah inisiatif yang berfokus pada pengembangan dan peningkatan kualitas pendidikan anak melalui program kreatif dan kolaboratif.",
    category: "Government",
    logo: ClientLogoKreasi,
  },
];

export const categories = [
  { label: "All", value: "All" },
  { label: "Pemerintah", value: "Government" },
  { label: "Kementerian", value: "Ministry" },
  { label: "Pendidikan", value: "Education" },
  { label: "Bisnis", value: "Business" },
  { label: "Kreatif", value: "Creative" },
];
