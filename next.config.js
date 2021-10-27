const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withAntdLess = require('next-plugin-antd-less');
const { i18n } = require('./next-i18next.config');

module.exports = withPlugins(
  [
    withAntdLess({
      modifyVars: { '@primary-color': '#2A9D8F' },
    }),
    withBundleAnalyzer,
  ],
  {
    i18n,
  },
);
