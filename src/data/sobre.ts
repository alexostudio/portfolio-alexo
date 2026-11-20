// Contenido de la página /sobre (references/estructura.md: bio extendida, herramientas, clientes y CV).
// El CV no se declara aquí: basta con dejar un PDF en public/cv/ (ver src/pages/sobre.astro).

import type { ImageMetadata } from 'astro';
import { COLORES, LOREM, LOREM_LISTA } from './provisional';

export const sobre = {
	/** Foto de ALEXO; mientras sea null se pinta `colorFoto`. */
	foto: null as ImageMetadata | null,
	altFoto: '',
	colorFoto: COLORES.violeta,
	bio: [
		// Los dos primeros párrafos están aprobados por ALEXO; el resto, pendiente.
		'ALEXO es mi espacio creativo dedicado a la fotografía, el cine y la exploración visual.',
		'Soy fotógrafo y filmmaker con más de cuatro años de experiencia creando contenido para marcas, espacios, personas y proyectos que buscan comunicar algo más.',
		LOREM,
		LOREM,
	],
	herramientas: [...LOREM_LISTA],
	clientes: [...LOREM_LISTA],
};
