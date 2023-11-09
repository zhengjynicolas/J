module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "prettier",
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString": false,
                "allowNumber": false
            }
        ]
    }
}