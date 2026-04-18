import { useState } from "react";
import { projects, personalProjects } from "../data/Projects.jsx";
import ProjectCard from "./Layout/ProjectCard.jsx";

export default function Projects() {
    const [filter, setFilter] = useState("ALL");

    const filters = ["ALL", "LARAVEL", "REACT", "TAILWIND", "BOOTSTRAP", "LAVALUST"];

    const allProjects = [...projects, ...personalProjects];

    const filteredProjects =
        filter === "ALL"
            ? allProjects
            : allProjects.filter((project) =>
                project.tech.some((tech) => tech.toUpperCase() === filter)
            );

    const statusStyles = {
        ACTIVE: "text-emerald-600 border-emerald-500 dark:text-emerald-400 dark:border-emerald-500",
        "IN PROGRESS": "text-amber-600 border-amber-500 dark:text-amber-400 dark:border-amber-500",
    };

    return (
        <section
            id="projects"
            className="min-h-screen bg-slate-100 dark:bg-gray-900 text-slate-900 dark:text-white py-32 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col mb-16">
                    <h3 className="font-extrabold tracking-tight text-blue-500 dark:text-blue-400">SELECTED</h3>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 -tracking-wide">
                        PROJECTS
                    </h2>
                    <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-500"></div>
                </div>

                <div className="flex flex-wrap gap-3 mb-10">
                    {filters.map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${
                                filter === item
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "text-slate-500 border-slate-300 bg-white dark:bg-transparent dark:border-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            statusStyles={statusStyles}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
