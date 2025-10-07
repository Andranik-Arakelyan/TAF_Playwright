import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPlaywright from 'eslint-plugin-playwright';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-console': 'warn',
      curly: 'error',
      eqeqeq: 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: ['tests/**/*.ts', '**/*.spec.ts', '**/*.test.ts'],
    plugins: {
      playwright: eslintPluginPlaywright,
    },
    rules: {
      'playwright/no-page-pause': 'error',
      'playwright/no-wait-for-timeout': 'warn',
      'playwright/require-top-level-describe': 'error',
      'playwright/no-focused-test': 'error',
      'playwright/no-skipped-test': 'warn',
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
        },
      ],
    },
  },
];
