const js = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        // Node.js globals
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'no-undef': 'error',
      'no-implicit-globals': 'error',
      'no-unused-vars': 'warn',
    },
  },
  prettierConfig,
  {
    ignores: ['dist/**', 'node_modules/**', '.eleventy.js'],
  },
];
