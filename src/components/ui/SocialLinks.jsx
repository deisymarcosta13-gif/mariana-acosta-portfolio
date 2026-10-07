import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import { site } from "../../data/site";

const socials = [
    { label: "GitHub", href: site.github, icon: <FaGithub /> },
    { label: "LinkedIn", href: site.linkedin, icon: <FaLinkedinIn /> },
    {
        label: "Correo",
        href: site.email && `mailto:${site.email}`,
        icon: <Mail size={18} />,
    },
].filter((item) => item.href);

function SocialLinks({ className = "" }) {
    return (
        <ul className={`flex items-center gap-2 ${className}`}>
            {socials.map((item) => (
                <li key={item.label}>
                    <a
                        href={item.href}
                        aria-label={item.label}
                        {...(item.href.startsWith("http") && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                        })}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-lg text-ink-2 transition-colors duration-200 hover:border-jade/60 hover:text-ink"
                    >
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SocialLinks;
