import { NavLink } from "react-router-dom";

import { navItems } from "@/configs/nav/nav-items";
import { cn } from "@/lib/utils/cn";

export const DesktopMenu = () => {
  return (
    <ul className="hidden lg:flex items-center gap-12 ml-3 h-full">
      {navItems.map((item, i) => (
        <li key={i} className="h-full">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              cn(
                " transition-all text-md h-full flex items-center font-semibold font-lexend",
                isActive ? "text-primary font-bold" : "text-white"
              )
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
