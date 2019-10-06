const { withFucss } = require('next-fucss');
const withCSS   = require('@zeit/next-css');
const withTranspileModules = require('next-transpile-modules');

// module.exports = withTranspileModules({
//   transpileModules: ['src']
// });

const theme = {
  colors: {
    prim: '#3672f8',
    sec: '#b01eff',
    txt: '#747482'
  }
}

module.exports = withCSS(
  withTranspileModules({
    transpileModules: ['src'],
    webpack: (config, { dir, dev, isServer, defaultLoaders }) => {
      withFucss(config, theme);
      return config;
    },
    publicRuntimeConfig: {
      version: process.env.npm_package_version,
      env: process.env.ENV,
      theme
    }
  })
);
