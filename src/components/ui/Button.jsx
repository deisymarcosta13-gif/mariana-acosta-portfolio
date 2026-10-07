const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

// `disabled:` solo aplica a <button>; los enlaces no se ven afectados.
const variants = {
    primary:
        "bg-primary text-on-primary hover:bg-primary-hover disabled:hover:bg-primary",
    secondary:
        "border border-line-strong text-ink hover:border-jade/60 hover:bg-surface disabled:hover:border-line-strong disabled:hover:bg-transparent",
};

const sizes = {
    md: "h-12 px-5 text-sm sm:h-11",
    sm: "h-10 px-4 text-[13px]",
};

// Renderiza <a> si recibe `href`, de lo contrario <button>.
function Button({
    href,
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...props
}) {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        const external = /^https?:\/\//.test(href);

        return (
            <a
                href={href}
                className={classes}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                {...props}
            >
                {children}
                {external && <span className="sr-only">(abre en una pestaña nueva)</span>}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}

export default Button;
