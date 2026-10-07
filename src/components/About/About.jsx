import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

// Forma de trabajo: desarrollo incremental por módulos
const steps = [
    { name: "Analizar", detail: "Entiendo el problema y qué debe resolver la aplicación." },
    { name: "Dividir en módulos", detail: "Separo el sistema en partes pequeñas y claras." },
    { name: "Construir", detail: "Desarrollo un módulo a la vez." },
    { name: "Probar", detail: "Verifico que funcione antes de avanzar." },
    { name: "Integrar", detail: "Lo uno al resto del sistema." },
    { name: "Mejorar", detail: "Reviso, ajusto y continúo con el siguiente." },
];

const pad = (n) => String(n).padStart(2, "0");

function About() {
    return (
        <Section id="about">
            <SectionHeading
                id="about-title"
                number="01"
                label="Sobre mí"
                title="Aprendo construyendo aplicaciones completas."
            />

            <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">

                {/* TEXT */}
                <Reveal className="max-w-prose space-y-5 text-base leading-relaxed text-ink-2 sm:text-lg">
                    <p>
                        Soy Mariana, Full Stack Developer en formación. Soy{" "}
                        <span className="text-ink">
                            Tecnóloga en Análisis y Desarrollo de Software
                        </span>{" "}
                        y actualmente curso 8.º semestre de{" "}
                        <span className="text-ink">Ingeniería de Sistemas</span>.
                    </p>

                    <p>
                        Disfruto construir aplicaciones web de principio a fin: la
                        interfaz, la API y la base de datos. Aprendo rápido, me
                        adapto con facilidad y mucho de lo que sé lo he aprendido
                        por mi cuenta, resolviendo problemas reales con software y
                        cuidando la calidad de lo que construyo.
                    </p>

                    <p>
                        Me interesa la{" "}
                        <span className="text-ink">Inteligencia Artificial</span>{" "}
                        como apoyo dentro de las aplicaciones (en PetBot integré un
                        asistente con Google Gemini) y también como herramienta
                        durante el desarrollo. Asistentes, chatbots y automatización
                        son áreas que quiero seguir explorando.
                    </p>

                    <p>
                        Sigo aprendiendo, y eso es justo lo que me motiva: ya
                        construyo aplicaciones completas y quiero seguir creciendo
                        técnicamente.
                    </p>
                </Reveal>

                {/* CÓMO TRABAJO */}
                <Reveal delay={0.1}>
                    <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-jade">
                        Cómo trabajo
                    </h3>

                    <p className="mt-3 leading-relaxed text-ink-2">
                        Trabajo por módulos: construyo una parte, compruebo que
                        funcione y solo entonces paso a la siguiente.
                    </p>

                    <ol className="mt-6">
                        {steps.map((step, i) => (
                            <li
                                key={step.name}
                                className="grid grid-cols-[2.5rem_1fr] border-t border-line py-3.5 last:border-b"
                            >
                                <span className="pt-0.5 font-mono text-xs text-ink-3">
                                    {pad(i + 1)}
                                </span>
                                <div>
                                    <p className="font-medium text-ink">{step.name}</p>
                                    <p className="mt-0.5 text-sm text-ink-2">
                                        {step.detail}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </Reveal>

            </div>
        </Section>
    );
}

export default About;
