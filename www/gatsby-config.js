/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const { links, metadataArctic } = require("./src/data/project");
const { BASE_PUBLIC_URL } = require("./src/config/routes/constants");
const gatsbyPluginManifestConfig = require("./.gatsby/plugins/manifest");

/**
 * Provides the Gatsby configuration.
 *
 * @see https://gatsbyjs.org/docs/gatsby-config
 * @see https://www.gatsbyjs.org/docs/themes
 */
module.exports = {
  siteMetadata: {
    arctic: { links, ...metadataArctic }
  },
  plugins: [
    {
      resolve: "@arcticicestudio/gatsby-theme-arctic-core",
      options: {
        envVarPrefix: "ARCTIC",
        pluginContext: `${__dirname}`,
        siteMetadata: {
          siteUrl: BASE_PUBLIC_URL
        }
      }
    },
    "@arcticicestudio/gatsby-theme-arctic",
    "gatsby-plugin-netlify",

    /*
     * +------------+
     * + IMPORTANT +
     * +-----------+
     * The following plugins rely on the order in this array and must be placed at last to work properly!
     */
    {
      resolve: "gatsby-plugin-manifest",
      options: gatsbyPluginManifestConfig
    },
    /*
     * This plugin must always be listed last to ensure cache-able files like the web app manifest are included
     * in the service worker!
     */
    "gatsby-plugin-offline"
  ]
};
