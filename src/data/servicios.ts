// Servicios de la portada. Títulos de references/estructura.md.
// Las descripciones son provisionales (lorem ipsum) hasta que ALEXO entregue las definitivas.
// Imágenes (6.4): mientras ALEXO no mande fotos pensadas para cada servicio, se reutiliza
// material del sitio; donde no hay nada representativo, un color provisional.

import type { ImageMetadata } from 'astro';
import poster from '../assets/hero/poster.jpg';
import guitarrista from '../assets/proyectos/musica-y-conciertos/musica-y-conciertos-02.jpg';
import { COLORES, LOREM } from './provisional';

export interface Servicio {
	titulo: string;
	descripcion: string;
	/** Imagen ilustrativa (decorativa: el título ya dice qué es); null = se pinta `color`. */
	imagen: ImageMetadata | null;
	color: string;
}

export const servicios: Servicio[] = [
	{ titulo: 'Producción audiovisual', descripcion: LOREM, imagen: poster, color: COLORES.azul },
	{ titulo: 'Fotografía', descripcion: LOREM, imagen: guitarrista, color: COLORES.vino },
	{
		titulo: 'Postproducción y dirección creativa',
		descripcion: LOREM,
		imagen: null,
		color: COLORES.purpura,
	},
];

/** Formulario de contacto con este servicio ya elegido en "Tipo de proyecto". */
export const cotizarServicio = (servicio: Servicio) =>
	`/contacto/?tipo=${encodeURIComponent(servicio.titulo)}`;
