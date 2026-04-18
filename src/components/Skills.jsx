

import {
    SiJetbrains,
    SiLaravel,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiVite,
    SiJavascript,
    SiHtml5,
    SiMysql,
    SiMongodb,
    SiPostgresql,
    SiGithub,
    SiGit,
    SiWebstorm,
    SiPhp,
    SiCloudflare,
    SiCloudflareworkers,
    SiCpanel,
    SiHostinger,
    SiGodaddy,
    SiLinux,
    SiPhpstorm,
    SiBootstrap,
} from 'react-icons/si'

const skills = [
    {
        name: "PHP", icon: SiPhp, color: "#000000", darkColor: "#FFFFFF"
    },
    {
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20"
    },
    {name: "React", icon: SiReact, color: "#61DAFB"},
    {name: "JavaScript", icon: SiJavascript, color: "#F7DF1E"},
    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
        darkColor: "#FFFFFF"
    },
    {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "#673DE6"
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4"
    },
    {
        name: "Vite",
        icon: SiVite,
        color: "#673DE6"
    },
    {
        name: "HTML",
        icon: SiHtml5,
        color: "#E34F26"
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248"
    }, {name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1"},
    {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1"
    },
    {
        name: "Git",
        icon: SiGit,
        color: "#000000",
        darkColor: "#FFFFFF"
    },
    {
        name: "GitHub",
        icon: SiGithub,
        color: "#000000",
        darkColor: "#FFFFFF"
    },
    {
        name: "Cloudflare",
        icon: SiCloudflare,
        color: "#F38020"
    },
    {
        name: "Cloudflare Workers",
        icon: SiCloudflareworkers,
        color: "#F38020"
    },
    {
        name: "cPanel",
        icon: SiCpanel,
        color: "#F38020"
    },
    {
        name: "GoDaddy",
        icon: SiGodaddy,
        color: "#4479A1",
        darkColor: "#007ACC"
    },
    {
        name: "Hostinger",
        icon: SiHostinger,
        color: "#673DE6",
    },
    {
        name: "JetBrains",
        icon: SiJetbrains,
        color: "#3A2D85"},
    {
        name: "WebStorm",
        icon: SiWebstorm,
        color: "#000000",
        darkColor: "#007ACC "},

    {
        name: "PhpStorm",
        icon: SiPhpstorm,
        color: "#000000",
        darkColor: "#007ACC"
    },
    {
        name: "Linux",
        icon: SiLinux,
        color: "#000000",
        darkColor: "#FFFFFF"
    },

]

const SkillCard = ({skill}) => {
    const Icon = skill.icon

    return (<div className="group flex flex-col items-center transition-all text-center gap-1">
        <div className="flex items-center justify-center w-10 h-10">
            <Icon size={40} className="dark:hidden transition-transform duration-300 group-hover:scale-110"
                  style={{color: skill.color}}/>
            <Icon size={40} className="hidden dark:block transition-transform duration-300 group-hover:scale-110"
                  style={{color: skill.darkColor ?? skill.color}}/>
        </div>
        <h3 className="text-xs font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {skill.name}
        </h3>
    </div>)
}

export default function Skills() {
    return (<section id="skills"
                     className="min-h-200 py-24 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 border-t border-slate-100 dark:border-gray-800">
        <div className="max-w-[1300px] mx-auto px-6">
            <div className="flex flex-col mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                    <div className="text-sm tracking-wider text-blue-500 dark:text-blue-400">WHAT I USE</div>
                    SKILLS <span
                    className="inline-flex items-center justify-center text-sm leading-none align-middle">AND</span>TOOLS
                </h2>
                <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-500"></div>
            </div>

            <div
                className="grid grid-cols-3 gap-5 sm:grid-cols-4 sm:gap-6 md:grid-cols-6 md:gap-8 lg:grid-cols-9 lg:gap-10 xl:grid-cols-10 xl:gap-12">
                {skills.map((skill, index) => (<SkillCard key={index} skill={skill}/>))}
            </div>
        </div>
    </section>)
}
