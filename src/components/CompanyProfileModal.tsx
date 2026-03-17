import { useState, type FormEvent } from "react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

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
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  if (!isOpen) return null;

  const handleClear = () => {
    setName("");
    setEmail("");
    setStatus("idle");
  };

  const handleDownload = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_COMPRO_TEMPLATE_ID,
        {
          to_name: name,
          from_email: email,
          download_link:
            "https://drive.google.com/file/d/1t3B0DuFZysC2hRGpc5BKW7BmtBWbEZyA/view?usp=sharing",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleClose = () => {
    handleClear();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-[24px] shadow-2xl p-8 w-full max-w-[560px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 bg-zinc-600 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors"
        >
          <Icon icon="mdi:close" width={18} height={18} color="white" />
        </button>

        {/* Header */}
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

        <h2 className="text-black text-xl font-bold leading-[1.4] mb-6">
          Silakan isi data berikut untuk mendapatkan Company Profile MAK
          Production.
        </h2>

        {/* ✅ Success state */}
        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
              <Icon
                icon="mdi:check-circle"
                width={40}
                height={40}
                className="text-green-500"
              />
            </div>
            <div className="text-center">
              <p className="text-black font-semibold mb-1">Email Terkirim!</p>
              <p className="text-neutral-500 text-sm">
                Company Profile telah dikirim ke{" "}
                <span className="font-medium text-black">{email}</span>. Silakan
                cek inbox Anda.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="px-8 py-2.5 bg-red-700 rounded-full text-white text-sm font-semibold hover:bg-red-800 transition-all"
            >
              Tutup
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="flex flex-col gap-4">
            {/* Nama */}
            <div className="flex flex-col gap-1.5">
              <label className="text-black text-sm font-semibold flex items-center gap-0.5">
                Nama <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full h-12 px-4 bg-gray-100 rounded-[10px] text-black/90 text-sm outline-none focus:ring-2 focus:ring-red-700/50 transition-all placeholder:text-black/40"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-black text-sm font-semibold flex items-center gap-0.5">
                Email <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 px-4 bg-gray-100 rounded-[10px] text-black/90 text-sm outline-none focus:ring-2 focus:ring-red-700/50 transition-all placeholder:text-black/40"
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg">
                <Icon icon="mdi:alert-circle" width={16} height={16} />
                Gagal mengirim. Silakan coba lagi.
              </div>
            )}

            {/* Buttons */}
            <div className="flex items-center justify-between gap-4 mt-4">
              <button
                type="button"
                onClick={handleClear}
                className="px-6 py-2.5 bg-white rounded-full shadow-[0px_4px_15px_rgba(0,0,0,0.1)] flex items-center gap-2 hover:bg-neutral-50 transition-all border border-transparent hover:border-neutral-200 text-sm font-medium"
              >
                <Icon icon="mdi:trash-can-outline" width={18} height={18} />
                Clear Data
              </button>

              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-2.5 bg-red-700 rounded-full text-white text-sm font-semibold flex items-center gap-2 hover:bg-red-800 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Icon
                      icon="mdi:loading"
                      width={18}
                      height={18}
                      className="animate-spin"
                    />
                    Mengirim...
                  </>
                ) : (
                  <>
                    Download
                    <Icon
                      icon="material-symbols:download"
                      width={18}
                      height={18}
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
