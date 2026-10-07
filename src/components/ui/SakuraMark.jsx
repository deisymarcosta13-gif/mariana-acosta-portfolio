// Flor de cerezo: el detalle de identidad del portafolio.
function SakuraMark({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`text-jade ${className}`}
        >
            <g fill="currentColor">
                {[0, 72, 144, 216, 288].map((angle) => (
                    <ellipse
                        key={angle}
                        cx="12"
                        cy="6.6"
                        rx="3.3"
                        ry="5"
                        transform={`rotate(${angle} 12 12)`}
                    />
                ))}
            </g>
            <circle cx="12" cy="12" r="1.7" className="fill-base" />
        </svg>
    );
}

export default SakuraMark;
