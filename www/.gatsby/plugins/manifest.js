/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

/**
 * Configuration for `gatsby-plugin-manifest`.
 *
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest
 */

const { metadataArctic } = require("../../src/data/project");
const { ROUTE_ROOT } = require("../../src/config/routes/mappings");

module.exports = {
  name: metadataArctic.name,
  /* eslint-disable babel/camelcase */
  short_name: metadataArctic.name,
  start_url: ROUTE_ROOT,
  background_color: "#d8dee9",
  theme_color: "#88c0d0",
  /* eslint-enable babel/camelcase */

  /**
   * Enables the "Add to Homescreen" prompt and disables browser UI elements like the back button.
   *
   * @see https://developers.google.com/web/fundamentals/web-app-manifest/#display
   */
  display: "standalone",

  /**
   * The relative path (starting from the project root) to the source icon from which all other _favicons_
   * will be generated.
   */
  icon: "src/assets/images/icons/favicon.svg",

  /**
   * Enable support for legacy `apple-touch-icon` links.
   * Support for the web app manifest specification was added first in iOS 11.3.
   *
   * @see https://support.apple.com/en-us/HT208067#113
   */
  legacy: true
};
