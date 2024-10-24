// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	runtimeConfig: {
		PG_URI: process.env.PG_URI,
		PG_HOST: process.env.PG_HOST,
		PG_PORT: process.env.PG_PORT,
		PG_USERNAME: process.env.PG_USERNAME,
		PG_PASSWORD: process.env.PG_PASSWORD,
		PG_DATABASE: process.env.PG_DATABASE,
	},
})
