import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Send } from "lucide-react";
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

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Permintaan proposal dikirim ke: ${email}`);
      setEmail("");
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
                className="min-w-0 flex-1 h-10 px-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-black/70 placeholder:text-black/40 outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="h-10 px-4 bg-red-700 rounded-lg flex items-center gap-1.5 text-white text-sm font-semibold hover:bg-red-800 active:scale-95 transition-all shadow-sm shrink-0"
              >
                <Send size={13} />
                Kirim
              </button>
            </form>
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
