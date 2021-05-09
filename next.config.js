const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [
    withCSS,
    withLess({
      lessLoaderOptions: {
        modifyVars: {},
        javascriptEnabled: true,
      },
      webpack(config) {
        return config;
      },
    }),
  ],
  {
    env: {
      API_ENDPOINT: process.env.API_ENDPOINT,
    },
  },
]);
