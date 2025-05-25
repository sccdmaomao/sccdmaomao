module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'prettier',
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', 'prettier', 'simple-import-sort'],
    rules: {
        'react/react-in-jsx-scope': 0,
        // simple-import-sort
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/first': 'error',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        // typescript
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-unused-vars': 1,
        'promise/param-names': 0,
    },
}
