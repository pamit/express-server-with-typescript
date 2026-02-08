// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // Global ignores
  {
    ignores: ['dist/', '**/*.js'], // Exclude generated JS and dist files
  },

  // Apply ESLint and TypeScript recommended configs to all TS files
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
      files: ['**/*.ts', '**/*.tsx'],
      // Optional: Add specific rules or overrides here
      rules: {
        // Example: allow explicit any
        '@typescript-eslint/no-explicit-any': 'off',
        // Example: enforce single quotes
        'quotes': ['error', 'single'],
      },
    },
  ),
];
