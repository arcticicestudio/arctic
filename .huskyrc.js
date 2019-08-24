/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

/**
 * The husky configuration.
 * @see https://github.com/typicode/husky
 */
module.exports = {
  hooks: {
    "pre-commit": "lint-staged"
  }
};
