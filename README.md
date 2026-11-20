# ALEXO — Portafolio de foto y video

Sitio web de ALEXO / alexo film, fotografía y producción audiovisual en Ciudad de México.
Sitio estático hecho con [Astro](https://astro.build).

## Estado

En construcción. Ya están la base visual (tipografía Wix Madefor autoalojada, colores de
marca, encabezado con menú adaptable al celular y pie de página) y la portada con video de
fondo. Faltan las secciones de la portada y las páginas de proyectos.

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
├── styles/global.css    Colores, tipografía y estilos base
├── layouts/Base.astro   Estructura común de las páginas
├── components/          Encabezado, portada (hero) y pie de página
├── pages/               Rutas del sitio
└── assets/              Logotipos e imágenes (Astro las optimiza)
public/video/            Video de la portada, ya comprimido
```

Los videos de `public/video/` se sirven tal cual. Para reemplazarlos, comprímelos antes
(H.264 y VP9, sin audio, menos de 10 MB cada uno).
