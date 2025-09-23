import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dock from "./Dock"; // <-- import your new Dock component
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [compressed, setCompressed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setCompressed(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map dock items to navLinks — you can change icons if you like
  const dockItems = [
  { icon: <FiHome size={20} className="text-white dark:text-zinc-200" />, label: "Home", onClick: () => navigate("/") },
  { icon: <FiFolder size={20} className="text-white dark:text-zinc-200"/>, label: "Projects", onClick: () => navigate("/projects") },
  { icon: <FiMail size={20}className="text-white dark:text-zinc-200"/>, label: "Contact", onClick: () => navigate("/contact") },
];

  return (
    <>
      {/* Top Navbar (Desktop) */}
      <header className="sticky top-0 left-0 right-0 z-50 w-full transition-all duration-500 pointer-events-none px-0 py-4">
        <nav
          className={`pointer-events-auto mx-auto px-4 flex items-center justify-between 
            rounded-full border border-transparent 
            backdrop-blur-xl transition-all duration-500
            ${compressed ? "max-w-[50%] gap-2" : "max-w-screen-lg gap-6"}
            bg-transparent`}
          style={{
            boxShadow: compressed ? "0 4px 30px rgba(0, 0, 0, 0.15)" : "none",
          }}
        >
          <Link
            to="/"
            className="text-2xl font-bold text-zinc-900 dark:text-zinc-100"
          >
            MK
          </Link>
          <ul className="hidden sm:flex text-sm transition-all duration-500">
            {navLinks.map(({ label, path }) => (
              <li key={path} className="group relative overflow-hidden">
                <Link
                  to={path}
                  className="block relative text-zinc-600 dark:text-zinc-300 px-2"
                >
                  <span className="relative inline-flex overflow-hidden">
                    <div className="transform-gpu transition-transform duration-500 
                        group-hover:-translate-y-[110%] group-hover:skew-y-12">
                      {label}
                    </div>
                    <div className="absolute transform-gpu translate-y-[110%] skew-y-12 
                        transition-transform duration-500 
                        group-hover:translate-y-0 group-hover:skew-y-0
                        text-zinc-900 dark:text-zinc-100">
                      {label}
                    </div>
                  </span>
                  {location.pathname === path && (
                    <span
                      className={`absolute bottom-0 left-2.5 right-0 h-0.5 w-[60%] rounded-full
                        ${theme === "light" ? "bg-gray-400" : "bg-white"}`}
                    ></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="relative rounded-full border border-zinc-300/50 bg-transparent text-zinc-800 dark:text-zinc-100 p-2 backdrop-blur hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors active:scale-90"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>
        </nav>
      </header>

      {/*  Dock for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full sm:hidden flex justify-center pointer-events-auto">
        <Dock
          items={dockItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
        />
      </div>
    </>
  );
}
