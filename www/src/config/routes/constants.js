/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const { metadataArctic } = require("../../data/project");

const pathSeparator = "/";

/**
 * The public base URL of the site.
 */
const BASE_PUBLIC_URL = `${metadataArctic.homepage}`;

/**
 * The route mapping for the landing page.
 * Serves as alias for the _root route_ that will be redirected to `ROUTE_ROOT`.
 */
const LANDING = "landing";

const ROOT = pathSeparator;

/**
 * Provides routing constants.
 */
module.exports = {
  BASE_PUBLIC_URL,
  LANDING,
  ROOT
};
