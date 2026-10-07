import { motion } from "framer-motion";
import { ArrowRight, Download, FileText } from "lucide-react";
import Mariana from "../../assets/mariana-perfil.jpg";
import { site, showCv } from "../../data/site";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

const stack = ["FastAPI", "Python", "MySQL", "PostgreSQL", "React"];

const ease = [0.22, 1, 0.36, 1];

function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-32 lg:pb-16"
        >
            {/* Único halo de la página */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]"
            />

            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">

                {/* TEXTO */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                >
                    <div className="flex items-center gap-3">
                        {/* En móvil la foto es un avatar: el mensaje va primero */}
                        <img
                            src={Mariana}
                            alt=""
                            width="48"
                            height="48"
                            className="h-12 w-12 rounded-full border border-line-strong object-cover object-[50%_22%] lg:hidden"
                        />

                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-2">
                            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" />
                            {site.role}
                        </p>
                    </div>

                    <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
                        Hola, soy Mariana.
                        <span className="mt-2 block text-ink-2">
                            Construyo aplicaciones web{" "}
                            <span className="text-jade">completas</span>, de la
                            interfaz a la base de datos.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
                        Desarrolladora Full Stack en formación, con interés en
                        integrar Inteligencia Artificial en aplicaciones web.
                        Busco oportunidades como{" "}
                        <span className="text-ink">Full Stack Junior</span> para
                        aportar en proyectos reales y seguir creciendo.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button href="#projects">
                            Ver proyectos
                            <ArrowRight size={16} />
                        </Button>

                        {showCv && (
                            <div className="flex items-center gap-3">
                                <Button
                                    href={site.cv || undefined}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="secondary"
                                    className="flex-1 sm:flex-none"
                                >
                                    <FileText size={16} />
                                    Ver CV
                                </Button>

                                <Button
                                    href={site.cv || undefined}
                                    download
                                    variant="secondary"
                                    size="sm"
                                    aria-label="Descargar CV"
                                >
                                    <Download size={14} />
                                    Descargar
                                </Button>
                            </div>
                        )}

                        <SocialLinks className="sm:ml-2" />
                    </div>

                    {/* STACK */}
                    <div className="mt-12 border-t border-line pt-6">
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-3">
                            Stack principal
                        </p>

                        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-ink-2">
                            {stack.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* IMAGEN (solo desktop) */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease }}
                    className="hidden justify-end lg:flex"
                >
                    <div className="relative w-full max-w-sm">
                        <img
                            src={Mariana}
                            alt="Retrato de Mariana Acosta"
                            width="384"
                            height="448"
                            className="aspect-[6/7] w-full rounded-2xl border border-line-strong object-cover object-top"
                        />

                        {/* Esquina de acento */}
                        <span
                            aria-hidden="true"
                            className="absolute -bottom-3 -left-3 h-16 w-16 rounded-bl-2xl border-b-2 border-l-2 border-jade/60"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;
