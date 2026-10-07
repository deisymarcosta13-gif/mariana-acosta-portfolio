// Contenedor común: mismo ancho, padding y ritmo vertical en todas las secciones.
function Section({ id, alt = false, className = "", children }) {
    return (
        <section
            id={id}
            aria-labelledby={`${id}-title`}
            className={`scroll-mt-16 py-14 md:py-20 ${
                alt ? "border-y border-line bg-base-2" : ""
            } ${className}`}
        >
            <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
                {children}
            </div>
        </section>
    );
}

export default Section;
