/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const { resolve } = require("path");

/**
 * Provides ESLint configuration for _alias_ and _Node_ imports to reflect Webpack alias imports
 * defined by the `@arcticicestudio/gatsby-theme-arctic-core` package.
 *
 * @param rootPath The root path from which imports should be resolved.
 * @see https://github.com/johvin/eslint-import-resolver-alias
 */
module.exports = rootPath => {
  const alias = {
    map: [
      ["~assets", resolve(rootPath, "src", "assets")],
      ["~atoms", resolve(rootPath, "src", "components", "atoms")],
      ["~config", resolve(rootPath, "src", "config")],
      ["~containers", resolve(rootPath, "src", "components", "containers")],
      ["~data", resolve(rootPath, "src", "data")],
      ["~hooks", resolve(rootPath, "src", "hooks")],
      ["~layouts", resolve(rootPath, "src", "components", "layouts")],
      ["~molecules", resolve(rootPath, "src", "components", "molecules")],
      ["~organisms", resolve(rootPath, "src", "components", "organisms")],
      ["~pages", resolve(rootPath, "src", "pages")],
      ["~stores", resolve(rootPath, "src", "stores")],
      ["~styles", resolve(rootPath, "src", "styles")],
      ["~templates", resolve(rootPath, "src", "components", "templates")],
      ["~utils", resolve(rootPath, "src", "utils")]
    ],
    extensions: [".js", ".json", ".ts", ".tsx"]
  };
  const node = {
    paths: [resolve(rootPath, "src"), resolve(rootPath, "src", "components")]
  };

  return { alias, node };
};
