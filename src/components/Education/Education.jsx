import { education } from "../../data/education";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

function Education() {
    return (
        <Section id="education" alt>
            <SectionHeading
                id="education-title"
                number="02"
                label="Formación"
                title="Construyendo mi camino en tecnología."
            />

            {/* TIMELINE */}
            <ol className="relative max-w-3xl space-y-6 border-l border-line pl-7 sm:pl-10">
                {education.map((item, i) => (
                    <li key={item.degree} className="relative">
                        {/* Punto de la línea de tiempo */}
                        <span
                            aria-hidden="true"
                            className={`absolute -left-7 top-7 h-2.5 w-2.5 -translate-x-1/2 rounded-full sm:-left-10 ${
                                item.current
                                    ? "bg-primary shadow-[0_0_8px_rgba(16,185,129,0.45)]"
                                    : "border border-line-strong bg-base-2"
                            }`}
                        />

                        <Reveal delay={i * 0.08}>
                            <article className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-7">
                                <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-2">
                                    {item.period}
                                    {item.badge && (
                                        <span
                                            className={`rounded-md border px-2 py-0.5 normal-case tracking-normal ${
                                                item.current
                                                    ? "border-primary/40 bg-pine/60 text-jade"
                                                    : "border-line text-ink-2"
                                            }`}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </p>

                                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                                    {item.degree}
                                </h3>

                                <p className="mt-1.5 text-ink-2">{item.institution}</p>
                            </article>
                        </Reveal>
                    </li>
                ))}
            </ol>
        </Section>
    );
}

export default Education;
