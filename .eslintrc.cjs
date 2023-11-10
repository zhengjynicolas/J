module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    ignorePatterns: ['**/*.vue'],
    // parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: "@typescript-eslint/parser"
    },
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    plugins: [
        "prettier",
        "@typescript-eslint"
    ],
    // rules: {
    //     "@typescript-eslint/strict-boolean-expressions": [
    //         2,
    //         {
    //             "allowString": false,
    //             "allowNumber": false
    //         }
    //     ]
    // }
}