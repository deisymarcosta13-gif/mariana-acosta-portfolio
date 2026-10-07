import { ArrowUp } from "lucide-react";
import { site } from "../../data/site";
import SakuraMark from "../ui/SakuraMark";

function Footer() {
    return (
        <footer className="py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-ink-3 sm:flex-row sm:px-8">

                <p className="flex items-center gap-2">
                    <SakuraMark className="h-4 w-4" />
                    © {new Date().getFullYear()} {site.name}
                </p>

                <p className="font-mono text-xs">
                    Hecho con React y Tailwind CSS
                </p>

                <a
                    href="#home"
                    className="flex h-11 items-center gap-1.5 rounded-lg px-2 text-ink-2 transition-colors hover:text-ink"
                >
                    Volver arriba
                    <ArrowUp size={15} />
                </a>

            </div>
        </footer>
    );
}

export default Footer;
