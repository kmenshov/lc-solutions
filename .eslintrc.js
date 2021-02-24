module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    benchmark: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['jest'],
  rules: {
    'no-plusplus': ['off'],
    'one-var': ['off'],
    'one-var-declaration-per-line': ['off'],
  },
};
