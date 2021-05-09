const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config');

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
    i18n,
    env: {
      API_ENDPOINT: process.env.API_ENDPOINT,
    },
  },
]);
