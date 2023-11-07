// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    modules: [
        '@nuxtjs/stylelint-module',
        '@nuxtjs/eslint-module',
        '@nuxt/ui'
    ],
    stylelint:{
        lintOnStart: false
    },
    eslint: {
        lintOnStart: false
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        },
        link: [],
        style: [],
        script: [],
        noscript: []
    },
})
