// Servicios de la portada. Títulos de references/estructura.md.
// Las descripciones son provisionales (lorem ipsum) hasta que ALEXO entregue las definitivas.

import { LOREM } from './provisional';

export interface Servicio {
	titulo: string;
	descripcion: string;
}

export const servicios: Servicio[] = [
	{ titulo: 'Producción audiovisual', descripcion: LOREM },
	{ titulo: 'Fotografía', descripcion: LOREM },
	{ titulo: 'Postproducción y dirección creativa', descripcion: LOREM },
];
