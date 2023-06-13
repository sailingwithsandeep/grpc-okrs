module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    plugins: ['prettier', 'import'],

    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': 'error',
        'import/no-unresolved': 'error',
        radix: 'off',
        eqeqeq: 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'off',
        'no-restricted-syntax': 'off',
        'no-param-reassign': 'off',
        'consistent-return': 'off',
        'no-underscore-dangle': ['error', { allow: ['_id', '_emitter', '_key', '_channel', '_message'] }],
        'class-methods-use-this': 'off',
        'func-names': 'off',
    },
    globals: {
        _: 'readonly',
        log: 'readonly',
        messages: 'readonly',
        app: 'readonly',
        emitter: 'readonly',
    },
};
