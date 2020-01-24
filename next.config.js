const withLess = require('@zeit/next-less');
const withFonts = require('next-fonts');
const withWorkers = require('@zeit/next-workers');
module.exports = withWorkers(
  withFonts(
    withLess({
      /* config options here */
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]'
      }
    })
  )
);
