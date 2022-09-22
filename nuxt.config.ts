import { defineNuxtConfig } from 'nuxt';
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	vite: {
		plugins: [svgLoader()],
	},
	  buildModules: [
    
   
  ],
	css: ["@/assets/css/main.css"],
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
