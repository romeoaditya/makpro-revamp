import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-makpro.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portofolio', to: '/portofolio' },
  { label: 'Clients', to: '/clients' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    /*
      Outer header: fixed strip — NO backdrop-blur here.
      It's fully transparent so only the pill itself shows the glass effect.
    */
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full max-w-[1280px] mx-auto px-8 py-4">

        {/*
          Pill container: glassmorphism lives HERE only.
          bg-white/70 + backdrop-blur-lg = frosted-glass look on the pill shape.
        */}
        <div className="h-[72px] bg-white/70 backdrop-blur-lg border border-white/20 rounded-full flex justify-between items-center px-8 gap-4 shadow-sm">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="MAK Production Logo" className="h-14 w-auto object-contain" />
          </NavLink>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex flex-col items-center gap-0.5 ${
                    isActive
                      ? 'text-red-700 font-semibold'
                      : 'text-neutral-700 hover:text-red-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="block w-9 h-px bg-red-700 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <NavLink
            to="/contact"
            className="hidden md:flex px-6 py-3.5 bg-gradient-to-l from-red-600 to-red-900 rounded-full text-white text-base font-bold transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-md whitespace-nowrap"
          >
            Contact Us
          </NavLink>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-neutral-700 hover:text-red-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown — outside pill, inside padded container */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white/90 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'text-red-700 font-semibold bg-red-50' : 'text-neutral-700 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-6 py-3 bg-gradient-to-l from-red-600 to-red-900 rounded-full text-white text-sm font-bold text-center"
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
