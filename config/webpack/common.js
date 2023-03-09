const { entryPath, outputPath, srcPath, isDev } = require('../vars')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getSwcOptions = require('./swc-config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    bundle: entryPath
  },
  output: {
    path: outputPath,
    filename: 'js/[name][contenthash].js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@': srcPath
    }
  },
  module: {
    rules: [
      {
        test: /\.css$|\.scss$/i,
        include: srcPath,
        exclude: /node_modules/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: path.resolve(srcPath, 'assets', 'css', 'core.scss'),
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.[jt]sx?$/,
        exclude: [/node_modules/],
        enforce: 'pre',
        use: [
          {
            loader: 'swc-loader',
            options: getSwcOptions(isDev)
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          publicPath: '../',
          filename: './assets/fonts/[hash][ext][query]',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      templateParameters: {
        title: 'React Template'
      }
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
      chunkFilename: isDev ? 'css/[name].chunk.css' : 'css/[name].[contenthash:8].chunk.css',
      ignoreOrder: true,
    })
  ]
}
