import { Icon } from "@iconify/react";
import type { SoftwareItem } from "../../data/servicesData";

interface SoftwareModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  software: SoftwareItem[];
}

export default function SoftwareModal({
  isOpen,
  onClose,
  serviceTitle,
  software,
}: SoftwareModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[24px] shadow-2xl p-8 w-full max-w-[460px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-zinc-600 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors"
        >
          <Icon icon="mdi:close" width={18} height={18} color="white" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Icon
            icon="fluent:apps-24-filled"
            width={24}
            height={24}
            className="text-black"
          />
          <span className="text-black text-sm font-normal">
            Tools & Software
          </span>
        </div>

        <h2 className="text-black text-xl font-bold leading-[1.4] mb-8">
          Software yang digunakan untuk layanan{" "}
          <span className="text-red-700">{serviceTitle}</span>
        </h2>

        <div className="grid grid-cols-4 gap-4">
          {software.map((sw, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center p-3 shadow-sm hover:scale-110 transition-transform">
                <img
                  src={sw.icon}
                  alt={sw.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs text-neutral-600 font-medium text-center leading-tight">
                {sw.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
