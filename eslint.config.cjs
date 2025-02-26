/* eslint-disable prettier/prettier */
const eslintPlugin = require('@typescript-eslint/eslint-plugin');
const eslintParser = require('@typescript-eslint/parser');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  {
    ignores: ['node_modules/', 'dist/', '.env'],
  },
  eslintPluginPrettierRecommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: eslintParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        process: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
      // prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-expressions': 'error',
      'no-undef': 'warn',
      // 'prettier/prettier': ['error', { endOfLine: 'lf' }],
    },
  },
];
