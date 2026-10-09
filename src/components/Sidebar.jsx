import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/students", label: "Students" },
  { to: "/courses", label: "Courses" },
  { to: "/settings", label: "Settings" },
];

export default function Sidebar() {
  return (
    <nav className="flex gap-2 overflow-x-auto bg-white p-3 shadow-sm md:min-h-[calc(100vh-64px)] md:w-56 md:flex-col md:p-4">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 font-medium transition ${
              isActive
                ? "bg-slate-900 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
