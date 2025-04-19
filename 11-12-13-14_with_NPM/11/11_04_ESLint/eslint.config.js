// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended
});

export default [
    js.configs.recommended,
        ...compat.config({
            env: {
                browser: true,
                es2021: true,
                node: true
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            rules: {
                'indent': ['error', 2],
                'linebreak-style': ['error', 'unix'],
                'quotes': ['error', 'single'],
                'semi': ['error', 'always'],
                'no-unused-vars': 'warn',
                'no-console': 'off',
                'no-undef': 'error'
            }
    })
];