module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-pxtorem')({
      rootValue: 100,
      unitPrecision: 5,
      minPixelValue: 2,
      propWhiteList: ['*'],
      selectorBlackList: ['.ig-']
    })
  ]
}
