// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: true},
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'nuxt-icon',
		'@vueuse/nuxt',
		"@nuxt/image"
	],
	image: {
		ipx: {
			maxAge: 60 * 60 * 24 * 365,
		},
	},
	shadcn: {
		prefix: '',
		componentDir: './components/ui'
	},
	nitro: {
		compressPublicAssets: true,
		prerender: {
			crawlLinks: true
		},
		publicAssets: [
			{
				baseURL: "public",
				dir: "public",
				maxAge: 60 * 60 * 24 * 365,
			},
		],
		routeRules: {
			"/public/**": {headers: {'cache-control': `public,max-age=31536000,s-maxage=31536000`}},
			"/_nuxt/**": {headers: {'cache-control': `public,max-age=31536000,s-maxage=31536000`}},
		}
	},
	vite: {
		server: {
			headers: {
				'Cache-Control': 'max-age=31536000'
			}
		}
	},
	
	app: {
		head: {
			charset: 'utf-16',
			viewport: 'width=device-width, initial-scale=1',
			htmlAttrs: {
				lang: 'en',
			},
		},
	}
})