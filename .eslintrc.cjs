module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'indent': ['error', 4],
        'curly': ['off'],
        'space-before-function-paren': 0,
        'object-curly-spacing': 0,
        'react/no-unescaped-entities': 0,
        'no-extra-boolean-cast': 'off',
        'comma-dangle': 'off',
        // 'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 0
    },
}
