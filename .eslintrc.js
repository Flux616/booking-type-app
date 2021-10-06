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
    'parser': '@babel/eslint-parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'better-styled-components'
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
        'no-else-return': 'error',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'better-styled-components/sort-declarations-alphabetically': 2
    },
    'overrides': [
        {
            'files': ['*.tsx', '*.ts'],
            'rules': {
                'no-undef': 'off'
            }
        }
    ]
};
