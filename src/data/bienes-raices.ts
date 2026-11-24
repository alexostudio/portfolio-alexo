// Textos de la landing de Bienes Raíces (6.6, documento de ajustes punto 6).
// Fuente: contenidoTexto.md del usuario (2026-11-23), que sustituye al borrador del agente.
// Las propiedades (portafolio) están en src/data/categorias.ts.

export const bienesRaices = {
	inicio: {
		antetitulo: 'ALEXO / Real Estate',
		titular: 'Haz que cada propiedad destaque.',
		descripcion:
			'Fotografía y producción audiovisual para presentar espacios, comunicar su valor y fortalecer su promoción comercial.',
		// "Explorar proyectos" baja al portafolio de esta misma página (decisión 2026-11-23).
		principal: 'Explorar proyectos',
		secundario: 'Solicitar cotización',
	},

	propuesta: {
		titulo: 'La imagen también forma parte de la estrategia.',
		parrafos: [
			'Una propiedad no solo necesita mostrarse. Necesita comunicar su potencial.',
			'Desarrollamos fotografía y contenido audiovisual que resaltan los atributos de cada espacio y fortalecen su presentación en portales inmobiliarios, redes sociales y materiales comerciales.',
		],
	},

	servicios: {
		// Títulos con barra en líneas: en el celular se parten aquí (br.salto-angosto).
		titulo: ['Soluciones visuales', 'para el sector', 'inmobiliario.'],
		lista: [
			{
				titulo: 'Fotografía inmobiliaria',
				texto:
					'Imágenes que destacan la arquitectura, amplitud, iluminación y detalles de cada propiedad.',
			},
			{
				titulo: 'Video inmobiliario',
				texto:
					'Recorridos y producciones audiovisuales que presentan los espacios de forma dinámica y cinematográfica.',
			},
			{
				titulo: 'Contenido para redes sociales',
				texto:
					'Piezas visuales adaptadas a formatos digitales para dar visibilidad a propiedades y desarrollos.',
			},
			{
				titulo: 'Campañas audiovisuales',
				texto:
					'Desarrollo de conceptos y materiales visuales para la comunicación y promoción de proyectos inmobiliarios.',
			},
		],
	},

	beneficios: {
		titulo: 'Cada detalle cuenta.',
		lista: [
			{
				titulo: 'Captar atención',
				texto: 'Imágenes que destacan entre múltiples opciones inmobiliarias.',
			},
			{
				titulo: 'Mostrar el potencial',
				texto: 'Presentar distribución, amplitud y características de cada espacio.',
			},
			{
				titulo: 'Fortalecer la percepción',
				texto: 'Una presentación visual cuidada y coherente con el inmueble.',
			},
			{
				titulo: 'Multiplicar formatos',
				texto: 'Material para portales, redes sociales y campañas digitales.',
			},
		],
	},

	portafolio: {
		titulo: ['Espacios', 'seleccionados.'],
		entrada:
			'Una selección de proyectos inmobiliarios desarrollados desde la fotografía y la producción audiovisual.',
	},

	cierre: {
		titulo: 'Tu propiedad merece destacar.',
		texto: 'Cuéntanos sobre tu proyecto y desarrollemos una propuesta visual a su medida.',
		principal: 'Solicitar cotización',
		secundario: 'Ver proyectos',
		mensajeWhatsApp: 'Hola, me interesa cotizar contenido para una propiedad.',
		// Firma pequeña bajo el cierre (decisión 2026-11-23).
		firma: 'Fotografía · Video · Contenido comercial',
	},
};
