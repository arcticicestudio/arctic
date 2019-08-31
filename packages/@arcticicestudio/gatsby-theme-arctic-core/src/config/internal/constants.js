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
 *  The relative path of the build base directory starting from the project root.
 */
const BASE_DIR_BUILD = "build";

/**
 *  The relative path of the build base directory for reports starting from the project root.
 */
const BASE_DIR_BUILD_REPORTS = `${BASE_DIR_BUILD}/reports`;

/**
 *  The path of the root directory to use as context for plugins.
 */
const BASE_DIR_PLUGIN_CONTEXT = `${resolve(__dirname, "../../../")}`;

/**
 *  The relative path of the sources base directory starting from the project root.
 */
const BASE_DIR_SRC = "src";

/**
 *  The relative path of the config base directory starting from the project root.
 */
const BASE_DIR_CONFIG = `${BASE_DIR_SRC}/config`;

const DEFAULT_ENV_VAR_PREFIX = "ARCTICICESTUDIO_GATSBY_THEME_ARCTIC_CORE";

/**
 * Provides internally used constants.
 */
module.exports = {
  BASE_DIR_BUILD,
  BASE_DIR_BUILD_REPORTS,
  BASE_DIR_PLUGIN_CONTEXT,
  BASE_DIR_CONFIG,
  BASE_DIR_SRC,
  DEFAULT_ENV_VAR_PREFIX
};
