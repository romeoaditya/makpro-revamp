import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { navLinks, supportLinks } from "../../data/navData";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className="animate-menu-open md:hidden mt-2 bg-white/90 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col gap-2">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          onClick={onClose}
          className={({ isActive }) =>
            `text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive
                ? "text-red-700 font-semibold bg-red-50"
                : "text-neutral-700 hover:bg-neutral-50 hover:text-red-700"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}

      {/* Support — klik */}
      <div className="flex flex-col">
        <button
          onClick={() => setSupportOpen(!supportOpen)}
          className="flex items-center justify-between text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 text-neutral-700 hover:bg-neutral-50 hover:text-red-700"
        >
          <span>Support</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${supportOpen ? "rotate-180 text-red-700" : ""}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${supportOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="flex flex-col pl-4 gap-1 pb-1">
            {supportLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => {
                  onClose();
                  setSupportOpen(false);
                }}
                className={({ isActive }) =>
                  `text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-red-700 font-semibold bg-red-50"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-red-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-neutral-100 my-1" />

      <NavLink
        to="/contact"
        onClick={onClose}
        className="px-6 py-3 bg-gradient-to-l from-red-600 to-red-900 rounded-full text-white text-sm font-bold text-center hover:opacity-90 active:scale-95 transition-all"
      >
        Contact Us
      </NavLink>
    </div>
  );
}
