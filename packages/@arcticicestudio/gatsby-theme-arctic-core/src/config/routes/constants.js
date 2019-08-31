/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const packageMetadata = require("../../data/package");

/**
 * The default path separator.
 *
 * @constant {string}
 * @since 0.1.0
 */
const pathSeparator = "/";

/**
 * The public base URL of the site.
 * The value can be set via the Gatsby theme plugin options or injected through the
 * `GATSBY_THEME_ARCTIC_BASE_PUBLIC_URL` environment variable during compile time,
 * otherwise defaults to the specified homepage of the project.
 */
const BASE_PUBLIC_URL = process.env.GATSBY_THEME_ARCTIC_BASE_PUBLIC_URL || `${packageMetadata.homepage}`;

const ROOT = pathSeparator;

module.exports = { BASE_PUBLIC_URL, ROOT };
