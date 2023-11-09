// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devServer: {
        port: 8080
    },
    devtools: {
        enabled: process.env.NODE_ENV !== 'production'
    },
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
    stylelint:{
        lintOnStart: false
    },
    eslint: {
        lintOnStart: false
    },
    // postcss: {
    //     plugins: {
    //         tailwindcss: {},
    //         autoprefixer: {},
    //     },
    // },
    lodash: {
        prefix: "_",
        prefixSkip: ["string"],
        upperAfterPrefix: false,
        exclude: ["map"]
    },
    googleFonts:{
        families: {
            Roboto: true,
            Inter: [400, 700],
            'Josefin+Sans': true
        },

        display: 'swap' // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    },
    storybook: {
        port: 6006,
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
