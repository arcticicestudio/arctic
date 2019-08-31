/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

/**
 * Configuration for the Gatsby core plugin `gatsby-plugin-webpack-size`.
 * @see https://github.com/GoogleChromeLabs/size-plugin#options
 */
module.exports = pluginContext => ({
  filename: `${pluginContext}/.bundle-size.json`,
  publish: false,
  writeFile: true
});
