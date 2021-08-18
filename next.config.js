require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack(config) {
    // Configuring use of environment variables
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    // Configuring use of svg's
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
