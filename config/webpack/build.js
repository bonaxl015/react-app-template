const webpack = require('webpack')
const commonConfig = require('./common')
const { merge } = require('webpack-merge')

const config = merge(commonConfig, {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
})
const compiler = webpack(config)
compiler.run((err, stats) => {
  if (err) {
    console.error(err)
    if (err.details) {
      console.log(err.details)
    }
    return
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.error(info.errors);
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
  compiler.close(err => {
    console.error(err)
  })
})