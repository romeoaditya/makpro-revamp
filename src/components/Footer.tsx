import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Send } from "lucide-react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";
import logo from "../assets/logo-hd.png";

const mainMenuLinks = [
  { label: "Tentang Kami", to: "/about" },
  { label: "Layanan", to: "/services" },
  { label: "Hubungi Kami", to: "/contact" },
];

const supportLinks = [
  { label: "FAQ", to: "/faq" },
  { label: "Testimoni", to: "/testimonials" },
  { label: "Syarat & Ketentuan", to: "/terms" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: "Permintaan Proposal",
          from_email: email,
          phone: "-",
          message: `Permintaan proposal baru dari: ${email}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="w-full bg-white pt-16 pb-6">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-6 items-start">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <div className="flex items-center gap-2 h-[36px]">
              <img
                src={logo}
                alt="Logo MAK Production"
                className="w-10 h-10 object-contain"
              />
              <span className="text-base font-semibold">
                <span className="text-red-700">MAK</span>{" "}
                <span className="text-black">Production</span>
              </span>
            </div>
            <p className="text-sm text-black font-normal leading-6 max-w-xs">
              Agensi digital kreatif yang berfokus mengubah ide menjadi
              pengalaman visual yang berdampak.
            </p>
          </div>

          {/* Main Menu */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-semibold text-black h-[36px] flex items-center">
              Menu Utama
            </h4>
            <ul className="flex flex-col gap-2.5">
              {mainMenuLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-black hover:text-red-700 transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-semibold text-black h-[36px] flex items-center">
              Bantuan
            </h4>
            <ul className="flex flex-col gap-2.5">
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-black hover:text-red-700 transition-colors duration-200"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Proposal */}
          <div className="flex flex-col gap-3">
            <h4 className="text-base font-semibold text-black h-[36px] flex items-center">
              Ajukan Proposal
            </h4>

            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 w-full"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                disabled={status === "loading"}
                className="min-w-0 flex-1 h-10 px-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-black/70 placeholder:text-black/40 outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="h-10 px-4 bg-red-700 rounded-lg flex items-center gap-1.5 text-white text-sm font-semibold hover:bg-red-800 active:scale-95 transition-all shadow-sm shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <Icon
                    icon="mdi:loading"
                    width={14}
                    height={14}
                    className="animate-spin"
                  />
                ) : (
                  <Send size={13} />
                )}
                Kirim
              </button>
            </form>

            {/* ✅ Status feedback */}
            {status === "success" && (
              <p className="text-xs text-green-600 flex items-center gap-1">
                <Icon icon="mdi:check-circle" width={14} height={14} />
                Berhasil dikirim! Kami akan segera menghubungi Anda.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <Icon icon="mdi:alert-circle" width={14} height={14} />
                Gagal mengirim. Silakan coba lagi.
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/20 my-6" />

        {/* Copyright */}
        <p className="text-center text-black text-xs font-normal">
          © 2026 MAK Production. Semua Hak Dilindungi.
        </p>
      </div>
    </footer>
  );
}
