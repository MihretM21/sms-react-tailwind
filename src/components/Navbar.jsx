import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white">
      <h1 className="text-lg font-bold md:text-xl">Student Management System</h1>
      <div className="flex items-center gap-3 text-sm">
        <span className="hidden text-slate-300 sm:inline">{user}</span>
        <button
          onClick={handleLogout}
          className="rounded-lg bg-pink-600 px-3 py-1.5 font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
