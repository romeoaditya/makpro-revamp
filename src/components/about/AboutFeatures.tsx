import { Icon } from "@iconify/react";
import { featuresData } from "../../data/aboutData";

export default function AboutFeatures() {
  return (
    <div className="flex flex-col gap-6 mb-10 text-left w-full">
      {featuresData.map((feature, i) => (
        <div key={i} className="flex items-start gap-5">
          <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-md">
            <Icon icon={feature.icon} width={26} height={26} color="white" />
          </div>
          <div className="flex flex-col gap-1.5 justify-center mt-1">
            <h4 className="text-base font-bold text-black">{feature.title}</h4>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-[340px]">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
