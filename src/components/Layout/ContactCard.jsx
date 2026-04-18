import { useState } from "react";
import Navbar from "./Navbar";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

export const CONTACT_LINKS = [
    {
        icon: FaEnvelope,
        label: "Email",
        display: "dev@zomar.dev",
        href: "mailto:dev@zomar.dev",
    },
    {
        icon: FaGithub,
        label: "Github",
        display: "github.com/jomarcallano",
        href: "https://github.com/jomarcallano",
    },
    {
        icon: FaLinkedinIn,
        label: "LinkedIn",
        display: "linkedin.com/in/jomarcallano",
        href: "https://www.linkedin.com/in/jomarcallano/",
    },
    {
        icon: FaFacebook,
        label: "Facebook",
        display: "facebook.com/papazoms",
        href: "https://www.facebook.com/papazoms",
    },
];

const inputClass = "bg-white dark:bg-gray-900 border border-slate-300 dark:border-gray-700 px-4 py-3 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors w-full";

const INITIAL = { first: "", last: "", email: "", subject: "", message: "" };

export default function ContactCard() {
    const [form, setForm] = useState(INITIAL);
    const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            
            let data;
            const contentType = res.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                data = await res.json();
            } else {
                const text = await res.text();
                if (res.status === 404) {
                    throw new Error("API endpoint not found (404). Please ensure the backend server is running and the proxy is configured correctly.");
                }
                throw new Error(text || `Server error: ${res.status}`);
            }

            if (!res.ok) throw new Error(data.error || "Something went wrong.");

            setStatus("success");
            setForm(INITIAL);
        } catch (err) {
            console.error("Contact form error:", err);
            setErrorMsg(err.message);
            setStatus("error");
        }
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left — Contact Info */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-3">
                                    Let's work together
                                </p>
                                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
                                    GOT A PROJECT IN MIND?
                                </h1>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base max-w-md">
                                    I'm currently available for new opportunities. Whether it's a freelance
                                    project, a full-time role, or just a question — my inbox is always open.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                {CONTACT_LINKS.map(({ icon: Icon, label, display, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={href.startsWith("mailto") ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 group py-2"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 shrink-0 bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 transition-all duration-200">
                                            <Icon size={16} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-semibold leading-none mb-1">
                                                {label}
                                            </p>
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {display}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div className="bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 p-8">
                            <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-1">
                                GET IN TOUCH
                            </p>
                            <h2 className="text-2xl font-extrabold tracking-tight mb-8">
                                SEND A MESSAGE
                            </h2>

                            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <input className={inputClass} type="text" name="first" placeholder="First Name" required value={form.first} onChange={handleChange} />
                                    <input className={inputClass} type="text" name="last" placeholder="Last Name" required value={form.last} onChange={handleChange} />
                                </div>
                                <input className={inputClass} type="email" name="email" placeholder="email@example.com" required value={form.email} onChange={handleChange} />
                                <input className={inputClass} type="text" name="subject" placeholder="What's this about?" required value={form.subject} onChange={handleChange} />
                                <textarea
                                    className={`${inputClass} resize-none`}
                                    rows={5}
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                />

                                {status === "success" && (
                                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                                        Message sent! I'll get back to you soon.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-sm text-red-500 font-medium">{errorMsg}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="bg-blue-600 text-white font-bold uppercase tracking-widest text-xs px-6 py-4 hover:bg-blue-500 transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
