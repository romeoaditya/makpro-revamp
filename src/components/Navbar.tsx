import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-makpro.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portofolio", to: "/portofolio" },
  { label: "Clients", to: "/clients" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Shadow muncul saat scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <style>{`
        @keyframes navbar-drop {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes menu-open {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-navbar-drop {
          animation: navbar-drop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-menu-open {
          animation: menu-open 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="w-full max-w-[1280px] mx-auto px-8 py-4">
        {/* ✅ Pill navbar dengan animasi drop saat load + shadow saat scroll */}
        <div
          className={`animate-navbar-drop h-[72px] bg-white/70 backdrop-blur-lg border border-white/20 rounded-full flex justify-between items-center px-8 gap-4 transition-shadow duration-300 ${
            scrolled ? "shadow-[0px_8px_30px_rgba(0,0,0,0.12)]" : "shadow-sm"
          }`}
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="MAK Production Logo"
              className="h-14 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex flex-col items-center gap-0.5 ${
                    isActive
                      ? "text-red-700 font-semibold"
                      : "text-neutral-700 hover:text-red-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {/* ✅ Underline slide-in saat aktif */}
                    <span
                      className={`block h-px bg-red-700 rounded-full transition-all duration-300 ${
                        isActive ? "w-9 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <NavLink
            to="/contact"
            className="hidden md:flex px-6 py-3.5 bg-gradient-to-l from-red-600 to-red-900 rounded-full text-white text-base font-bold transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 shadow-md whitespace-nowrap"
          >
            Contact Us
          </NavLink>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-neutral-700 hover:text-red-700 transition-colors active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* ✅ Icon swap dengan animasi rotate */}
            <div
              className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </div>
          </button>
        </div>

        {/* ✅ Mobile Dropdown dengan animasi */}
        {menuOpen && (
          <div className="animate-menu-open md:hidden mt-2 bg-white/90 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-red-700 font-semibold bg-red-50"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-red-700"
                  }`
                }
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="h-px bg-neutral-100 my-1" />

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 bg-gradient-to-l from-red-600 to-red-900 rounded-full text-white text-sm font-bold text-center hover:opacity-90 active:scale-95 transition-all"
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
