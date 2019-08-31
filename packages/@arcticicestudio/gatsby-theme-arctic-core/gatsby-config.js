/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const gatsbyPluginRobotsTxtConfig = require("./.gatsby/plugins/robots-txt");
const gatsbyPluginTypeScriptConfig = require("./.gatsby/plugins/typescript");
const withGatsbyPluginWebpackSizeConfig = require("./.gatsby/plugins/webpack-size");
const withPackageConfig = require("./src/config/package");

/**
 * Provides the Gatsby theme plugin configuration.
 *
 * @see https://gatsbyjs.org/docs/gatsby-config
 * @see https://www.gatsbyjs.org/docs/themes
 */
module.exports = options => {
  const packageConfig = withPackageConfig(options);
  return {
    siteMetadata: packageConfig.siteMetadata,
    plugins: [
      "gatsby-plugin-catch-links",
      "gatsby-plugin-no-sourcemaps",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-remove-trailing-slashes",
      "gatsby-plugin-sharp",
      "gatsby-plugin-sitemap",
      "gatsby-transformer-hjson",
      "gatsby-transformer-json",
      "gatsby-transformer-sharp",
      "gatsby-transformer-yaml",
      {
        resolve: "gatsby-plugin-typescript",
        options: gatsbyPluginTypeScriptConfig
      },
      {
        resolve: "gatsby-plugin-canonical-urls",
        options: {
          siteUrl: `${packageConfig.siteMetadata.siteUrl}`
        }
      },
      {
        resolve: "gatsby-plugin-robots-txt",
        options: gatsbyPluginRobotsTxtConfig
      },
      {
        resolve: "gatsby-plugin-webpack-size",
        options: withGatsbyPluginWebpackSizeConfig(packageConfig.pluginContext)
      }
    ]
  };
};
