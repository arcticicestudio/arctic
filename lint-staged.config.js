/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

/**
 * The lint-staged configuration.
 * @see https://github.com/okonet/lint-staged#configuration
 */
module.exports = {
  "*.{js,json,md,mdx,ts,tsx,yml}": "prettier --list-different",
  "*.{js,tx,tsx}": "eslint",
  "*.md": "remark --no-stdout"
};
