import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navData";
import SupportDropdown from "./SupportDropdown";

export default function DesktopNav() {
  return (
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
              <span
                className={`block h-px bg-red-700 rounded-full transition-all duration-300 ${
                  isActive ? "w-9 opacity-100" : "w-0 opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>
      ))}

      <SupportDropdown />
    </div>
  );
}
