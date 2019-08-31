/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const { LANDING, ROOT } = require("./constants");

const ROUTE_ROOT = ROOT;

/**
 * The route mapping for the landing page.
 * Serves as alias for the _root route_ that will be redirected to `ROUTE_ROOT`.
 */
const ROUTE_LANDING = `${ROUTE_ROOT}${LANDING}`;

/**
 * Provides route mapping constants.
 */
module.exports = {
  ROUTE_LANDING,
  ROUTE_ROOT
};
