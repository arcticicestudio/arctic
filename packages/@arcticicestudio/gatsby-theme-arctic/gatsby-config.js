/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

/**
 * Provides the Gatsby theme plugin configuration.
 *
 * @see https://gatsbyjs.org/docs/gatsby-config
 * @see https://www.gatsbyjs.org/docs/themes
 */
module.exports = () => {
  return {
    plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-svgr"]
  };
};
