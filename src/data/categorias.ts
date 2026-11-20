// Categorías de proyectos (references/estructura.md). Añadir o quitar una = editar esta lista.
// Fotos: guardarlas en src/assets/proyectos/<slug>/ y describir cada una en `fotos`.
// Si una foto de la carpeta no tiene descripción, la compilación falla (alt obligatorio).

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
	/** Archivo de la portada (debe estar en `fotos`). */
	portada?: string;
	/** Texto alternativo de cada foto de la carpeta, por nombre de archivo. */
	fotos?: Record<string, string>;
	/** Color provisional mientras la categoría no tenga fotos. */
	color: string;
}

export interface Foto {
	archivo: string;
	imagen: ImageMetadata;
	alt: string;
}

export const categorias: Categoria[] = [
	{ slug: 'arquitectura', titulo: 'Arquitectura', descripcion: LOREM, color: COLORES.petroleo },
	{
		slug: 'bienes-raices',
		titulo: 'Bienes Raíces',
		descripcion: LOREM,
		portada: 'bienes-raices-04.jpg',
		fotos: {
			'bienes-raices-01.jpg': 'Sala con muro color terracota, sillones de piel y chimenea',
			'bienes-raices-02.jpg': 'Fachada trasera de una casa blanca con jardín y alberca',
			'bienes-raices-03.jpg':
				'Fachada de casa de estilo mexicano con palmeras, agaves y puerta de madera',
			'bienes-raices-04.jpg':
				'Sala y comedor amplios con ventanales de piso a techo y vista a la ciudad',
			'bienes-raices-05.jpg':
				'Comedor y sala integrados con cocina al fondo y muro recubierto de madera',
			'bienes-raices-06.jpg': 'Baño con tina, doble lavabo de madera y ventana vertical',
			'bienes-raices-07.jpg':
				'Torre de departamentos con fachada de celosía vista desde abajo contra un cielo azul',
			'bienes-raices-08.jpg':
				'Cabina de spa con dos camillas, muro de piedra y lámparas de fibra natural',
		},
		color: COLORES.ocre,
	},
	{
		slug: 'restaurante',
		titulo: 'Restaurante',
		descripcion: LOREM,
		portada: 'restaurante-05.jpg',
		fotos: {
			'restaurante-01.jpg': 'Barra de sushi en penumbra con fruta fresca en primer plano',
			'restaurante-02.jpg':
				'Rollo de sushi de atún sobre pizarra negra, con salsa de soya al fondo',
			'restaurante-03.jpg':
				'Rollos de sushi empanizados con betabel en espiral sobre un plato gris',
			'restaurante-04.jpg':
				'Primer plano de rollos de sushi con cobertura crujiente y cebollín',
			'restaurante-05.jpg':
				'Vista cenital de un plato de nigiris y sashimi sobre mesa de madera, con palillos y salsa de soya',
			'restaurante-06.jpg': 'Nigiri de salmón con un brote verde sobre fondo negro',
		},
		color: COLORES.terracota,
	},
	{
		slug: 'concierto',
		titulo: 'Concierto',
		descripcion: LOREM,
		portada: 'concierto-03.jpg',
		fotos: {
			'concierto-01.jpg': 'Guitarrista y cantante tocando juntos en el escenario bajo luces rojas',
			'concierto-02.jpg': 'Guitarrista sonriente con guitarra plateada frente al micrófono',
			'concierto-03.jpg':
				'Cantante con traje de charro levanta su sombrero en el escenario bajo luces azules',
			'concierto-04.jpg':
				'Cantante con sombrero de charro y capa bordada entre humo y luz amarilla',
			'concierto-05.jpg':
				'Cantante con sombrero y abrigo rojo canta junto al público, que la graba con sus celulares',
		},
		color: COLORES.azul,
	},
	{ slug: 'retrato', titulo: 'Retrato', descripcion: LOREM, color: COLORES.vino },
	{ slug: 'eventos', titulo: 'Eventos', descripcion: LOREM, color: COLORES.jade },
	{ slug: 'bodas', titulo: 'Bodas', descripcion: LOREM, color: COLORES.magenta },
	{ slug: 'hoteleria', titulo: 'Hotelería', descripcion: LOREM, color: COLORES.indigo },
];

/** Todas las fotos de una categoría, ordenadas por nombre. Falla si alguna no tiene alt. */
export function fotosDe(categoria: Categoria): Foto[] {
	return Object.entries(archivos)
		.filter(([ruta]) => ruta.includes(`/proyectos/${categoria.slug}/`))
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([ruta, modulo]) => {
			const archivo = ruta.split('/').pop()!;
			const alt = categoria.fotos?.[archivo];
			if (!alt) {
				throw new Error(
					`Falta el texto alternativo de src/assets/proyectos/${categoria.slug}/${archivo}: ` +
						`añádelo en \`fotos\` de "${categoria.titulo}" en src/data/categorias.ts`,
				);
			}
			return { archivo, imagen: modulo.default, alt };
		});
}

/** La portada de la categoría, o null si aún no hay fotos (se usa su color provisional). */
export function portadaDe(categoria: Categoria): Foto | null {
	if (!categoria.portada) return null;
	const portada = fotosDe(categoria).find((foto) => foto.archivo === categoria.portada);
	if (!portada) {
		throw new Error(
			`Portada no encontrada: src/assets/proyectos/${categoria.slug}/${categoria.portada}`,
		);
	}
	return portada;
}

export const rutaDe = (categoria: Categoria) => `/proyectos/${categoria.slug}/`;
