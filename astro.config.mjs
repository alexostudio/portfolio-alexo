// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Las fuentes se descargan de Google al compilar y se sirven desde el propio sitio.
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Wix Madefor Display',
			cssVariable: '--font-display',
			weights: ['400', '600', '800'],
			subsets: ['latin'],
			fallbacks: ['sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Wix Madefor Text',
			cssVariable: '--font-text',
			weights: ['400', '600'],
			subsets: ['latin'],
			fallbacks: ['sans-serif'],
		},
	],
});
