// Datos generales del portafolio.
// Los enlaces vacíos ("") no se muestran en la interfaz.
export const site = {
    name: "Mariana Acosta",
    role: "Full Stack Developer",
    github: "https://github.com/deisymarcosta13-gif",
    linkedin: "https://www.linkedin.com/in/mariana-acosta-566831289/",
    email: "deisymarcosta13@gmail.com",
    // CV: coloca el PDF en public/cv-mariana-acosta.pdf y cambia este valor
    // a "/cv-mariana-acosta.pdf". Mientras esté vacío, los botones de CV no
    // se muestran (así nunca apuntan a un archivo inexistente).
    cv: "/cv-mariana-acosta.pdf",
};

// En desarrollo muestra las opciones de CV (sin enlace) para revisar su diseño.
// En producción depende solo de `site.cv`.
export const showCv = Boolean(site.cv) || import.meta.env.DEV;

export const navLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Formación", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
];
