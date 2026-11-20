# ALEXO — Portafolio de foto y video

Sitio web de ALEXO / alexo film, fotografía y producción audiovisual en Ciudad de México.
Sitio estático hecho con [Astro](https://astro.build).

## Estado

En construcción. Ya están la base visual (tipografía Wix Madefor autoalojada, colores de
marca, encabezado con menú adaptable al celular y pie de página) y la portada con video de
fondo, las secciones Sobre, Detrás de cámara, Servicios, Proyectos recientes, Exploraciones
y Cierre, y las páginas interiores: proyectos por categoría con galería, Sobre (con CV
descargable) y Contacto con formulario. Parte del contenido es provisional (textos de relleno
y colores en lugar de fotos que faltan). Aún no está publicado.

## Requisitos

- Node.js 22.23.4 o superior
- Conexión a internet en la primera compilación (Astro descarga las fuentes de Google y las
  sirve desde el propio sitio)

## Cómo levantarlo

```sh
npm install
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # compila el sitio en ./dist/
npm run preview   # sirve ./dist/ para revisarlo antes de publicar
```

## Estructura

```text
src/
├── config/sitio.ts      Datos de contacto, menú y redes (editar aquí)
├── data/                Contenido editable (servicios, categorías, exploraciones, sobre)
├── styles/global.css    Colores, tipografía y estilos base
├── layouts/Base.astro   Estructura común de las páginas
├── components/          Encabezado, secciones de la portada y pie de página
├── pages/               Rutas: portada, proyectos/, sobre, contacto
└── assets/              Logotipos e imágenes (Astro las optimiza)
public/video/            Video de la portada, ya comprimido
```

Para añadir fotos a una categoría de proyectos, guárdalas en
`src/assets/proyectos/<categoria>/` (máximo 2560 px de lado largo y sin metadatos de cámara)
y escribe su texto alternativo en `fotos` de esa categoría en `src/data/categorias.ts`: sin él
la compilación se detiene y dice qué falta. Cada categoría tiene su página en
`/proyectos/<categoria>/`.

**CV:** deja el PDF en `public/cv/` y vuelve a compilar; la página Sobre mostrará el botón de
descarga. Sin PDF, el botón no aparece.

**Formulario de contacto:** con el ID de un formulario de [Formspree](https://formspree.io) en
`formspree` de `src/config/sitio.ts`, los mensajes se envían ahí. Mientras sea `null`, el
formulario abre el programa de correo con el mensaje ya escrito.

Los videos de `public/video/` se sirven tal cual. Para reemplazarlos, comprímelos antes
(H.264 y VP9, sin audio, menos de 10 MB cada uno).
