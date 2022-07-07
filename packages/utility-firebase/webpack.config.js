const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const { DefinePlugin } = require("webpack");
const dotenv = require("dotenv");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "example",
    projectName: "utility-firebase",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new DefinePlugin({
        "process.env": JSON.stringify(dotenv.config().parsed),
      }),
    ],
    // modify the webpack config however you'd like to by adding to this object
  });
};
