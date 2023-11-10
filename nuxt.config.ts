// https://nuxt.com/docs/api/configuration/nuxt-config
import seo from './seo.cjs'

export default defineNuxtConfig({
    devServer: {
        port: 3000
    },
    devtools: {
        enabled: process.env.NODE_ENV !== 'production'
    },
    // css: [
    //     '~/assets/css/main.css',
    // ],
    modules: [
        '@nuxtjs/stylelint-module',
        '@nuxtjs/eslint-module',
        '@nuxtjs/google-fonts',
        // '@nuxtjs/color-mode',
        '@nuxtjs/svg-sprite',
        '@nuxtseo/module',
        'nuxt-simple-sitemap',
        'nuxt-simple-robots',
        '@nuxt/content',
        '@nuxt/ui',
        'nuxt-lodash',
        '@vueuse/nuxt',
        '@pinia/nuxt'
    ],
    eslint: {
        lintOnStart: false
    },
    stylelint: {
        lintOnStart: false
    },
    ui: {
        icons: ['mdi', 'simple-icons', 'heroicons', 'tabler']
    },
    googleFonts: {
        families: {
            Roboto: true,
            Inter: [400, 700],
            'Josefin+Sans': true
        },

        display: 'swap' // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    },
    lodash: {
        prefix: "_",
        prefixSkip: ["string"],
        upperAfterPrefix: false,
        exclude: ["map"]
    },
    // postcss: {
    //     plugins: {
    //         tailwindcss: {},
    //         autoprefixer: {},
    //     },
    // },
    site: seo,
    // app: {
    //     head: {
    //         charset: 'utf-8',
    //         viewport: 'width=device-width, initial-scale=1'
    //     },
    //     link: [],
    //     style: [],
    //     script: [],
    //     noscript: []
    // },
})
