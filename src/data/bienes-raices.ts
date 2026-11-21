// Textos de la landing de Bienes Raíces (6.6, documento de ajustes punto 6).
// BORRADOR redactado el 2026-11-20 siguiendo las pautas del documento: presentar la propiedad,
// destacar sus atributos y fortalecer su promoción, SIN prometer ventas. Pendiente de que el
// usuario / ALEXO lo revisen. Las propiedades (portafolio) están en src/data/categorias.ts.

export const bienesRaices = {
	titular: 'Propiedades que se presentan como merecen',
	descripcion:
		'Fotografía, video y contenido para inmobiliarias, desarrolladoras y propietarios que quieren mostrar cada espacio con claridad y carácter.',

	propuesta: {
		titulo: 'Una presentación visual a la altura de cada propiedad',
		texto:
			'Una propiedad se recorre primero en pantalla. Producimos imágenes que muestran sus espacios, su luz y sus mejores atributos con fidelidad, para que su promoción cuente con material sólido desde el primer anuncio.',
	},

	servicios: [
		{
			titulo: 'Fotografía',
			texto:
				'Interiores, exteriores y detalles, con luz cuidada y encuadres que respetan las proporciones de cada espacio.',
		},
		{
			titulo: 'Video',
			texto: 'Recorridos y piezas cinematográficas que transmiten cómo se vive la propiedad.',
		},
		{
			titulo: 'Contenido para redes',
			texto: 'Formatos verticales y piezas cortas pensadas para publicaciones y anuncios en redes sociales.',
		},
		{
			titulo: 'Campañas audiovisuales',
			texto: 'Concepto y producción para el lanzamiento o la promoción de un desarrollo completo.',
		},
	],

	beneficios: {
		// Partido en dos para el salto en pantallas angostas (título con barra).
		titulo: { inicio: 'Por qué cuidar la', fin: 'presentación visual' },
		lista: [
			{
				titulo: 'Anuncios que destacan',
				texto: 'Las primeras imágenes deciden si alguien se detiene en una publicación.',
			},
			{
				titulo: 'Atributos claros',
				texto: 'La amplitud, la luz y los acabados se entienden de un vistazo.',
			},
			{
				titulo: 'Material para todos los canales',
				texto: 'Portales, redes, presentaciones y campañas con una imagen coherente.',
			},
			{
				titulo: 'Una imagen profesional',
				texto: 'Cada propiedad bien presentada refuerza la confianza en quien la ofrece.',
			},
		],
	},

	cierre: {
		titulo: '¿Tienes una propiedad que presentar?',
		texto: 'Cuéntanos sobre el espacio y te enviamos una propuesta.',
		boton: 'Solicitar cotización',
		mensajeWhatsApp: 'Hola, me interesa cotizar contenido para una propiedad.',
	},
};
