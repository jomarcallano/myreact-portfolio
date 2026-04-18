import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
    { to: "/#projects", label: "Projects" },
    { to: "/#skills", label: "Skills" },
    { to: "/#experience", label: "Experience" },
    { to: "/#contact", label: "Contact" },
];

const linkClass = "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-widest text-xs";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white shadow-sm transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm md:text-base">
                <h1 className="text-xl font-extrabold tracking-tight">
                    <a href="/#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Z<span className="text-base">OMAR</span><span
                        className="text-lg text-blue-500 dark:text-white dark:hover:text-blue-400 transition-colors">.DEV</span>
                    </a>
                </h1>

                <div className="hidden md:flex gap-8 font-medium items-center">
                    {NAV_LINKS.map(({ to, label }) => (
                        <NavLink key={to} to={to} className={linkClass}>{label}</NavLink>
                    ))}
                    <a className="ml-4 transition-colors rounded-full">
                        <div className="inline-flex items-center justify-center font-semibold">
                            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'} →
                            <button className="text-xl px-2" onClick={toggleTheme}>
                                {theme === 'dark' ? <FaToggleOn /> : <FaToggleOff />}
                            </button>
                        </div>
                    </a>
                </div>

                <button
                    className="md:hidden relative w-10 h-10 items-center justify-center px-4 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors rounded"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={menuOpen}>
                    <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45" : "-translate-y-2"}`} />
                    <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${menuOpen ? "-rotate-45" : "translate-y-2"}`} />
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden mt-4 border-t border-slate-200 dark:border-gray-800">
                    <div className="px-2 py-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-4">
                        {NAV_LINKS.map(({ to, label }) => (
                            <NavLink key={to} to={to} className={linkClass} onClick={() => setMenuOpen(false)}>{label}</NavLink>
                        ))}
                        <div className="flex items-center">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
