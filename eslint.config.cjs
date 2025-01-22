const eslintPlugin = require("@typescript-eslint/eslint-plugin");
const eslintParser = require("@typescript-eslint/parser");

module.exports = [
  {
    ignores: ["node_modules/", "dist/", ".env"],
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: eslintParser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
    },
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "no-var": "error",
      "prefer-const": "warn",
    },
  },
];
