import {Link} from "react-router-dom";
import {CONTACT_LINKS} from "./Layout/ContactCard";


export default function Contact() {
    return (
        <section id="contact"
                 className="py-32 bg-gray-900/95 text-white dark:bg-gray-900 border-t border-gray-700 dark:border-gray-700 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">
                    GOT A PROJECT IN <span
                    className="text-blue-400 underline decoration-blue-400/30 underline-offset-8">MIND?</span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                    Let's work together to bring your ideas to life. I'm currently available for freelance and full-time
                    opportunities.
                </p>

                <div className="flex flex-col items-center gap-12">
                    <Link to="/contact"
                          className="bg-blue-600 px-10 py-5 font-bold uppercase tracking-widest text-sm text-white hover:bg-blue-500 transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
                        SEND ME A MESSAGE
                    </Link>

                    <div className="flex flex-col items-center">
                        <div className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase mb-8">CONNECT WITH
                            ME
                        </div>

                        <div className="grid grid-cols-2 gap-10 sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-4 lg:grid-cols-4">
                            {CONTACT_LINKS.map(({icon: Icon, label, href}, index) => (
                                <a key={label} href={href} target={href.startsWith("mailto") ? "_self" : "_blank"}
                                   rel="noopener noreferrer"
                                   className="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-all transform hover:-translate-y-1"
                                   aria-label={label}>

                                    <Icon size={24}/>
                                    <span className="font-bold text-sm tracking-widest uppercase ">{label}</span>
                                </a>


                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
