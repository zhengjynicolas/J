// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true
    },
    modules: [
        '@nuxtjs/stylelint-module',
        '@nuxtjs/eslint-module',
        '@nuxt/ui',
        'nuxt-lodash',
        '@pinia/nuxt'
    ],
    stylelint:{
        lintOnStart: false
    },
    eslint: {
        lintOnStart: false
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    lodash: {
        prefix: "_",
        prefixSkip: ["string"],
        upperAfterPrefix: false,
        exclude: ["map"],
        // alias: [
        //     ["camelCase", "stringToCamelCase"], // => stringToCamelCase
        //     ["kebabCase", "stringToKebab"], // => stringToKebab
        //     ["isDate", "isLodashDate"], // => _isLodashDate
        // ],
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
