import StatBadge from "./StatBadge";
import Foto1 from "../../assets/about/foto1g.png";
import Foto2 from "../../assets/about/foto2g.png";
import { statsData } from "../../data/aboutData";

export default function AboutImages() {
  return (
    <div
      className="relative w-full mx-auto lg:mx-0"
      style={{ height: "560px", maxWidth: "560px" }}
    >
      {/* Foto atas kiri */}
      <div
        className="absolute top-0 left-0 rounded-[24px] overflow-hidden bg-zinc-200"
        style={{ width: "330px", height: "370px" }}
      >
        <img
          src={Foto2}
          alt="MAK Production Team Collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foto bawah kanan */}
      <div
        className="absolute bottom-0 right-0 rounded-[24px] overflow-hidden bg-zinc-200 z-20 border-8 border-white"
        style={{ width: "304px", height: "400px" }}
      >
        <img
          src={Foto1}
          alt="MAK Production Team Portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Stat Badges */}
      <StatBadge
        title={statsData[0].title}
        subtitle={statsData[0].subtitle}
        className="top-[28%] -left-6 z-30"
      />
      <StatBadge
        title={statsData[1].title}
        subtitle={statsData[1].subtitle}
        className="top-[5%] right-[30%] z-30"
      />
      <StatBadge
        title={statsData[2].title}
        subtitle={statsData[2].subtitle}
        className="bottom-[12%] left-[15%] md:left-[35%] z-30"
      />
      <StatBadge
        title={statsData[3].title}
        subtitle={statsData[3].subtitle}
        className="top-[25%] -right-6 z-30"
      />
    </div>
  );
}
