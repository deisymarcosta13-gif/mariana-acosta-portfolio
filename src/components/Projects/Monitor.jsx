import { AnimatePresence, motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import SakuraMark from "../ui/SakuraMark";

const ease = [0.22, 1, 0.36, 1];

// La captura entra desde el lado de la flecha pulsada
const slide = {
    enter: (direction) => ({ opacity: 0, x: direction * 28 }),
    center: { opacity: 1, x: 0 },
    exit: (direction) => ({ opacity: 0, x: direction * -28 }),
};

// Monitor de escritorio único: solo cambia la captura de la pantalla.
function Monitor({ project, direction, onOpen }) {
    return (
        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            {/* Halo esmeralda detrás del monitor */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-[12%] top-[6%] bottom-[30%] rounded-full bg-primary/10 blur-[80px]"
            />

            {/* MARCO */}
            <div className="relative rounded-[18px] border border-line-strong bg-gradient-to-b from-surface-2 to-base-2 p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),0_0_60px_-20px_rgba(16,185,129,0.2)] sm:rounded-[22px] sm:p-3">
                {/* Brillo del canto superior */}
                <span
                    aria-hidden="true"
                    className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />

                {/* PANTALLA (la captura se ve completa: object-contain) */}
                <button
                    type="button"
                    onClick={onOpen}
                    aria-label={`Ampliar captura de ${project.title}`}
                    className="group relative block aspect-[9/4] w-full overflow-hidden rounded-[10px] bg-base shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_30px_rgba(0,0,0,0.9)] sm:rounded-xl"
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={project.title}
                            src={project.images[0]}
                            alt={`Captura de ${project.title}`}
                            custom={direction}
                            variants={slide}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease }}
                            className="absolute inset-0 h-full w-full object-contain"
                        />
                    </AnimatePresence>

                    {/* Reflejo del cristal */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%)]"
                    />

                    <span
                        aria-hidden="true"
                        className="absolute right-3 top-3 hidden h-8 w-8 items-center justify-center rounded-lg border border-line-strong bg-base/80 text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:flex"
                    >
                        <Maximize2 size={14} />
                    </span>
                </button>

                {/* MENTÓN: logo y LED de encendido */}
                <div
                    aria-hidden="true"
                    className="relative flex h-5 items-center justify-center pt-2 sm:h-7 sm:pt-3"
                >
                    <SakuraMark className="h-3 w-3 opacity-70 sm:h-3.5 sm:w-3.5" />
                    <span className="absolute right-3 top-1/2 h-1 w-1 rounded-full bg-primary shadow-[0_0_6px_2px_rgba(16,185,129,0.5)] sm:top-[calc(50%+6px)]" />
                </div>
            </div>

            {/* PIE */}
            <div
                aria-hidden="true"
                className="relative mx-auto h-8 w-[13%] bg-gradient-to-b from-base-2 via-surface to-surface-2 [clip-path:polygon(20%_0,80%_0,100%_100%,0_100%)] sm:h-12"
            />
            <div
                aria-hidden="true"
                className="relative mx-auto h-2.5 w-[34%] rounded-t-md rounded-b-[50%] border-t border-line-strong bg-gradient-to-b from-surface-2 to-base-2 sm:h-3.5"
            />
            <div
                aria-hidden="true"
                className="mx-auto mt-1 h-3 w-1/2 rounded-[50%] bg-black/70 blur-md"
            />
        </div>
    );
}

export default Monitor;
