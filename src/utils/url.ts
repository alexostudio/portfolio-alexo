// El sitio puede vivir en una subcarpeta (GitHub Pages: /portfolio-alexo/). Astro ajusta solo las
// imágenes que procesa; todo enlace o archivo propio escrito a mano pasa por aquí.

/** Ruta interna con la base del sitio: url('/proyectos/') → '/portfolio-alexo/proyectos/'. */
export function url(ruta: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}${ruta}`;
}
