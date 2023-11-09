// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devServer: {
        port: 3000
    },
    devtools: {
        enabled: process.env.NODE_ENV !== 'production'
    },
    eslint: {
        lintOnStart: false
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
    extends: ['@nuxt/ui-pro'],
    modules: [
        '@nuxtjs/stylelint-module',
        '@nuxtjs/eslint-module',
        '@nuxtjs/google-fonts',
        '@nuxtjs/svg-sprite',
        '@nuxt/ui',
        'nuxt-lodash',
        '@vueuse/nuxt',
        '@pinia/nuxt'
    ],
    stylelint: {
        lintOnStart: false
    },
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
