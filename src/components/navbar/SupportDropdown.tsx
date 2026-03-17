import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { supportLinks } from "../../data/navData";

export default function SupportDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
          open ? "text-red-700" : "text-neutral-700 hover:text-red-700"
        }`}
      >
        Support
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180 text-red-700" : ""}`}
        />
      </button>

      {/* Bridge invisible */}
      {open && <div className="absolute top-full left-0 w-full h-3" />}

      {/* Dropdown */}
      {open && (
        <div className="animate-dropdown-open absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-44 bg-white rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.12)] border border-neutral-100 overflow-hidden">
          {supportLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium transition-colors ${
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
      )}
    </div>
  );
}
