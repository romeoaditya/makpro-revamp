import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-makpro.png";
import DesktopNav from "./navbar/DesktopNav";
import MobileMenu from "./navbar/MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        @keyframes dropdown-open {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-navbar-drop { animation: navbar-drop 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-menu-open { animation: menu-open 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-dropdown-open { animation: dropdown-open 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      <div className="w-full max-w-[1280px] mx-auto px-8 py-4">
        {/* Pill */}
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

          {/* Desktop Nav */}
          <DesktopNav />

          {/* CTA */}
          <NavLink
            to="/contact"
            className="hidden md:flex px-6 py-3.5 bg-gradient-to-l from-red-600 to-red-900 rounded-full text-white text-base font-bold transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 shadow-md whitespace-nowrap"
          >
            Contact Us
          </NavLink>

          {/* Hamburger */}
          <button
            className="md:hidden text-neutral-700 hover:text-red-700 transition-colors active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </div>
    </header>
  );
}
