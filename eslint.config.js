// ESLint Configuration File

export default [
  {
    files: ["js/**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
];
