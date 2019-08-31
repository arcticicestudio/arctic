/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const { resolve } = require("path");

const withAliasImports = require("../utils/eslint/with-alias-imports");

const { alias, node } = withAliasImports(resolve(__dirname));

/**
 * ESLint configuration overrides scoped to this package.
 * See the main configuration file placed in the root of the project repository for more details.
 */
module.exports = {
  settings: {
    /**
     * Configures _alias_ and _Node_ imports to reflect Webpack alias imports defined by the
     * `@arcticicestudio/gatsby-theme-arctic-core` package.
     *
     * @see https://github.com/johvin/eslint-import-resolver-alias
     */
    "import/resolver": {
      alias,
      node
    }
  }
};
