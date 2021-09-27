module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'amd': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'unused-imports'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-unused-vars': 'error',
        'unused-imports/no-unused-imports': 'error',
        'no-else-return': 'error',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'parser': '@babel/eslint-parser'
    }
};
