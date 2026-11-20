// Proyectos personales (references/estructura.md, sección 6).

import type { ImageMetadata } from 'astro';
import { COLORES, LOREM } from './provisional';

export interface Exploracion {
	titulo: string;
	texto: string;
	/** Imagen y alt; mientras falte, se muestra `color`. */
	imagen?: { src: ImageMetadata; alt: string };
	color: string;
	/** Destino de "Leer más"; mientras sea null, no se enlaza. */
	enlace: string | null;
}

export const exploraciones: Exploracion[] = [
	{ titulo: 'YouTube Channel', texto: LOREM, color: COLORES.violeta, enlace: null },
	{ titulo: 'Fotografía Callejera', texto: LOREM, color: COLORES.mostaza, enlace: null },
	{ titulo: 'Animaciones', texto: LOREM, color: COLORES.oliva, enlace: null },
];
