module.exports = (isDev = false) => ({
  minify: !isDev,
  sourceMaps: isDev,
  env: {
    targets: '> 0.25%, not dead',
    mode: 'usage',
    coreJs: '3.22',
    shippedProposals: true
  },
  jsc: {
    target: 'es2022',
    loose: true,
    externalHelpers: true,
    parser: {
      syntax: 'typescript',
      tsx: true,
      decorators: true,
      dynamicImports: true,
      topLevelAwait: true
    },
    transform: {
      react: {
        development: isDev,
        refresh: isDev,
        useBuiltins: true,
        throwIfNamespace: true
      },
      legacyDecorator: true
    }
  },
  module: {
    type: 'commonjs'
  }
})