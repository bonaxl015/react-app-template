const webpack = require('webpack')
const devServer = require('webpack-dev-server')
const commonConfig = require('./common')
const { outputPath } = require('../vars')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const devConfigs = merge(commonConfig, {
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: false
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: ['node_modules'],
      failOnError: true,
      failOnWarning: false
    })
  ]
})

const compiler = webpack(devConfigs)

const devServerOptions = {
  static: {
    directory: outputPath
  },
  client: {
    logging: 'error',
    progress: true,
    overlay: {
      errors: true,
      warnings: false
    }
  },
  port: 7878,
  open: true,
  hot: true,
  compress: true,
  historyApiFallback: true,
  onListening: function(devServer) {
    if (!devServer) {
      throw new Error('webpack-dev-server is not defined')
    }

    const port = devServer.server.address().port
    console.log(`Listening on port: ${port}`)
  }
}

const server = new devServer(devServerOptions, compiler)

const runServer = async () => {
  console.log('Starting server on : http://localhost:7878')
  await server.start()
}

runServer()
