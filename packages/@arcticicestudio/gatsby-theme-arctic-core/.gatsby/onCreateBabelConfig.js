/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

/**
 * Implementation of the Gatsby Node `onCreateBabelConfig` API.
 * Allows to let plugins extend/mutate the project's Babel configuration.
 * @param actions Collection of functions provided by Gatsby used to manipulate the state of the build process.
 * @see https://gatsbyjs.org/docs/node-apis/#onCreateBabelConfig
 * @see https://gatsbyjs.org/docs/actions
 * @see https://babeljs.io
 */
const onCreateBabelConfig = ({ actions }) => {
  const isProductionMode = process.env.NODE_ENV === "production";

  /*
   * Allows to use the "ES Class Fields & Static Properties" proposal to transforms static class properties as well
   * as properties declared with the experimental property initializer syntax.
   * See https://github.com/tc39/proposal-class-fields and
   * https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
   */
  actions.setBabelPlugin({
    name: "@babel/plugin-proposal-class-properties",
    options: {
      loose: true
    }
  });

  /*
   * Allows to use the experimental `export { default} from "mod"` proposal syntax.
   *
   * See https://github.com/tc39/proposal-export-default-from and
   * https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from
   */
  actions.setBabelPlugin({ name: "@babel/plugin-proposal-export-default-from" });

  if (isProductionMode) {
    /*
     * Removes unnecessary React properties from production builds to reduce bundle sizes and save bandwidth.
     * See https://github.com/oliviertassinari/babel-plugin-react-remove-properties
     */
    actions.setBabelPlugin({
      name: "babel-plugin-react-remove-properties",
      options: {
        properties: [
          /*
           * Remove all test IDs added for `react-testing-library` in order to allow to query elements in tests.
           * See https://github.com/kentcdodds/react-testing-library#getbytestid
           */
          "data-testid"
        ]
      }
    });
  }
};

module.exports = onCreateBabelConfig;
