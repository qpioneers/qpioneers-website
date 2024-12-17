// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {disable: true},
    typescript: {strict: true},
    css: ['./assets/css/main.css', "./assets/css/style.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title: 'QPioneers',
            meta: [
                {charset: 'UTF-8'},
                {
                    name: 'description',
                    content: 'Join QPioneers, the AI-powered platform that connects experts with high-quality leads. Let your expertise shine while we bring customers directly to you. No advertising needed!'
                },
                {
                    name: 'keywords',
                    content: 'QPioneers, AI-powered platform, high-quality leads, connect with customers, expert services, no advertising, lead generation, AI platform, professional services'
                },
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {property: 'og:type', content: 'website'},
                {property: 'og:locale', content: 'en_US'},
            ],
            link: [
                {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
                {rel: 'manifest', href: '/site.webmanifest'},
            ],
        },
    },
    modules: ['@nuxt/image', 'nuxt-headlessui', '@nuxt/scripts', '@nuxtjs/seo'],
    headlessui: {
        prefix: ''
    },
    site: {
        //@ts-ignore
        url: process.env.SITE_URL,
        name: 'QPioneers'
    },
    ogImage: {
        enabled: false
    },
})