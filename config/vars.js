const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const root = path.resolve(__dirname, '..')
const entryPath = path.resolve(__dirname, '../src/index.tsx')
const outputPath = path.resolve(__dirname, '../dist')
const srcPath = path.resolve(__dirname, '../src')

module.exports = {
  isDev,
  root,
  entryPath,
  outputPath,
  srcPath
}