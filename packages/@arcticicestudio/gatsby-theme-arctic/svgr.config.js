/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const typeScriptSVGRTemplate = require("./.gatsby/plugins/svgr/template");

/**
 * Configuration for SVGR.
 *
 * @see https://www.smooth-code.com/open-source/svgr/docs/configuration-files
 * @see https://www.smooth-code.com/open-source/svgr/docs/options
 * @see https://github.com/zabute/gatsby-plugin-svgr#options
 */
module.exports = {
  /**
   * Always spread props (`{...props}`) last on the root `<svg>` element.
   *
   * @see https://www.smooth-code.com/open-source/svgr/docs/options/#expand-props
   */
  expandProps: "end",

  /**
   * Use the JSX file extension for generated components.
   *
   * @see https://www.smooth-code.com/open-source/svgr/docs/options/#file-extension
   */
  ext: "jsx",

  /**
   * Don't add the `width` and `height` props (hardcoded `1em` value).
   *
   * @see https://www.smooth-code.com/open-source/svgr/docs/options/#icon
   */
  icon: false,

  /**
   * Export components using React's `forwardRef` API to reference the underlying component and allow access to the
   * root `<svg>` element which is necessary for animations.
   *
   * @see https://www.smooth-code.com/open-source/svgr/docs/options/#ref
   */
  ref: true,

  /**
   * All SVG files in this project are already optimized with SVGO using the included `.svgo.yml` configuration.
   *
   * @see https://www.smooth-code.com/open-source/svgr/docs/options/#svgo
   */
  svgo: false,

  template: typeScriptSVGRTemplate()
};
