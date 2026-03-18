import ClientKemendag from "../assets/client/kemendag 1.png";
import ClientKemenag from "../assets/client/kemenag 1.png";
import ClientKominfo from "../assets/client/kominfo 1.png";
import ClientKemendikbud from "../assets/client/kemendikbud 1.png";
import ClientLogoFestivo from "../assets/client/festivo.png";
import ClientManIcSerpong from "../assets/client/man ic serpong.png";
import ClientMan2jakarta from "../assets/client/man2jakarta.png";
import ClientMan4jakarta from "../assets/client/man4jakarta.png";
import ClientMtsn14jatim from "../assets/client/mtsn14jatim.png";
import ClientPtforit from "../assets/client/ptforit.png";
import ClientShintavr from "../assets/client/shintavr.png";
import ClientLogoig from "../assets/client/logoig.png";
import ClientLogoSaveTheChildren from "../assets/client/logosavethechildren.png";
import ClientLogoKemnaker from "../assets/client/kemnaker.png";
import ClientLogoBatikPunta from "../assets/client/batikpunta.png";
import ClientLogoMuaraPrima from "../assets/client/muaraprima.png";
import ClientLogoDewanStudio from "../assets/client/dewanstudio.png";
import ClientLogoKreasi from "../assets/client/kreasi.png";

export interface TestimonialItem {
  name: string;
  role: string;
  avatar: string | null;
  rating: number;
  text: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    name: "Kementerian Perdagangan Republik Indonesia",
    role: "Kementerian",
    avatar: ClientKemendag,
    rating: 5,
    text: "MAK Production mampu menyampaikan pesan publik dengan visual yang profesional dan berkualitas tinggi.",
  },
  {
    name: "Kementerian Agama Republik Indonesia",
    role: "Kementerian",
    avatar: ClientKemenag,
    rating: 5,
    text: "Kerja sama berjalan sangat baik dengan hasil dokumentasi yang rapi dan sesuai kebutuhan program kami.",
  },
  {
    name: "Kementerian Komunikasi dan Digital",
    role: "Pemerintah",
    avatar: ClientKominfo,
    rating: 5,
    text: "Tim sangat responsif dan mampu menyesuaikan kebutuhan konten digital dengan cepat dan tepat.",
  },
  {
    name: "Kementerian Pendidikan dan Kebudayaan",
    role: "Pendidikan",
    avatar: ClientKemendikbud,
    rating: 5,
    text: "Konten yang dihasilkan informatif, edukatif, dan memiliki kualitas visual yang sangat baik.",
  },
  {
    name: "Festivo",
    role: "Bisnis",
    avatar: ClientLogoFestivo,
    rating: 5,
    text: "Visual event yang dibuat sangat menarik dan meningkatkan pengalaman audiens secara keseluruhan.",
  },
  {
    name: "MAN IC Serpong",
    role: "Pendidikan",
    avatar: ClientManIcSerpong,
    rating: 5,
    text: "Company profile yang dibuat sangat representatif dan meningkatkan citra sekolah kami.",
  },
  {
    name: "MAN 2 Jakarta",
    role: "Pendidikan",
    avatar: ClientMan2jakarta,
    rating: 5,
    text: "Hasil dokumentasi sangat profesional dan mampu menggambarkan kegiatan kami dengan baik.",
  },
  {
    name: "MAN 4 Jakarta",
    role: "Pendidikan",
    avatar: ClientMan4jakarta,
    rating: 5,
    text: "Visual yang dihasilkan sangat berkualitas dan sesuai dengan kebutuhan institusi kami.",
  },
  {
    name: "MTsN 14 Jakarta Timur",
    role: "Pendidikan",
    avatar: ClientMtsn14jatim,
    rating: 5,
    text: "Dokumentasi foto sangat detail dan profesional, sangat membantu publikasi kami.",
  },
  {
    name: "PT FORIT",
    role: "Perusahaan Teknologi",
    avatar: ClientPtforit,
    rating: 5,
    text: "Tim sangat komunikatif dan mampu menghasilkan konten digital yang modern dan relevan.",
  },
  {
    name: "Shinta VR",
    role: "Perusahaan Teknologi",
    avatar: ClientShintavr,
    rating: 5,
    text: "Kolaborasi berjalan lancar dengan hasil visual yang inovatif dan sesuai dengan konsep kami.",
  },
  {
    name: "Ikatan Guru Indonesia",
    role: "Organisasi",
    avatar: ClientLogoig,
    rating: 5,
    text: "Konten yang dihasilkan sangat membantu dalam penyampaian program kepada para anggota kami.",
  },
  {
    name: "Save the Children",
    role: "Organisasi Internasional",
    avatar: ClientLogoSaveTheChildren,
    rating: 5,
    text: "Video yang dihasilkan sangat kuat secara emosional dan impactful untuk kampanye kami.",
  },
  {
    name: "Kementerian Ketenagakerjaan Republik Indonesia",
    role: "Pemerintah",
    avatar: ClientLogoKemnaker,
    rating: 5,
    text: "MAK Production memberikan hasil yang profesional dengan proses kerja yang rapi dan terstruktur.",
  },
  {
    name: "Batik Punta",
    role: "Bisnis",
    avatar: ClientLogoBatikPunta,
    rating: 5,
    text: "Hasil visual sangat estetik dan membantu meningkatkan branding produk kami.",
  },
  {
    name: "Muara Prima Organizer",
    role: "Event Organizer",
    avatar: ClientLogoMuaraPrima,
    rating: 5,
    text: "Event kami menjadi lebih hidup dengan dukungan visual yang sangat menarik.",
  },
  {
    name: "Dewan Studio",
    role: "Creative",
    avatar: ClientLogoDewanStudio,
    rating: 5,
    text: "Kolaborasi yang sangat profesional dengan hasil yang kreatif dan berkualitas tinggi.",
  },
  {
    name: "Badan Pengembangan dan Pembinaan Bahasa",
    role: "Pemerintah",
    avatar: ClientKemendikbud,
    rating: 5,
    text: "Motion graphic dan konten visual yang dibuat sangat informatif dan menarik.",
  },
  {
    name: "KREASI",
    role: "Program Edukasi",
    avatar: ClientLogoKreasi,
    rating: 5,
    text: "Tim mampu menerjemahkan visi edukasi kami menjadi konten yang inspiratif dan engaging.",
  },
];
