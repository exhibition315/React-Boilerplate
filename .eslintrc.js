require('./prettier.config');

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  plugins: ['react', 'react-hooks', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 8,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@img', './assets/img'],
          ['@animation', './assets/animation'],
          ['@api', './src/api'],
          ['@common', './src/common'],
          ['@components', './src/components'],
          ['@hooks', './src/services/hooks'],
          ['@store', './src/store'],
          ['@utils', './src/services/utils'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'import/no-unresolved': 0,
    'react/function-component-definition': 0,
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': 0,
    'default-param-last': 0,
    'max-len': ['error', { code: 120 }],
    'react/no-array-index-key': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
