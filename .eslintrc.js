/* eslint-env node */
module.exports = {
  extends: ["canonical/auto"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-use-before-define": ["off", { variables: false }],
    "arrow-body-style": ["error", "as-needed"],
    "canonical/filename-match-exported": ["error", { transforms: "kebab" }],
    "prefer-arrow-callback": "error",
    "prettier/prettier": "off",
    quotes: [
      "error",
      "double",
      { allowTemplateLiterals: false, avoidEscape: true },
    ],
  },
};
