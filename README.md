# ALEXO — Portafolio de foto y video

Sitio web de ALEXO / alexo film, fotografía y producción audiovisual en Ciudad de México.
Sitio estático hecho con [Astro](https://astro.build).

## Estado

En construcción. Ya están la base visual (tipografía Switzer autoalojada, colores de
marca, encabezado con menú adaptable al celular y pie de página) y la portada con video de
fondo, las secciones Sobre, Servicios, Proyectos recientes
y Cierre, y las páginas interiores: proyectos por categoría con galería y Contacto con
formulario. Parte del contenido es provisional (textos de relleno
y colores en lugar de fotos que faltan). Aún no está publicado.

## Requisitos

- Node.js 22.23.4 o superior
- Conexión a internet en la primera compilación (Astro descarga la fuente de Fontshare y la
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
├── data/                Contenido editable (servicios, categorías, Bienes Raíces)
├── styles/global.css    Colores, tipografía y estilos base
├── layouts/Base.astro   Estructura común de las páginas
├── components/          Encabezado, secciones de la portada y pie de página
├── pages/               Rutas: portada, proyectos/, contacto
└── assets/              Logotipos e imágenes (Astro las optimiza)
public/video/            Video de la portada, ya comprimido
```

El portafolio se organiza en categorías y, dentro de cada una, proyectos (todo en
`src/data/categorias.ts`). Para añadir fotos, guárdalas en `src/assets/proyectos/<categoria>/`
(máximo 2560 px de lado largo y sin metadatos de cámara) y declara cada una, con su texto
alternativo, en `fotos` del proyecto al que pertenece. Si una foto no pertenece a ningún
proyecto, la compilación se detiene y dice cuál es. Cada proyecto tiene su página en
`/proyectos/<categoria>/<proyecto>/`; una categoría con `publicada: false` no se muestra.

**Formulario de contacto:** con el ID de un formulario de [Formspree](https://formspree.io) en
`formspree` de `src/config/sitio.ts`, los mensajes se envían ahí. Mientras sea `null`, el
formulario abre el programa de correo con el mensaje ya escrito.

Los videos de `public/video/` se sirven tal cual. Para reemplazarlos, comprímelos antes
(H.264 y VP9, sin audio, menos de 10 MB cada uno).
