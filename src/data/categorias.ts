// Categorías y proyectos del portafolio (6.5). Añadir, quitar u ocultar = editar esta lista.
//
// Fotos: se guardan en src/assets/proyectos/<categoria>/ (ya preparadas: ≤ 2560 px, sin metadatos).
// Cada foto de la carpeta debe pertenecer a UN proyecto, que la declara en `fotos` con su texto
// alternativo. Si una foto no tiene proyecto, está en dos o un proyecto nombra una que no existe,
// la compilación falla y dice qué corregir.

import type { ImageMetadata } from 'astro';
import { COLORES, LOREM, LOREM_TITULO } from './provisional';

const archivos = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/proyectos/*/*.{jpg,jpeg,png,webp,avif}',
	{ eager: true },
);

export interface Proyecto {
	slug: string;
	titulo: string;
	descripcion: string;
	/** Opcionales: si faltan, la página del proyecto no los muestra. */
	cliente?: string;
	ubicacion?: string;
	entregables?: string[];
	/** Archivo de la portada (uno de `fotos`); si falta, la primera foto. */
	portada?: string;
	/** Fotos del proyecto: nombre de archivo → texto alternativo. */
	fotos: Record<string, string>;
}

export interface Categoria {
	slug: string;
	titulo: string;
	descripcion: string;
	/** false = no se muestra ni genera página (sin material todavía). */
	publicada: boolean;
	/** Archivo de la portada de la categoría; si falta, la del primer proyecto. */
	portada?: string;
	/** Color provisional mientras la categoría no tenga fotos. */
	color: string;
	proyectos: Proyecto[];
}

export interface Foto {
	archivo: string;
	imagen: ImageMetadata;
	alt: string;
}

// Orden del documento de ajustes (punto 5). Bodas y Hotelería: cuando haya material.
// Eventos no figura en el documento: oculta hasta que se decida.
export const categorias: Categoria[] = [
	{
		slug: 'bienes-raices',
		titulo: 'Bienes Raíces',
		descripcion: LOREM,
		publicada: true,
		portada: 'bienes-raices-04.jpg',
		color: COLORES.ocre,
		proyectos: [
			{
				// [PENDIENTE: repartir las fotos por proyecto y nombrarlos]
				slug: 'lorem-ipsum',
				titulo: LOREM_TITULO,
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
			},
		],
	},
	{
		slug: 'arquitectura',
		titulo: 'Arquitectura',
		descripcion: LOREM,
		publicada: true,
		color: COLORES.petroleo,
		proyectos: [],
	},
	{
		slug: 'gastronomia',
		titulo: 'Gastronomía',
		descripcion: LOREM,
		publicada: true,
		portada: 'gastronomia-05.jpg',
		color: COLORES.terracota,
		proyectos: [
			{
				// [PENDIENTE: nombre del proyecto]
				slug: 'lorem-ipsum',
				titulo: LOREM_TITULO,
				descripcion: LOREM,
				portada: 'gastronomia-05.jpg',
				fotos: {
					'gastronomia-01.jpg': 'Barra de sushi en penumbra con fruta fresca en primer plano',
					'gastronomia-02.jpg':
						'Rollo de sushi de atún sobre pizarra negra, con salsa de soya al fondo',
					'gastronomia-03.jpg':
						'Rollos de sushi empanizados con betabel en espiral sobre un plato gris',
					'gastronomia-04.jpg': 'Primer plano de rollos de sushi con cobertura crujiente y cebollín',
					'gastronomia-05.jpg':
						'Vista cenital de un plato de nigiris y sashimi sobre mesa de madera, con palillos y salsa de soya',
					'gastronomia-06.jpg': 'Nigiri de salmón con un brote verde sobre fondo negro',
				},
			},
		],
	},
	{
		slug: 'musica-y-conciertos',
		titulo: 'Música y conciertos',
		descripcion: LOREM,
		publicada: true,
		portada: 'musica-y-conciertos-03.jpg',
		color: COLORES.azul,
		proyectos: [
			{
				// [PENDIENTE: repartir las fotos por proyecto y nombrarlos]
				slug: 'lorem-ipsum',
				titulo: LOREM_TITULO,
				descripcion: LOREM,
				portada: 'musica-y-conciertos-03.jpg',
				fotos: {
					'musica-y-conciertos-01.jpg':
						'Guitarrista y cantante tocando juntos en el escenario bajo luces rojas',
					'musica-y-conciertos-02.jpg':
						'Guitarrista sonriente con guitarra plateada frente al micrófono',
					'musica-y-conciertos-03.jpg':
						'Cantante con traje de charro levanta su sombrero en el escenario bajo luces azules',
					'musica-y-conciertos-04.jpg':
						'Cantante con sombrero de charro y capa bordada entre humo y luz amarilla',
					'musica-y-conciertos-05.jpg':
						'Cantante con sombrero y abrigo rojo canta junto al público, que la graba con sus celulares',
				},
			},
		],
	},
	{
		slug: 'retrato',
		titulo: 'Retrato',
		descripcion: LOREM,
		publicada: true,
		color: COLORES.vino,
		proyectos: [],
	},
	{
		slug: 'bodas',
		titulo: 'Bodas',
		descripcion: LOREM,
		publicada: false,
		color: COLORES.magenta,
		proyectos: [],
	},
	{
		slug: 'hoteleria',
		titulo: 'Hotelería',
		descripcion: LOREM,
		publicada: false,
		color: COLORES.indigo,
		proyectos: [],
	},
	{
		slug: 'eventos',
		titulo: 'Eventos',
		descripcion: LOREM,
		publicada: false,
		color: COLORES.jade,
		proyectos: [],
	},
];

