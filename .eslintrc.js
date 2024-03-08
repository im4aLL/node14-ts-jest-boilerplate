module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: [],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: [
        ".eslintrc.js",
        "node_modules/",
        "dist/",
        "data/",
        "**/*.spec.ts",
        "**/__mocks__/*",
    ],
    rules: {},
};
