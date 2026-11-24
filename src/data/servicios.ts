// Servicios de la portada. Títulos de references/estructura.md.
// Descripciones: contenidoTexto.md del usuario (2026-11-23).
// Imágenes (6.4): mientras ALEXO no mande fotos pensadas para cada servicio, se reutiliza
// material del sitio; donde no hay nada representativo, un color provisional.

import { url } from '../utils/url';
import type { ImageMetadata } from 'astro';
import poster from '../assets/hero/poster.jpg';
import guitarrista from '../assets/proyectos/musica-y-conciertos/musica-y-conciertos-02.jpg';
import { COLORES } from './provisional';

export interface Servicio {
	titulo: string;
	descripcion: string;
	/** Imagen ilustrativa (decorativa: el título ya dice qué es); null = se pinta `color`. */
	imagen: ImageMetadata | null;
	color: string;
}

export const servicios: Servicio[] = [
	{
		titulo: 'Producción audiovisual',
		descripcion:
			'Conceptualización y producción de contenido cinematográfico, comercial y digital. De la idea a la imagen en movimiento.',
		imagen: poster,
		color: COLORES.azul,
	},
	{
		titulo: 'Fotografía',
		descripcion:
			'Imágenes que capturan la esencia de espacios, marcas y personas, con atención a la luz, la composición y los detalles.',
		imagen: guitarrista,
		color: COLORES.vino,
	},
	{
		titulo: 'Postproducción y dirección creativa',
		descripcion:
			'Edición, color y desarrollo visual para dar coherencia, ritmo y personalidad a cada proyecto.',
		imagen: null,
		color: COLORES.purpura,
	},
];

/** Formulario de contacto con este servicio ya elegido en "Tipo de proyecto". */
export const cotizarServicio = (servicio: Servicio) =>
	url(`/contacto/?tipo=${encodeURIComponent(servicio.titulo)}`);
