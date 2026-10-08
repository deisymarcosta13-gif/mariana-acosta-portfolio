import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "../../data/site";
import SakuraMark from "../ui/SakuraMark";

function Navbar() {
    const [scrolled, setScrolled] = useState(() => window.scrollY > 16);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Resalta el enlace de la sección visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        ["home", ...navLinks.map((link) => link.href.slice(1))].forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!open) return;

        const handleKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [open]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
                scrolled || open
                    ? "border-line bg-base/85 backdrop-blur-md"
                    : "border-transparent bg-transparent"
            }`}
        >
            <nav
                aria-label="Principal"
                className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
            >
                {/* LOGO */}
                <a
                    href="#home"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-md font-display text-base font-semibold tracking-tight text-ink"
                >
                    <SakuraMark className="h-5 w-5" />
                    {site.name}
                </a>

                {/* DESKTOP LINKS */}
                <ul className="hidden items-center gap-1 md:flex">
                    {navLinks.map((item) => {
                        const isActive = active === item.href.slice(1);

                        return (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    aria-current={isActive ? "true" : undefined}
                                    className={`rounded-lg px-3.5 py-2 text-sm transition-colors duration-200 ${
                                        isActive
                                            ? "bg-surface text-ink"
                                            : "text-ink-2 hover:text-ink"
                                    }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* HAMBURGER BUTTON */}
                <button
                    type="button"
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(!open)}
                    className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden md:hidden"
                    >
                        <ul className="border-t border-line px-5 py-3 sm:px-8">
                            {navLinks.map((item) => {
                                const isActive = active === item.href.slice(1);

                                return (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            aria-current={isActive ? "true" : undefined}
                                            onClick={() => setOpen(false)}
                                            className={`flex h-12 items-center rounded-lg px-3 text-base transition-colors ${
                                                isActive
                                                    ? "bg-surface text-ink"
                                                    : "text-ink-2"
                                            }`}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;
