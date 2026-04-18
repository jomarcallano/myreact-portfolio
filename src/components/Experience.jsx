import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const experiences = [
    {
        role: 'Fullstack Developer',
        company: 'Reborn: Dragona PH',
        period: 'May 2024 — July 2025',
        description:
            'Built and maintained core backend features for an MMORPG private server project using the LavaLust framework. Developed database-driven systems for player top-ups, automatic in-game recharge, ranking, and account authentication. Also connected the game server to the homepage, login, and registration flow.',
        achievements: [
            'Built backend systems for an MMORPG private server using LavaLust',
            'Implemented automatic top-up recharge for in-game player accounts',
            'Integrated Maya Business API for payment processing',
            'Connected homepage, login, and registration flows to the server',
            'Worked with PostgreSQL and Windows SQL for database-driven features',
        ],
        stack: ['LavaLust', 'HTML5', 'CSS', 'PostgreSQL', 'Windows SQL', 'jQuery'],
    },
    {
        role: 'Freelance Fullstack Developer',
        company: 'Open for Contract-to-Hire & Long-Term Opportunities',
        period: '2025 — Present',
        description:
            'Building custom web applications, personal projects, and client-based solutions with both frontend and backend development. Focused on creating responsive interfaces, reusable components, API integrations, and database-driven features. Open to freelance, contract, and long-term full-time opportunities.',
        achievements: [
            'Built responsive websites and web apps for client and personal projects',
            'Developed reusable frontend components',
            'Integrated APIs and backend services',
            'Improved UI/UX and performance',
            'Open to freelance, contract-to-hire, and long-term roles',
        ],
        stack: ['React', 'Tailwind CSS', 'Laravel', 'Databases', 'JavaScript'],
    },
]

const ExperienceCard = ({ experience, isLast }) => {
    return (
        <div className="relative flex gap-6">
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-11 h-11 border border-blue-500/30 bg-blue-500/10 text-blue-500 dark:text-blue-400">
                    <FiBriefcase className="text-xl" />
                </div>
                {!isLast && <div className="w-px flex-1 bg-slate-300 dark:bg-slate-700 mt-3" />}
            </div>

            <div className="flex-1 pb-12">
                <div className=" p-6 md:p-8 ">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                        <div>
                            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
                                {experience.role}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                                {experience.company}
                            </p>
                        </div>

                        <div className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <FiCalendar />
                            <span>{experience.period}</span>
                        </div>
                    </div>

                    <p className="text-sm md:text-base lg:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                        {experience.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                        {experience.achievements.map((item, index) => (
                            <li key={index} className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm">
                                <span className="mt-2 h-2 w-2 bg-blue-500 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {experience.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-semibold tracking-wide uppercase border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 bg-white dark:bg-gray-900"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-24 bg-slate-100 dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-14">
                    <div className="text-sm tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase mb-3">
                        Career Path
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Experience
                    </h2>
                </div>

                <div className="max-w-3xl">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            experience={experience}
                            isLast={index === experiences.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience