import petbotImg from "../assets/petbot.png";
import mallaImg from "../assets/malla.png";
import taskflowImg from "../assets/taskflow.png";
import memoryImg from "../assets/memory.png";
import trikiImg from "../assets/triki.png";

// Si un proyecto no tiene `github` o `demo`, ese botón no se muestra.
// `images[0]` es la captura que se muestra en el monitor del showcase.
// `purpose` es una frase breve; `purposeLabel` cambia su título (por defecto "¿Qué problema resuelve?").
export const projects = [
    {
        title: "PetBot",
        purpose: "Ayuda a los dueños de mascotas a llevar al día medicamentos, citas veterinarias y la información de cada mascota.",
        images: [petbotImg],
        description:
            "PetBot es una aplicación web full stack para el cuidado de mascotas. Cada usuario puede registrar sus mascotas con foto, llevar el control de sus medicamentos y citas veterinarias mediante un chat guiado, y consultar dudas de cuidado a un asistente de IA basado en Google Gemini 2.5 Flash. El frontend está hecho con React, Vite y Tailwind CSS; el backend es una API REST en FastAPI con autenticación JWT, contraseñas cifradas con bcrypt y una base de datos PostgreSQL gestionada con SQLAlchemy.",
        tech: ["React", "Vite", "Tailwind CSS", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "Google Gemini"],
        github: "https://github.com/deisymarcosta13-gif/PetBot",
        demo: "https://pet-bot-beige.vercel.app/",
    },
    {
        title: "Malla Curricular",
        purpose: "Ayuda a estudiantes a organizar su plan de estudios: materias, estados, prerrequisitos y progreso académico.",
        images: [mallaImg],
        description:
            "Malla Curricular es una aplicación web full stack para organizar y gestionar planes de estudio universitarios. Permite crear mallas académicas, organizar semestres y materias, definir estados, calificaciones y prerrequisitos, además de consultar y filtrar el progreso académico. Incluye autenticación de usuarios y recuperación de contraseña. El frontend está desarrollado con React y Vite; el backend es una API REST en FastAPI con SQLAlchemy y PostgreSQL.",
        tech: ["React", "Vite", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "Alembic", "Vercel", "Render", "Supabase"],
        github: "https://github.com/deisymarcosta13-gif/malla-curricular",
        demo: "https://malla-curricular-89mp.vercel.app",
    },
    {
        title: "TaskFlow",
        purpose: "Ayuda a organizar tareas y trabajo en equipo mediante equipos de trabajo y un tablero Kanban.",
        images: [taskflowImg],
        description:
            "TaskFlow es una aplicación web full stack para la gestión y organización de tareas. Permite a los usuarios crear y administrar tareas mediante un tablero Kanban, organizar equipos de trabajo y gestionar sus miembros. El frontend está desarrollado con React, TypeScript, Vite y Tailwind CSS; el backend utiliza FastAPI con Python, autenticación JWT y una base de datos PostgreSQL.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL", "JWT"],
        github: "https://github.com/deisymarcosta13-gif/Task--flow",
        demo: "https://task-flow-phi-plum.vercel.app/",
    },
    {
        title: "Memory Multiverse",
        purposeLabel: "¿Qué ofrece?",
        purpose: "Una experiencia de juego para poner a prueba la memoria con personajes de Rick and Morty, en tres niveles de dificultad.",
        images: [memoryImg],
        description:
            "Memory Multiverse es un juego de memoria web hecho con React y TypeScript que utiliza la API de Rick and Morty para generar las cartas con personajes de la serie. Tiene tres niveles de dificultad, filtro de personajes por estado, cronómetro, contador de intentos y récords guardados en el navegador. El diseño es responsive y funciona tanto en móvil como en escritorio.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Rick and Morty API", "localStorage"],
        github: "https://github.com/deisymarcosta13-gif/memory-multiverse",
        demo: "https://memory-multiverse.vercel.app/",
    },
    {
        title: "Triki",
        purposeLabel: "¿Qué ofrece?",
        purpose: "Una versión web del clásico Triki para jugar entre dos personas en el mismo dispositivo.",
        images: [trikiImg],
        description:
            "Juego de Triki (tres en raya) para dos jugadores en el mismo dispositivo, con marcador, tema claro/oscuro, efectos de sonido y animaciones con estilo neón.",
        tech: ["Astro", "Tailwind CSS", "JavaScript", "HTML5"],
        github: "https://github.com/deisymarcosta13-gif/Triki-game",
        demo: "https://triki-game-eight.vercel.app/",
    },
];