export const categoriasPublicadas = categorias.filter((categoria) => categoria.publicada);

/** Categorías con página propia en src/pages/proyectos/<slug>/ (no usan la página genérica). */
export const CON_PAGINA_PROPIA = ['bienes-raices'];

/** Archivos de la carpeta de una categoría, por nombre: { 'x-01.jpg': imagen }. */
function archivosDe(categoria: Categoria): Map<string, ImageMetadata> {
	return new Map(
		Object.entries(archivos)
			.filter(([ruta]) => ruta.includes(`/proyectos/${categoria.slug}/`))
			.sort(([a], [b]) => a.localeCompare(b))
			.map(([ruta, modulo]) => [ruta.split('/').pop()!, modulo.default]),
	);
}

// Comprobación al compilar: cada foto pertenece a exactamente un proyecto y existe.
for (const categoria of categorias) {
	const carpeta = `src/assets/proyectos/${categoria.slug}/`;
	const enCarpeta = archivosDe(categoria);
	const dueno = new Map<string, string>();
	for (const proyecto of categoria.proyectos) {
		for (const archivo of Object.keys(proyecto.fotos)) {
			if (!enCarpeta.has(archivo)) {
				throw new Error(`El proyecto "${proyecto.slug}" nombra ${carpeta}${archivo}, que no existe.`);
			}
			if (dueno.has(archivo)) {
				throw new Error(
					`${carpeta}${archivo} está en dos proyectos ("${dueno.get(archivo)}" y "${proyecto.slug}").`,
				);
			}
			dueno.set(archivo, proyecto.slug);
		}
		if (proyecto.portada && !(proyecto.portada in proyecto.fotos)) {
			throw new Error(`La portada del proyecto "${proyecto.slug}" (${proyecto.portada}) no está en sus fotos.`);
		}
	}
	for (const archivo of enCarpeta.keys()) {
		if (!dueno.has(archivo)) {
			throw new Error(
				`${carpeta}${archivo} no pertenece a ningún proyecto: añádela con su texto alternativo ` +
					`en \`fotos\` de un proyecto de "${categoria.titulo}" en src/data/categorias.ts.`,
			);
		}
	}
	if (categoria.portada && !dueno.has(categoria.portada)) {
		throw new Error(`La portada de "${categoria.titulo}" (${categoria.portada}) no está en ningún proyecto.`);
	}
}

/** Fotos de un proyecto, ordenadas por nombre de archivo. */
export function fotosDe(categoria: Categoria, proyecto: Proyecto): Foto[] {
	const enCarpeta = archivosDe(categoria);
	return Object.keys(proyecto.fotos)
		.sort((a, b) => a.localeCompare(b))
		.map((archivo) => ({ archivo, imagen: enCarpeta.get(archivo)!, alt: proyecto.fotos[archivo] }));
}

/** Portada del proyecto, o null si no tiene fotos. */
export function portadaDeProyecto(categoria: Categoria, proyecto: Proyecto): Foto | null {
	const fotos = fotosDe(categoria, proyecto);
	return fotos.find((foto) => foto.archivo === proyecto.portada) ?? fotos[0] ?? null;
}

/** Portada de la categoría, o null si aún no hay fotos (se usa su color provisional). */
export function portadaDe(categoria: Categoria): Foto | null {
	for (const proyecto of categoria.proyectos) {
		const foto = fotosDe(categoria, proyecto).find((f) => f.archivo === categoria.portada);
		if (foto) return foto;
	}
	const primero = categoria.proyectos[0];
	return primero ? portadaDeProyecto(categoria, primero) : null;
}

export const rutaDe = (categoria: Categoria) => `/proyectos/${categoria.slug}/`;
export const rutaDeProyecto = (categoria: Categoria, proyecto: Proyecto) =>
	`/proyectos/${categoria.slug}/${proyecto.slug}/`;

/** Tarjetas de las categorías publicadas (portada y /proyectos). */
export const tarjetasDeCategorias = () =>
	categoriasPublicadas.map((categoria) => ({
		titulo: categoria.titulo,
		descripcion: categoria.descripcion,
		href: rutaDe(categoria),
		portada: portadaDe(categoria),
		color: categoria.color,
	}));

/** Tarjetas de los proyectos de una categoría. */
export const tarjetasDeProyectos = (categoria: Categoria) =>
	categoria.proyectos.map((proyecto) => ({
		titulo: proyecto.titulo,
		descripcion: proyecto.descripcion,
		href: rutaDeProyecto(categoria, proyecto),
		portada: portadaDeProyecto(categoria, proyecto),
		color: categoria.color,
	}));
