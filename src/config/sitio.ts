// Datos del sitio centralizados: ningún componente debe repetirlos a mano.

export const sitio = {
	nombre: 'ALEXO',
	descripcion:
		'Fotografía y producción audiovisual desde una mirada cinematográfica, creativa y contemporánea.',
	ubicacion: 'Ciudad de México',
	correo: 'alexo.filmstudio@gmail.com',
	telefono: {
		// Visible para personas y en formato E.164 para enlaces tel: y WhatsApp.
		visible: '+52 55 3398 6488',
		e164: '+525533986488',
	},
	// [PENDIENTE: página del aviso de privacidad]. Mientras sea null, el pie no lo enlaza.
	avisoPrivacidad: null as string | null,
} as const;

export const enlaceWhatsApp = `https://wa.me/${sitio.telefono.e164.replace('+', '')}`;

export interface EnlaceMenu {
	texto: string;
	href: string;
}

// Anclas a secciones de la portada; cuando existan páginas propias, cambia el href aquí.
export const menu: EnlaceMenu[] = [
	{ texto: 'Proyectos', href: '/#proyectos' },
	{ texto: 'Sobre', href: '/#sobre' },
	{ texto: 'Contacto', href: '/#contacto' },
];

export interface Red {
	nombre: string;
	url: string | null;
}

// [PENDIENTE: URLs reales]. Las que estén en null no se muestran.
export const redes: Red[] = [
	{ nombre: 'Instagram', url: null },
	{ nombre: 'YouTube', url: null },
	{ nombre: 'LinkedIn', url: null },
	{ nombre: 'Facebook', url: null },
];

export const redesPublicadas = redes.filter(
	(red): red is Red & { url: string } => red.url !== null,
);
