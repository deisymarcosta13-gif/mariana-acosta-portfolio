import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiFastapi,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiMysql,
    SiPostgresql,
    SiPostman,
    SiAstro,
    SiPython,
    SiSharp,
    SiClaude,
    SiVercel,
    SiRender
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

// `focus` marca el grupo del enfoque actual (más protagonismo visual).
// `note` es una aclaración corta junto a la tecnología, sin niveles numéricos.
const categories = [
    {
        title: "Enfoque actual",
        focus: true,
        items: [
            { name: "FastAPI", icon: <SiFastapi /> },
            { name: "Python", icon: <SiPython /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "React", icon: <FaReact /> }
        ]
    },
    {
        title: "Conocimientos secundarios",
        items: [
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Astro", icon: <SiAstro /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "C#", icon: <SiSharp />, note: "POO" }
        ]
    },
    {
        title: "Herramientas",
        items: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "VS Code", icon: <VscVscode /> },
            { name: "Claude", icon: <SiClaude /> }
        ]
    },
    {
        title: "Despliegue",
        items: [
            { name: "Vercel", icon: <SiVercel /> },
            { name: "Render", icon: <SiRender /> }
        ]
    }
];

function Skills() {
    return (
        <Section id="skills">
            <SectionHeading
                id="skills-title"
                number="03"
                label="Skills"
                title="Tecnologías con las que trabajo."
            />

            <div className="border-b border-line">
                {categories.map((cat, index) => (
                    <Reveal
                        key={cat.title}
                        delay={index * 0.06}
                        className="grid gap-5 border-t border-line py-7 md:grid-cols-[200px_1fr] md:gap-8"
                    >
                        {/* CATEGORY TITLE */}
                        <h3
                            className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] md:pt-1 ${
                                cat.focus ? "text-jade" : "text-ink-3"
                            }`}
                        >
                            {cat.focus && (
                                <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 rounded-full bg-primary"
                                />
                            )}
                            {cat.title}
                        </h3>

                        {/* SKILLS */}
                        <ul
                            className={`grid gap-x-6 ${
                                cat.focus
                                    ? "grid-cols-1 gap-y-5 sm:grid-cols-3 lg:grid-cols-5"
                                    : "grid-cols-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-4"
                            }`}
                        >
                            {cat.items.map((item) => (
                                <li
                                    key={item.name}
                                    className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${
                                        cat.focus
                                            ? "text-lg font-medium text-ink"
                                            : "text-ink-2"
                                    }`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`${
                                            cat.focus
                                                ? "text-2xl text-jade"
                                                : "text-xl text-ink-3"
                                        }`}
                                    >
                                        {item.icon}
                                    </span>

                                    {item.name}

                                    {item.note && (
                                        <span
                                            className={`rounded-md border px-1.5 py-0.5 font-mono text-[11px] font-normal leading-none ${
                                                cat.focus
                                                    ? "border-primary/40 bg-pine/60 text-jade"
                                                    : "border-line text-ink-3"
                                            }`}
                                        >
                                            {item.note}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}

export default Skills;
