// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'dist/**',
      'build/**',
      'storybook-static/**',
      'node_modules/**',
      'coverage/**',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '.env*',
      '.vscode/**',
      '.idea/**',
      '*.swp',
      '*.swo',
      '.DS_Store',
      'Thumbs.db',
      '.tmp/**',
      '.temp/**',
    ],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Regras específicas para biblioteca
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'warn',
      'no-unused-expressions': 'warn',
      'no-undef': 'error',
      'no-redeclare': 'error',
      'no-shadow': 'warn',
      'no-param-reassign': 'warn',
      'no-return-assign': 'warn',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'warn',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'prefer-promise-reject-errors': 'error',
      'require-await': 'warn',
      yoda: 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Regras específicas para biblioteca
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'off', // TypeScript já cuida disso
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-expressions': 'warn',
      'no-undef': 'off', // TypeScript já cuida disso
      'no-redeclare': 'off', // TypeScript já cuida disso
      '@typescript-eslint/no-redeclare': 'error',
      'no-shadow': 'off', // TypeScript já cuida disso
      '@typescript-eslint/no-shadow': 'warn',
      'no-param-reassign': 'warn',
      'no-return-assign': 'warn',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'warn',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'prefer-promise-reject-errors': 'error',
      'require-await': 'warn',
      yoda: 'error',
    },
  },
  {
    files: ['src/utils/mask.ts'],
    rules: {
      'prefer-const': 'off',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: [
      '**/*.test.{js,jsx,ts,tsx}',
      '**/*.spec.{js,jsx,ts,tsx}',
      'src/setupTests.ts',
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.stories.{js,jsx,ts,tsx}'],
    rules: {
      'no-console': 'off',
    },
  },
  ...storybook.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
];
