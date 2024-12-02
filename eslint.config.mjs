import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticTs from '@stylistic/eslint-plugin-ts'

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['dist/**']
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"]
  },
  {
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/semi': "off",
      '@stylistic/ts/no-extra-semi': "error",
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': "warn"
    }
  }
];
