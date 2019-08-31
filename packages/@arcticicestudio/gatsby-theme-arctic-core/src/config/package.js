/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const packageMetadata = require("../data/package");
const routeConstants = require("../config/routes/constants");
const { BASE_DIR_PLUGIN_CONTEXT, DEFAULT_ENV_VAR_PREFIX } = require("../config/internal/constants");

/**
 * Merges custom Gatsby theme plugin options with the default configurations.
 */
module.exports = pluginOptions => {
  const envVarPrefix = pluginOptions.envVarPrefix || DEFAULT_ENV_VAR_PREFIX;
  const pluginContext = pluginOptions.pluginContext || BASE_DIR_PLUGIN_CONTEXT;
  const siteUrl = pluginOptions.siteMetadata.siteUrl || packageMetadata.homepage;
  const basePath = pluginOptions.basePath || `${routeConstants.ROOT}`;

  const siteMetadata = {
    siteUrl,
    ...pluginOptions.siteMetadata
  };

  return {
    basePath,
    envVarPrefix,
    pluginContext,
    siteMetadata
  };
};
