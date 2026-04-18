import { useState, useRef, useEffect } from 'react'

export default function ProjectCard({project, statusStyles}) {
    const [seeMore, setSeeMore] = useState(true);
    const [isClamped, setIsClamped] = useState(false);
    const pRef = useRef(null);



    useEffect(() => {
        const el = pRef.current;
        if (el) {
            setIsClamped(el.scrollHeight > el.clientHeight);
        }
    }, []);

    const desClassName = seeMore ? 'line-clamp-3' : 'line-clamp-none';


    return (
        <div
            className="group bg-white dark:bg-gray-900/80 border border-slate-200 dark:border-gray-700 shadow-sm hover:shadow-xl dark:shadow-none hover:border-blue-500 dark:hover:border-blue-500/50 transition-all duration-200 flex flex-col h-full">
            <div className="flex flex-col h-full">
                <div className="aspect-video overflow-hidden border-b border-neutral-700 bg-neutral-900">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <div className="p-4 flex flex-col flex-1">
                    <h3 className="flex items-center gap-2 text-2xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <span className="text-sm uppercase">{project.title}</span>
                        <span className={`ml-auto border text-xs p-0.5 ${statusStyles[project.status]}`}>
                            {project.status}
                        </span>
                    </h3>

                    <p ref={pRef} className={`text-slate-600 dark:text-slate-400 leading-relaxed text-sm ${desClassName}`}>
                        {project.description}
                    </p>

                    {isClamped && (
                        <button onClick={() => setSeeMore(prev => !prev)} className="
                        text-slate-600 ml-auto mb-5 font-bold dark:font-semibold dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs">
                            {seeMore ? 'See More' : 'See Less'}
                        </button>
                    )}


                    <div className="flex flex-wrap gap-2 text-xs font-semibold tracking-wider mt-auto">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-blue-600/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-600/10 dark:border-blue-500/20 px-3 py-1.5"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center mt-auto p-4 justify-end gap-6">
                    <a
                        href={project.github}
                        className={`flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors ${
                            project.github ? "" : "invisible"}`}
                    >
                        <span className="border border-slate-400 text-slate-700 dark:text-slate-300 dark:border-slate-500 px-1.5 hover:bg-slate-100 dark:hover:bg-slate-700/40 transition-colors">SOURCE CODE</span>
                    </a>

                    <a
                        href={project.demo}
                        className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                        <span className="border border-blue-600/10 dark:border-blue-500/20 px-3 hover:bg-blue-600/10 dark:hover:bg-blue-500/10">LIVE</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
