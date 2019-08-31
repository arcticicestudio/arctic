/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const { author, description, homepage, keywords, name, repository, title, version } = require("../../../package.json");

/**
 * Social and community links.
 */
const links = {
  organization: {
    social: {
      github: {
        id: "arcticicestudio",
        url: "https://github.com/arcticicestudio"
      },
      keybase: {
        id: "arcticicestudio",
        url: "https://keybase.io/arcticicestudio"
      },
      reddit: {
        id: "arcticicestudio",
        url: "https://www.reddit.com/user/arcticicestudio"
      },
      slack: {
        id: "arcticicestudio",
        url: "https://arcticicestudio.slack.com"
      },
      spectrum: {
        id: "arcticicestudio",
        url: "https://spectrum.chat/users/arcticicestudio"
      },
      stackoverflow: {
        id: "4568698",
        url: "https://stackoverflow.com/users/4568698/arctic-ice-studio"
      },
      twitter: {
        id: "arcticicestudio",
        url: "https://twitter.com/arcticicestudio"
      }
    }
  }
};

const metadataArctic = {
  author,
  description,
  homepage,
  links,
  keywords,
  name,
  repository,
  title,
  version
};

/**
 * Project metadata about _Arctic_, the snowy home of Arctic Ice Studio.
 *
 * @see https://github.com/arcticicestudio/arctic
 * @see https://www.arcticicestudio.com
 */
module.exports = { links, metadataArctic };
