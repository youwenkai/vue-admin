module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12, // ecmaScript的版本
    parser: '@typescript-eslint/parser',
    sourceType: 'module', // script | module(ecmaScript模块)
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {},
};
