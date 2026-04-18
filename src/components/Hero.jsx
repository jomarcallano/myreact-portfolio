import { Link } from "react-router-dom"


export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-slate-900 dark:text-white pt-20 transition-colors duration-300">
            <div className="max-w-4xl px-6 text-center">
                <h1 className="flex flex-col text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 leading-tight">
                    JOMAR REY<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 text-6xl md:text-7xl">CALLANO</span>
                </h1>

                <p className="text-xl md:text-xl font-medium text-slate-600 dark:text-slate-400 mb-6 uppercase tracking-widest">
                    FULL STACK WEB DEVELOPER
                </p>

                <div className="text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg">
                    Full Stack Web Developer specializing in Laravel with growing expertise in React and Next.js. I build <span className="text-blue-600 dark:text-blue-400">scalable, secure, and responsive</span> web applications with clean UI and strong backend architecture. Currently focused on modern frontend development and API-driven applications.
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/contact" className="w-full sm:w-auto bg-blue-600 px-8 py-4 font-bold uppercase tracking-widest text-xs text-white hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-500/20">
                        HIRE ME
                    </Link>

                    <button className="w-full sm:w-auto border border-slate-300 dark:border-slate-700 px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-100 dark:hover:bg-gray-800 transition-all">
                        DOWNLOAD RESUME
                    </button>
                </div>

                <div className="flex flex-row justify-center mt-12 gap-8">
                    <a href="https://www.linkedin.com/in/jomarcallano/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:-translate-y-1"
                       aria-label="Linkedin">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>

                    <a href="mailto:jomarcallano@gmail.com"
                       className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:-translate-y-1"
                       aria-label="Email">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}