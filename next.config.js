const { withFucss } = require('next-fucss');
const withCSS   = require('@zeit/next-css');
const withTranspileModules = require('next-transpile-modules');

// module.exports = withTranspileModules({
//   transpileModules: ['src']
// });

module.exports = withCSS(
  withTranspileModules({
    transpileModules: ['src'],
    webpack: (config, { dir, dev, isServer, defaultLoaders }) => {
      withFucss(config);
      return config;
    },
    publicRuntimeConfig: {
      version: process.env.npm_package_version,
      env: process.env.ENV
    }
  })
);
