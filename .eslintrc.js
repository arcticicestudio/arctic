/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

/**
 * The ESLint configuration.
 * @see https://eslint.org/docs/user-guide/configuring
 * @see https://github.com/typescript-eslint/typescript-eslint
 * @see https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
 * @see https://www.typescriptlang.org/docs/handbook/compiler-options.html
 * @see https://github.com/babel/eslint-plugin-babel#rules
 */
module.exports = {
  parser: "babel-eslint",
  extends: [
    "@arcticicestudio/eslint-config",
    "@arcticicestudio/eslint-config/react-hooks",
    "@arcticicestudio/eslint-config/prettier"
  ],
  plugins: ["babel"],
  rules: {
    /*
     * Enable support for experimental features:
     *
     * - `babel/camelcase` - doesn't complain about optional chaining (`let foo = bar?.a_b;`).
     * - `babel/no-unused-expressions` - doesn't fail when using `do` expressions or optional chaining (`a?.b()`).
     */
    camelcase: "off",
    "babel/camelcase": "error",
    "no-unused-expressions": "off",
    "babel/no-unused-expressions": "error"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["@arcticicestudio/eslint-config-typescript", "@arcticicestudio/eslint-config-typescript/prettier"],
      parserOptions: {
        /* Required for rules that need type information. */
        project: "./tsconfig.json",
        tsconfigRootDir: "."
      }
    },
    {
      /*
       * Allow to use development dependencies in Gatsby configuration files since these are necessary and will
       * be provided by either Gatsby itself or another without being explicitly defined as package dependency.
       */
      files: ["**/.gatsby/**/*.js"],
      rules: {
        "import/no-extraneous-dependencies": "off"
      }
    }
  ]
};
