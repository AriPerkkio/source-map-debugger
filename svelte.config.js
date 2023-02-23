import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),

		// https://kit.svelte.dev/docs/adapter-static#github-pages
		paths: {
			base: dev ? '' : '/source-map-debugger'
		},
		appDir: 'internal'
	}
};

export default config;
