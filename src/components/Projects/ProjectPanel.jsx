import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Button from "../ui/Button";
import Tag from "../ui/Tag";

const ease = [0.22, 1, 0.36, 1];

// Entrada en cascada: número, nombre, descripción, tecnologías, botones
const content = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

function Label({ children }) {
    return (
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-2">
            {children}
            <span className="h-px flex-1 bg-line" />
        </p>
    );
}

const pad = (n) => String(n).padStart(2, "0");

// Ficha del proyecto activo: el marco es fijo y el contenido entra en cascada.
// Su altura se ajusta a cada proyecto; los controles viven junto al monitor,
// así que el cambio de altura no los desplaza.
function ProjectPanel({ project, number }) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-sm lg:px-8 lg:py-7">
            {/* Filo de luz superior */}
            <span
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            />

            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={project.title}
                    variants={content}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <motion.div variants={item}>
                        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-jade">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            Proyecto {pad(number)}
                        </p>

                        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-[26px]">
                            {project.title}
                        </h3>
                    </motion.div>

                    {project.purpose && (
                        <motion.div variants={item} className="mt-5">
                            <Label>{project.purposeLabel ?? "¿Qué problema resuelve?"}</Label>
                            <p className="mt-2 text-[15px] leading-[1.6] text-ink">
                                {project.purpose}
                            </p>
                        </motion.div>
                    )}

                    <motion.div variants={item} className="mt-5">
                        <Label>Descripción</Label>
                        <p className="mt-2 text-[15px] leading-[1.6] text-ink-2">
                            {project.description}
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="mt-5">
                        <Label>Tecnologías</Label>
                        <ul aria-label="Tecnologías" className="mt-2.5 flex flex-wrap gap-1.5">
                            {project.tech.map((tech) => (
                                <Tag key={tech}>{tech}</Tag>
                            ))}
                        </ul>
                    </motion.div>

                    {(project.demo || project.github) && (
                        <motion.div variants={item} className="mt-5 flex flex-wrap gap-3">
                            {project.demo && (
                                <Button href={project.demo} size="sm">
                                    Ver demo
                                    <ArrowUpRight size={16} />
                                </Button>
                            )}

                            {project.github && (
                                <Button href={project.github} size="sm" variant="secondary">
                                    <FaGithub />
                                    GitHub
                                </Button>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default ProjectPanel;
