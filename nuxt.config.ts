import { defineNuxtConfig } from 'nuxt';
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	vite: {
		plugins: [svgLoader()],
	},
	css: ["@/assets/css/main.css"],
	modules: ['bootstrap-vue/nuxt'],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
					
				},
			},
		},
	},
});
