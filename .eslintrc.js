module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next", "google", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
