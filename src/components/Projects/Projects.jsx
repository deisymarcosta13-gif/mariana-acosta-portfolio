import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "../../data/projects";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Monitor from "./Monitor";
import ProjectPanel from "./ProjectPanel";
import Lightbox from "./Lightbox";

// Todas las imágenes en una sola lista para navegar en el lightbox
const slides = projects.flatMap((project) =>
    project.images.map((src) => ({ src, title: project.title }))
);

const total = projects.length;
const pad = (n) => String(n).padStart(2, "0");

const arrowClass =
    "h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface/60 text-ink transition-[color,border-color,box-shadow] duration-200 hover:border-jade/60 hover:text-jade hover:shadow-[0_0_20px_-6px_rgba(16,185,129,0.45)]";

function ArrowButton({ step, onClick, className = "" }) {
    const Icon = step > 0 ? ChevronRight : ChevronLeft;

    return (
        <button
            type="button"
            onClick={() => onClick(step)}
            aria-label={step > 0 ? "Proyecto siguiente" : "Proyecto anterior"}
            className={`${arrowClass} ${className}`}
        >
            <Icon size={20} />
        </button>
    );
}

function Projects() {
    // `direction` indica hacia dónde se desliza la captura (1 = siguiente)
    const [[index, direction], setActive] = useState([0, 1]);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const project = projects[index];

    function go(step) {
        setActive([(index + step + total) % total, step]);
    }

    function goTo(i) {
        if (i !== index) setActive([i, i > index ? 1 : -1]);
    }

    // Flechas del teclado mientras el foco está dentro del showcase
    function handleKeyDown(e) {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            go(1);
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(-1);
        }
    }

    function openLightbox() {
        setLightboxIndex(slides.findIndex((slide) => slide.title === project.title));
    }

    return (
        <Section id="projects" alt>
            <SectionHeading
                id="projects-title"
                number="04"
                label="Proyectos"
                title="Lo que he construido."
                description="Aplicaciones web completas y proyectos interactivos, de la interfaz a la API y la base de datos."
            />

            <Reveal>
                <div
                    role="region"
                    aria-roledescription="carrusel"
                    aria-label="Showcase de proyectos"
                    onKeyDown={handleKeyDown}
                    className="xl:-mx-12"
                >
                    {/* En xl el showcase aprovecha el margen libre de la página */}
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-start xl:grid-cols-[1.1fr_1fr]">
                        {/* VISOR: flechas a los lados del monitor + indicadores */}
                        <div>
                            <div className="flex items-center gap-3">
                                {/* El margen inferior centra las flechas con la pantalla, no con el pie */}
                                <ArrowButton
                                    step={-1}
                                    onClick={go}
                                    className="hidden sm:mb-[94px] sm:flex"
                                />

                                <div className="min-w-0 flex-1">
                                    <Monitor
                                        project={project}
                                        direction={direction}
                                        onOpen={openLightbox}
                                    />
                                </div>

                                <ArrowButton
                                    step={1}
                                    onClick={go}
                                    className="hidden sm:mb-[94px] sm:flex"
                                />
                            </div>

                            {/* En móvil las flechas acompañan al contador */}
                            <div className="mt-5 flex items-center justify-center gap-5 sm:mt-4">
                                <ArrowButton step={-1} onClick={go} className="flex sm:hidden" />

                                <div className="flex flex-col items-center gap-1.5">
                                    <p className="font-mono text-sm tracking-[0.18em] text-ink-3">
                                        <span className="text-ink">{pad(index + 1)}</span>
                                        {" / "}
                                        {pad(total)}
                                    </p>

                                    <ul className="flex items-center">
                                        {projects.map((p, i) => (
                                            <li key={p.title}>
                                                <button
                                                    type="button"
                                                    onClick={() => goTo(i)}
                                                    aria-label={`Ver proyecto ${i + 1}: ${p.title}`}
                                                    aria-current={i === index ? "true" : undefined}
                                                    // Área táctil de 44px de alto; el margen negativo conserva el layout
                                                    className="group -my-1.5 flex h-11 items-center px-1"
                                                >
                                                    <span
                                                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                                                            i === index
                                                                ? "w-8 bg-primary shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                                                                : "w-1.5 bg-line-strong group-hover:bg-ink-3"
                                                        }`}
                                                    />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <ArrowButton step={1} onClick={go} className="flex sm:hidden" />
                            </div>
                        </div>

                        <ProjectPanel project={project} number={index + 1} />
                    </div>

                    {/* Anuncio para lectores de pantalla */}
                    <p className="sr-only" aria-live="polite">
                        Proyecto {index + 1} de {total}: {project.title}
                    </p>
                </div>
            </Reveal>

            {/* LIGHTBOX / MODAL */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        slides={slides}
                        index={lightboxIndex}
                        onChange={setLightboxIndex}
                        onClose={() => setLightboxIndex(null)}
                    />
                )}
            </AnimatePresence>
        </Section>
    );
}

export default Projects;
