// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ajaykmadan.in',
	integrations: [
		sitemap({
			// Hidden pages (redirected away in netlify.toml) and utility pages stay out of the sitemap
			filter: (page) =>
				!page.includes('/ai-sdlc') &&
				!page.includes('/resources') &&
				!page.includes('/subscribed') &&
				!page.includes('/confirmed'),
		}),
	],
});
