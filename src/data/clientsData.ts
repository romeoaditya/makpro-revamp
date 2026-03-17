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

import ClientKemenag from "../assets/client/kemenag 1.png";
import ClientKemendag from "../assets/client/kemendag 1.png";
import ClientKemendikbud from "../assets/client/kemendikbud 1.png";
import ClientKemenkes from "../assets/client/kemenkes 1.png";
import ClientKemensos from "../assets/client/kemensos 1.png";
import ClientKominfo from "../assets/client/kominfo 1.png";

export interface ClientItem {
  id: number;
  name: string;
  desc: string;
  category: string;
  logo: string;
}

export const marqueeRow1 = [
  LogoSpotify,
  LogoShopee,
  LogoGoogle,
  LogoGojek,
  LogoTraveloka,
  LogoTiket,
  LogoBlibli,
  LogoUber,
];

export const marqueeRow2 = [
  LogoMicrosoft,
  LogoDana,
  LogoKredivo,
  LogoZenius,
  LogoXl,
  LogoInterbuana,
  LogoBpom,
  LogoTelkom,
];

export const marqueeRow3 = [
  LogoKemendag,
  LogoKemenag,
  LogoKominfo,
  LogoKemendikbud,
  LogoKemenkes,
  LogoKemenparekraf,
  LogoKemensos,
  LogoPupr,
];

export const clientsData: ClientItem[] = [
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

export const categories = [
  { label: "All", value: "All" },
  { label: "Government", value: "Government" },
  { label: "Education", value: "Education" },
  { label: "Ministry", value: "Ministry" },
];
