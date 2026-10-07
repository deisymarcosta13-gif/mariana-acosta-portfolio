import { useRef, useState } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";

import { site } from "../../data/site";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

const initialValues = { name: "", email: "", message: "" };

// La access key de Web3Forms es pública por diseño; se define en .env.local
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const ENDPOINT = "https://api.web3forms.com/submit";
const TIMEOUT_MS = 15000;

async function sendMessage(values) {
    if (!ACCESS_KEY) {
        throw new Error("Falta VITE_WEB3FORMS_ACCESS_KEY.");
    }

    const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: ACCESS_KEY,
            subject: "Nuevo mensaje desde tu portafolio",
            from_name: "Portafolio Mariana Acosta",
            name: values.name.trim(),
            email: values.email.trim(),
            message: values.message.trim(),
        }),
        signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
        throw new Error(result.message || `HTTP ${response.status}`);
    }
}

function validate(values) {
    const errors = {};

    if (!values.name.trim()) {
        errors.name = "Escribe tu nombre.";
    }

    if (!values.email.trim()) {
        errors.email = "Escribe tu correo.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = "Ese correo no parece válido.";
    }

    if (values.message.trim().length < 10) {
        errors.message = "Cuéntame un poco más (mínimo 10 caracteres).";
    }

    return errors;
}

const fieldClass =
    "mt-2 w-full rounded-lg border bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-3 transition-colors duration-200 hover:border-line-strong focus:border-jade focus:outline-none focus:ring-2 focus:ring-jade/30 aria-[invalid=true]:border-danger";

function Field({ id, label, error, as: Tag = "input", ...props }) {
    return (
        <div>
            <label htmlFor={id} className="text-sm font-medium text-ink">
                {label}
            </label>

            <Tag
                id={id}
                name={id}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? `${id}-error` : undefined}
                className={`${fieldClass} ${error ? "border-danger" : "border-line"}`}
                {...props}
            />

            {error && (
                <p id={`${id}-error`} className="mt-2 text-sm text-danger">
                    {error}
                </p>
            )}
        </div>
    );
}

function Contact() {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    // idle | submitting | success | error
    const [status, setStatus] = useState("idle");
    // Bloquea un segundo envío antes de que React vuelva a renderizar
    const sending = useRef(false);

    const isSubmitting = status === "submitting";

    function handleChange(e) {
        const { name, value } = e.target;
        const next = { ...values, [name]: value };

        setValues(next);

        // El aviso de éxito se oculta al escribir de nuevo; el de error se
        // mantiene para conservar el correo alternativo
        if (status === "success") setStatus("idle");

        // Si el campo ya tenía error, se revalida mientras se escribe
        if (errors[name]) {
            setErrors({ ...errors, [name]: validate(next)[name] });
        }
    }

    function handleBlur(e) {
        const { name } = e.target;
        setErrors({ ...errors, [name]: validate(values)[name] });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (sending.current) return;

        const form = e.target;
        const found = validate(values);
        setErrors(found);

        const firstInvalid = Object.keys(found)[0];
        if (firstInvalid) {
            form.elements[firstInvalid].focus();
            return;
        }

        // Honeypot: solo un bot marca este campo oculto. Se simula el éxito
        // sin enviar nada para no darle pistas.
        if (form.elements.botcheck.checked) {
            setValues(initialValues);
            setStatus("success");
            return;
        }

        sending.current = true;
        setStatus("submitting");

        try {
            await sendMessage(values);
            setValues(initialValues);
            setStatus("success");
        } catch (error) {
            if (import.meta.env.DEV) {
                console.warn("No se pudo enviar el formulario:", error);
            }
            setStatus("error");
        } finally {
            sending.current = false;
        }
    }

    return (
        <Section id="contact">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">

                {/* INTRO */}
                <div>
                    <SectionHeading
                        id="contact-title"
                        number="05"
                        label="Contacto"
                        title="¿Buscas una desarrolladora en crecimiento?"
                        description="Cuéntame sobre tu proyecto o propuesta. También puedes encontrarme en mis redes."
                    />

                    <Reveal delay={0.1} className="-mt-4 md:-mt-6">
                        <SocialLinks />
                    </Reveal>
                </div>

                {/* FORM */}
                <Reveal delay={0.1}>
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">

                        {/* Honeypot anti-spam: invisible y fuera del teclado y lectores de pantalla */}
                        <input
                            type="checkbox"
                            name="botcheck"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="hidden"
                        />

                        <div className="grid gap-5 sm:grid-cols-2">
                            <Field
                                id="name"
                                label="Nombre"
                                type="text"
                                autoComplete="name"
                                placeholder="Tu nombre"
                                value={values.name}
                                error={errors.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <Field
                                id="email"
                                label="Correo"
                                type="email"
                                autoComplete="email"
                                placeholder="tu@correo.com"
                                value={values.email}
                                error={errors.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>

                        <Field
                            as="textarea"
                            id="message"
                            label="Mensaje"
                            rows="5"
                            placeholder="Tu mensaje..."
                            value={values.message}
                            error={errors.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto"
                        >
                            {isSubmitting ? (
                                <>
                                    Enviando…
                                    <LoaderCircle size={16} className="animate-spin" />
                                </>
                            ) : (
                                <>
                                    Enviar mensaje
                                    <Send size={16} />
                                </>
                            )}
                        </Button>

                        {/* Un solo bloque para no alterar el espaciado del formulario */}
                        <div>
                            <div role="status" aria-live="polite">
                                {status === "success" && (
                                    <p className="flex items-start gap-3 rounded-lg border border-primary/40 bg-pine/40 px-4 py-3 text-sm leading-relaxed text-ink">
                                        <CircleCheck size={18} className="mt-0.5 shrink-0 text-jade" />
                                        <span>
                                            Mensaje enviado. Gracias por
                                            escribir, te responderé por correo.
                                        </span>
                                    </p>
                                )}
                            </div>

                            <div role="alert">
                                {status === "error" && (
                                    <p className="flex items-start gap-3 rounded-lg border border-danger/40 bg-surface px-4 py-3 text-sm leading-relaxed text-ink">
                                        <CircleAlert size={18} className="mt-0.5 shrink-0 text-danger" />
                                        <span>
                                            No pudimos enviar el mensaje.
                                            Inténtalo nuevamente o escríbeme
                                            directamente a{" "}
                                            <a
                                                href={`mailto:${site.email}`}
                                                className="text-jade underline underline-offset-2 transition-colors duration-200 hover:text-ink"
                                            >
                                                {site.email}
                                            </a>
                                            .
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>

                    </form>
                </Reveal>

            </div>
        </Section>
    );
}

export default Contact;
