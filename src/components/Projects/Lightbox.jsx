import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const navButton =
    "flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-base/80 text-ink transition-colors hover:bg-surface-2 aria-disabled:cursor-default aria-disabled:opacity-30 aria-disabled:hover:bg-base/80";

function Lightbox({ slides, index, onChange, onClose }) {
    const dialogRef = useRef(null);
    const closeRef = useRef(null);

    const slide = slides[index];
    const hasPrev = index > 0;
    const hasNext = index < slides.length - 1;

    // Bloquea el scroll y devuelve el foco al cerrar
    useEffect(() => {
        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        closeRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            previousFocus?.focus?.();
        };
    }, []);

    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight" && hasNext) onChange(index + 1);
            if (e.key === "ArrowLeft" && hasPrev) onChange(index - 1);

            // Mantiene el foco dentro del modal
            if (e.key === "Tab") {
                const focusable = dialogRef.current.querySelectorAll("button");
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [index, hasNext, hasPrev, onChange, onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
        >
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label={`Imágenes de ${slide.title}`}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl"
            >
                {/* TOP BAR */}
                <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="text-sm text-ink" aria-live="polite">
                        {slide.title}
                        <span className="ml-3 font-mono text-xs text-ink-3">
                            {index + 1} / {slides.length}
                        </span>
                    </p>

                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar"
                        className={navButton}
                    >
                        <X size={18} />
                    </button>
                </div>

                <img
                    src={slide.src}
                    alt={`Captura de ${slide.title}`}
                    className="max-h-[70vh] w-full rounded-xl border border-line bg-base-2 object-contain"
                />

                {/* CONTROLS */}
                <div className="mt-4 flex justify-center gap-3">
                    <button
                        type="button"
                        onClick={() => hasPrev && onChange(index - 1)}
                        aria-label="Anterior"
                        aria-disabled={!hasPrev}
                        className={navButton}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        type="button"
                        onClick={() => hasNext && onChange(index + 1)}
                        aria-label="Siguiente"
                        aria-disabled={!hasNext}
                        className={navButton}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default Lightbox;
