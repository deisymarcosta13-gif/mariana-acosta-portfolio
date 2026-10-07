# Sakura Tech — Portafolio de Mariana Acosta

Portafolio personal de Mariana Acosta, desarrolladora Full Stack en formación. Reúne su perfil, formación, tecnologías y proyectos, y permite contactarla directamente desde el sitio.

**Sitio:** _pendiente de publicar_ <!-- Reemplazar por la URL definitiva cuando exista -->

## Tecnologías

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React y React Icons
- Web3Forms (envío del formulario de contacto)
- ESLint

## Características

- Página única con secciones de perfil, formación, skills, proyectos y contacto.
- Showcase de proyectos en carrusel, con capturas ampliables y enlaces a demo y código.
- Formulario de contacto con validación, estados de envío, éxito y error, y protección básica contra spam.
- Diseño responsive para móvil, tablet y escritorio.
- Accesibilidad: navegación por teclado, foco visible y respeto por la preferencia de reducir movimiento.

## Ejecutar en local

Requiere Node.js 20.19+ o 22.12+.

```bash
npm install
cp .env.example .env.local   # luego añade tu access key de Web3Forms
npm run dev
```

Otros comandos:

```bash
npm run build     # build de producción en dist/
npm run preview   # sirve el build localmente
npm run lint
```

## Variables de entorno

| Variable | Descripción |
| --- | --- |
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key de [Web3Forms](https://web3forms.com) para recibir los mensajes del formulario. |

En producción debe configurarse en el panel del hosting antes del build. Sin ella, el formulario muestra un mensaje de error con el correo de contacto como alternativa.

## Autora

**Mariana Acosta** — [GitHub](https://github.com/deisymarcosta13-gif) · [LinkedIn](https://www.linkedin.com/in/mariana-acosta-566831289/)
