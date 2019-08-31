/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

const { resolve } = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const webpack = require("webpack");

const { BASE_DIR_BUILD_REPORTS } = require("../src/config/internal/constants");
const withPackageConfig = require("../src/config/package");

/**
 * Configuration for the `webpack-bundle-analyzer` plugin.
 *
 * @see https://github.com/webpack-contrib/webpack-bundle-analyzer
 */
const withBundleAnalyzerPluginConfig = pluginContext => ({
  analyzerMode: "static",
  generateStatsFile: true,
  openAnalyzer: false,
  reportFilename: resolve(`${pluginContext}/${BASE_DIR_BUILD_REPORTS}/webpack-bundle-analyzer/index.html`),
  statsFilename: resolve(`${pluginContext}/${BASE_DIR_BUILD_REPORTS}/webpack-bundle-analyzer/stats.json`)
});

/**
 * Configuration for the `git-revision-webpack-plugin` plugin.
 *
 * @see https://github.com/pirelenito/git-revision-webpack-plugin
 */
const gitRevisionPluginConfig = {
  branch: true
};
const gitRevisionPlugin = new GitRevisionPlugin(gitRevisionPluginConfig);

/**
 * Configuration for `webpack.DefinePlugin`.
 *
 * @see https://webpack.js.org/plugins/define-plugin
 */
const withDefinePluginConfig = envVarPrefix => {
  const envNameGitVersion = `process.env.${envVarPrefix}_GIT_VERSION`;
  const envNameGitCommitHash = `process.env.${envVarPrefix}_GIT_COMMITHASH`;
  const envNameGitBranch = `process.env.${envVarPrefix}_GIT_BRANCH`;
  return {
    [envNameGitVersion]: JSON.stringify(gitRevisionPlugin.version()),
    [envNameGitCommitHash]: JSON.stringify(gitRevisionPlugin.commithash()),
    [envNameGitBranch]: JSON.stringify(gitRevisionPlugin.branch())
  };
};

/**
 * Implementation of the Gatsby Node `onCreateWebpackConfig` API.
 * Allows to let plugins extend/mutate the project's webpack configuration.
 * @param actions Collection of functions provided by Gatsby used to manipulate the state of the build
 * @param stage The name of the current Gatsby build process stage.
 * @param pluginOptions The options passed to the Gatsby theme plugin.
 * @see https://gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
 * @see https://gatsbyjs.org/docs/actions/#setWebpackConfig
 * @see https://webpack.js.org
 */
const onCreateWebpackConfig = ({ actions, stage }, themeOptions) => {
  const { envVarPrefix, pluginContext } = withPackageConfig(themeOptions);
  const r = m => resolve(pluginContext, ...m);

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~assets": r(["src", "assets"]),
        "~atoms": r(["src", "components", "atoms"]),
        "~config": r(["src", "config"]),
        "~containers": r(["src", "components", "containers"]),
        "~data": r(["src", "data"]),
        "~hooks": r(["src", "hooks"]),
        "~layouts": r(["src", "components,", "layouts"]),
        "~molecules": r(["src", "components", "molecules"]),
        "~organisms": r(["src", "components", "organisms"]),
        "~pages": r(["src", "pages"]),
        "~stores": r(["src", "stores"]),
        "~styles": r(["src", "styles"]),
        "~templates": r(["src", "components", "templates"]),
        "~utils": r(["src", "utils"])
      }
    }
  });

  switch (stage) {
    case "build-html":
    case "build-javascript":
      actions.setWebpackConfig({
        plugins: [
          new BundleAnalyzerPlugin(withBundleAnalyzerPluginConfig(pluginContext)),
          new GitRevisionPlugin(),
          new webpack.DefinePlugin(withDefinePluginConfig(envVarPrefix))
        ]
      });
      break;
    case "develop":
      actions.setWebpackConfig({
        plugins: [new webpack.DefinePlugin(withDefinePluginConfig(envVarPrefix))]
      });
      break;
  }
};

module.exports = onCreateWebpackConfig;
