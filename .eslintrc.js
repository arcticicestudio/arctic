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
 * @see https://github.com/tc39/proposal-optional-chaining
 */
module.exports = {
  parser: "babel-eslint",
  extends: [
    "@arcticicestudio/eslint-config",
    "@arcticicestudio/eslint-config/react-hooks",
    "@arcticicestudio/eslint-config/prettier"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["@arcticicestudio/eslint-config-typescript", "@arcticicestudio/eslint-config-typescript/prettier"],
      parserOptions: {
        /* Required for rules that need type information. */
        project: "./tsconfig.json",
        tsconfigRootDir: "."
      }
    }
  ]
};