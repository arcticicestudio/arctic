/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

/**
 * Configuration for the Gatsby core plugin `gatsby-plugin-typescript`.
 *
 * @see https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/#options
 */
module.exports = {
  /**
   * Parse every file as TS or TSX (depends on the `isTSX` option).
   * @see https://babeljs.io/docs/en/babel-preset-typescript#allextensions
   */
  allExtensions: true,
  /**
   * Forcibly enable JSX parsing, otherwise angle brackets will be treated as TypeScript's legacy type assertion.
   * This option requires `allExtensions` to be set to `true`!
   * @see https://babeljs.io/docs/en/babel-preset-typescript#istsx
   */
  isTSX: true
};
