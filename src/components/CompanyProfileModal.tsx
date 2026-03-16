import { useState, type FormEvent } from "react";
import { Icon } from "@iconify/react";

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyProfileModal({
  isOpen,
  onClose,
}: CompanyProfileModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleClear = () => {
    setName("");
    setEmail("");
  };

  const handleDownload = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Mohon isi Nama dan Email terlebih dahulu.");
      return;
    }
    alert(`Mengunduh Company Profile untuk: ${name} (${email})`);
    onClose();
    handleClear();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div
        className="relative w-full max-w-[560px] bg-white rounded-[24px] shadow-2xl p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-zinc-600 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors z-10"
          aria-label="Close modal"
        >
          <Icon icon="mdi:close" width={18} height={18} color="white" />
        </button>

        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-4">
          <Icon
            icon="material-symbols:download"
            width={20}
            height={20}
            className="text-black"
          />
          <span className="text-black text-sm font-normal">
            Unduh Company Profile Kami
          </span>
        </div>

        {/* Title */}
        <h2 className="text-black text-xl font-bold leading-[1.4] mb-6">
          Silakan isi data berikut untuk mendapatkan Company Profile MAK
          Production.
        </h2>

        {/* Form */}
        <form onSubmit={handleDownload} className="flex flex-col gap-4">
          {/* Input Nama */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-black text-sm font-semibold flex items-center gap-0.5"
            >
              Nama <span className="text-red-700">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 px-4 bg-gray-100 rounded-[10px] text-black/90 text-sm outline-none focus:ring-2 focus:ring-red-700/50 transition-all placeholder:text-black/40"
              required
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-black text-sm font-semibold flex items-center gap-0.5"
            >
              Email <span className="text-red-700">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 bg-gray-100 rounded-[10px] text-black/90 text-sm outline-none focus:ring-2 focus:ring-red-700/50 transition-all placeholder:text-black/40"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row items-center justify-between gap-4 mt-4">
            {/* Clear Data */}
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2.5 bg-white rounded-full shadow-[0px_4px_15px_rgba(0,0,0,0.1)] inline-flex items-center gap-2 hover:bg-neutral-50 active:scale-95 transition-all border border-neutral-200 text-black text-sm font-medium"
            >
              <Icon icon="mdi:trash-can-outline" width={18} height={18} />
              Clear Data
            </button>

            {/* Download */}
            <button
              type="submit"
              className="px-8 py-2.5 bg-red-700 rounded-full shadow-[0px_4px_15px_rgba(226,29,29,0.3)] inline-flex items-center gap-2 hover:bg-red-800 active:scale-95 transition-all text-white text-sm font-semibold"
            >
              Download
              <Icon
                icon="material-symbols:download"
                width={18}
                height={18}
                color="white"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
