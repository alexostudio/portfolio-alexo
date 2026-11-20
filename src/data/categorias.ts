// Categorías de proyectos (references/estructura.md). Añadir o quitar una = editar esta lista.
// Las fotos se descubren solas: basta con dejarlas en src/assets/proyectos/<slug>/.

import type { ImageMetadata } from 'astro';
import { COLORES, LOREM } from './provisional';

const archivos = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/proyectos/*/*.{jpg,jpeg,png,webp,avif}',
	{ eager: true },
);

export interface Categoria {
	slug: string;
	titulo: string;
	descripcion: string;
	/** Nombre de archivo de la portada dentro de su carpeta, y su texto alternativo. */
	portada?: { archivo: string; alt: string };
	/** Color provisional mientras la categoría no tenga fotos. */
	color: string;
}

export const categorias: Categoria[] = [
	{ slug: 'arquitectura', titulo: 'Arquitectura', descripcion: LOREM, color: COLORES.petroleo },
	{
		slug: 'bienes-raices',
		titulo: 'Bienes Raíces',
		descripcion: LOREM,
		portada: {
			archivo: 'bienes-raices-04.jpg',
			alt: 'Sala y comedor amplios con ventanales de piso a techo y vista a la ciudad',
		},
		color: COLORES.ocre,
	},
	{
		slug: 'restaurante',
		titulo: 'Restaurante',
		descripcion: LOREM,
		portada: {
			archivo: 'restaurante-05.jpg',
			alt: 'Vista cenital de un plato de nigiris y sashimi sobre mesa de madera, con palillos y salsa de soya',
		},
		color: COLORES.terracota,
	},
	{
		slug: 'concierto',
		titulo: 'Concierto',
		descripcion: LOREM,
		portada: {
			archivo: 'concierto-03.jpg',
			alt: 'Cantante con traje de charro levanta su sombrero en el escenario bajo luces azules',
		},
		color: COLORES.azul,
	},
	{ slug: 'retrato', titulo: 'Retrato', descripcion: LOREM, color: COLORES.vino },
	{ slug: 'eventos', titulo: 'Eventos', descripcion: LOREM, color: COLORES.jade },
	{ slug: 'bodas', titulo: 'Bodas', descripcion: LOREM, color: COLORES.magenta },
	{ slug: 'hoteleria', titulo: 'Hotelería', descripcion: LOREM, color: COLORES.indigo },
];

/** Todas las fotos de una categoría, ordenadas por nombre de archivo. */
export function fotosDe(slug: string): ImageMetadata[] {
	return Object.entries(archivos)
		.filter(([ruta]) => ruta.includes(`/proyectos/${slug}/`))
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([, modulo]) => modulo.default);
}

/** La portada de la categoría, o null si aún no hay fotos (se usa su color provisional). */
export function portadaDe(categoria: Categoria): { imagen: ImageMetadata; alt: string } | null {
	if (!categoria.portada) return null;
	const entrada = Object.entries(archivos).find(([ruta]) =>
		ruta.endsWith(`/proyectos/${categoria.slug}/${categoria.portada!.archivo}`),
	);
	if (!entrada) {
		throw new Error(
			`Portada no encontrada: src/assets/proyectos/${categoria.slug}/${categoria.portada.archivo}`,
		);
	}
	return { imagen: entrada[1].default, alt: categoria.portada.alt };
}
