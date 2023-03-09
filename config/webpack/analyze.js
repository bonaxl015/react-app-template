const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpack = require('webpack')
const common = require('./common')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin()
const commonConfig = smp.wrap(common)
const config = merge(commonConfig, {
  cache: false,
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 9999,
      openAnalyzer: true
    })
  ]
})
const compiler = webpack(config)

compiler.run(err => {
  if (err) {
    console.log(err)
    compiler.close(
      () => console.log('Compiler closed')
    )
  }
})