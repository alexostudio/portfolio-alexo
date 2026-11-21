// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages de la cuenta alexostudio: https://alexostudio.github.io/portfolio-alexo/
	// Los enlaces escritos a mano pasan por url() (src/utils/url.ts) para llevar esta base.
	site: 'https://alexostudio.github.io',
	base: '/portfolio-alexo/',

	// Switzer (Indian Type Foundry, licencia ITF FFL): se descarga de Fontshare al compilar y se
	// sirve desde el propio sitio. La licencia permite autoalojarla, pero prohíbe modificar los
	// archivos (recortarlos o convertirlos) y redistribuirlos: nunca se versionan.
	fonts: [
		{
			provider: fontProviders.fontshare(),
			name: 'Switzer',
			cssVariable: '--font-principal',
			weights: ['400', '600', '800'],
			styles: ['normal'],
			fallbacks: ['sans-serif'],
		},
	],
});
