// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  {
    ignores: [
      "dist",
      "node_modules",
      "eslint.config.mjs",
      "commitlint.config.mjs",
      "jest.config.js",
      "tests",
      "scripts",
      "coverage",
      ".github",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-misused-promises": "off",
    },
  },
);
