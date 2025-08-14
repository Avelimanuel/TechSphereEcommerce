module.exports = {
  extends: "next/core-web-vitals",
  overrides: [
    {
      files: ["lib/generated/prisma/wasm.js"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ],
};
