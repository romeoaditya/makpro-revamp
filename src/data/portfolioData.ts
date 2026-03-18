import Img1 from "../assets/portofolio/1/1.png";
import Img2 from "../assets/portofolio/2/2.png";
import Img3 from "../assets/portofolio/3/3.png";
import Img4 from "../assets/portofolio/4/4.png";
import Img5 from "../assets/portofolio/5/5.png";
import Img6 from "../assets/portofolio/6/6.png";
import Img7 from "../assets/portofolio/7/7.png";
import Img8 from "../assets/portofolio/8/8.png";
import Img9 from "../assets/portofolio/9/9.png";
import Img10 from "../assets/portofolio/10/10.png";
import Img11 from "../assets/portofolio/11/11.png";
import Img12 from "../assets/portofolio/12/12.png";
import Img13 from "../assets/portofolio/13/13.png";
import Img14 from "../assets/portofolio/14/14.png";
import Img15 from "../assets/portofolio/15/15.png";
import Img16 from "../assets/portofolio/16/16.png";
import Img17 from "../assets/portofolio/17/17.png";
import Img18 from "../assets/portofolio/18/18.png";
import Img19 from "../assets/portofolio/19/19.png";

import Detail1 from "../assets/portofolio/1/detail-1.png";
import Detail2 from "../assets/portofolio/2/detail-2.png";
import Detail3 from "../assets/portofolio/3/detail-3.png";
import Detail4 from "../assets/portofolio/4/detail-4.png";
import Detail5 from "../assets/portofolio/5/detail-5.png";
import Detail6 from "../assets/portofolio/6/detail-6.png";
import Detail7 from "../assets/portofolio/7/detail-7.png";
import Detail8 from "../assets/portofolio/8/detail-8.png";
import Detail9 from "../assets/portofolio/9/detail-9.png";
import Detail10 from "../assets/portofolio/10/detail-10.png";
import Detail11 from "../assets/portofolio/11/detail-11.png";
import Detail12 from "../assets/portofolio/12/detail-12.png";
import Detail13 from "../assets/portofolio/13/detail-13.png";
import Detail14 from "../assets/portofolio/14/detail-14.png";
import Detail15 from "../assets/portofolio/15/detail-15.png";
import Detail16 from "../assets/portofolio/16/detail-16.png";
import Detail17 from "../assets/portofolio/17/detail-17.png";
import Detail18 from "../assets/portofolio/18/detail-18.png";
import Detail19 from "../assets/portofolio/19/detail-19.png";

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
  details?: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "jma-2025",
    title: "Jakarta Madrasah Award 2025",
    desc: "Karya Kami Bersama Kantor Wilayah Kementerian Agama Jakarta",
    date: "5 Feb 2025",
    image: Img1,
    client: "Kanwil Kemenag Jakarta",
    platform: "Video Dokumentasi",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail1],
  },
  {
    id: "jaga-desa",
    title: "Launching Aplikasi Jaga Desa",
    desc: "Karya Kami Bersama PT Adhibuana Artha Kencana",
    date: "12 Jan 2025",
    image: Img2,
    client: "PT Adhibuana Artha Kencana",
    platform: "Motion Graphic, Video Launching",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail2],
  },
  {
    id: "jma-2024",
    title: "Jakarta Madrasah Award 2024",
    desc: "Karya Kami Bersama Kantor Wilayah Kementerian Agama Jakarta",
    date: "20 Nov 2024",
    image: Img3,
    client: "Kanwil Kemenag Jakarta",
    platform: "Video Dokumentasi",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail3],
  },
  {
    id: "emliku-2024",
    title: "Dokumentasi PT Emliku Smart Technology",
    desc: "Karya Kami Bersama PT Emliku Smart Technology",
    date: "8 Okt 2024",
    image: Img4,
    client: "PT Emliku Smart Technology",
    platform: "Video Dokumentasi",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail4],
  },
  {
    id: "akmi-2023",
    title: "Profile AKMI 2023",
    desc: "Karya Kami Bersama Kementerian Agama RI",
    date: "15 Sep 2024",
    image: Img5,
    client: "Kementerian Agama RI",
    platform: "Video Dokumentasi",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail5],
  },
  {
    id: "video-akmi",
    title: "Video Pembelajaran AKMI 2023",
    desc: "Karya Kami Bersama Kementerian Agama RI",
    date: "20 Agt 2024",
    image: Img6,
    client: "Kementerian Agama RI",
    platform: "Video Dokumentasi",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail6],
  },
  {
    id: "podcast-kemendag-1",
    title: "Podcast Kementerian Perdagangan",
    desc: "Karya Kami Bersama Kementerian Perdagangan",
    date: "3 Jul 2024",
    image: Img7,
    client: "Kementerian Perdagangan",
    platform: "Podcast",
    website: "-",
    tools: "Adobe Audition, Adobe Premiere Pro",
    details: [Detail7],
  },
  {
    id: "podcast-kemendag-2",
    title: "Podcast Kementerian Perdagangan Vol.2",
    desc: "Karya Kami Bersama Kementerian Perdagangan",
    date: "10 Jul 2024",
    image: Img8,
    client: "Kementerian Perdagangan",
    platform: "Podcast",
    website: "-",
    tools: "Adobe Audition, Adobe Premiere Pro",
    details: [Detail8],
  },
  {
    id: "video-pusbin",
    title: "Video Profil Pusbin Badan Bahasa",
    desc: "Karya Kami Bersama Badan Bahasa",
    date: "7 Jun 2024",
    image: Img9,
    client: "Badan Bahasa",
    platform: "Video Dokumentasi",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail9],
  },
  {
    id: "foto-mtsn",
    title: "Foto BTS MTsN 14 Jakarta Timur",
    desc: "Karya Kami Bersama MTsN 14 Jakarta Timur",
    date: "14 Mei 2024",
    image: Img10,
    client: "MTsN 14 Jakarta Timur",
    platform: "Foto Dokumentasi",
    website: "-",
    tools: "Adobe Photoshop",
    details: [Detail10],
  },
  {
    id: "ksm-nasional",
    title: "KSM Nasional 2022",
    desc: "Karya Kami Bersama Kantor Wilayah Kementerian Agama Jakarta",
    date: "22 Apr 2024",
    image: Img11,
    client: "Kantor Wilayah Kementerian Agama Jakarta",
    platform: "Motion Graphic",
    website: "-",
    tools: "Adobe After Effects",
    details: [Detail11],
  },
  {
    id: "jmc-2022",
    title: "Jakarta Madrasah Center 2022",
    desc: "Karya Kami Bersama Kantor Wilayah Kementerian Agama Jakarta",
    date: "30 Mar 2024",
    image: Img12,
    client: "Kantor Wilayah Kementerian Agama Jakarta",
    platform: "Video Dokumentasi",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail12],
  },
  {
    id: "man-ic-serpong",
    title: "Company Profile MAN IC Serpong",
    desc: "Karya Kami Bersama MAN IC Serpong",
    date: "5 Mar 2024",
    image: Img13,
    client: "MAN IC Serpong",
    platform: "Company Profile",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail13],
  },
  {
    id: "giat-ukbi",
    title: "Giat UKBI Adaptif",
    desc: "Karya Kami Bersama Badan Bahasa, Kemdikbudristek",
    date: "18 Feb 2024",
    image: Img14,
    client: "Badan Bahasa, Kemdikbudristek",
    platform: "Motion Graphic",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail14],
  },
  {
    id: "company-profile-direktorat",
    title: "Company Profile Direktorat Pemberdayaan Konsumen",
    desc: "Karya Kami Bersama Direktorat Pemberdayaan Konsumen, Kementerian Perdagangan",
    date: "9 Feb 2024",
    image: Img15,
    client: "Direktorat Pemberdayaan Konsumen, Kementerian Perdagangan",
    platform: "Company Profile",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail15],
  },
  {
    id: "rep-meqr",
    title: "REP-MEQR Kementrian Agama",
    desc: "Karya Kami Bersama Kementrian Agama",
    date: "25 Jan 2024",
    image: Img16,
    client: "Kementrian Agama",
    platform: "Company Profile",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail16],
  },
  {
    id: "video-kominfo",
    title: "Video Dokumentasi Kominfo",
    desc: "Karya Kami Bersama Kominfo",
    date: "11 Jan 2024",
    image: Img17,
    client: "Kominfo",
    platform: "Video Dokumentasi",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail17],
  },
  {
    id: "video-testimoni-2026",
    title:
      "Video Testimoni Pejabat, Kepsek, Guru, Orang Tua, dan Peserta Didik",
    desc: "Karya Kami Bersama Kreasi Nias Selatan x Save The Children",
    date: "12 Jan 2026",
    image: Img18,
    client: "Kreasi Nias Selatan x Save The Children",
    platform: "Video Dokumentasi",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail18],
  },
  {
    id: "jma-2026",
    title: "Jakarta Madrasah Awards 2026",
    desc: "Karya Kami Bersama Kanwil DKI Jakarta",
    date: "5 Feb 2026",
    image: Img19,
    client: "Kanwil DKI Jakarta",
    platform: "Video Dokumentasi",
    website: "-",
    tools: "Adobe Premiere Pro, Adobe After Effects",
    details: [Detail19],
  },
];

export const monthMap: Record<string, string> = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  Mei: "05",
  Jun: "06",
  Jul: "07",
  Agt: "08",
  Sep: "09",
  Okt: "10",
  Nov: "11",
  Des: "12",
};

export const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split(" ");
  return new Date(`${year}-${monthMap[month]}-${day.padStart(2, "0")}`);
};

export const sortedPortfolioData = [...portfolioData].sort(
  (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime(),
);
