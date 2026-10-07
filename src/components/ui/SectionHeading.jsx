import Reveal from "./Reveal";

function SectionHeading({ id, number, label, title, description }) {
    return (
        <Reveal className="mb-10 max-w-2xl md:mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-jade">
                <span className="text-ink-3">{number} /</span> {label}
            </p>

            <h2
                id={id}
                className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl"
            >
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-relaxed text-ink-2">
                    {description}
                </p>
            )}
        </Reveal>
    );
}

export default SectionHeading;
