const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
)

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript', 'prettier'],
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint'
  ],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    createDefaultProgram: true,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      globalReturn: true
    },
    project: './tsconfig.eslint.json'
    // project: {},
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      webpack: {
        config: './webpack/webpack.base.js'
      },
      typescript: {
        alwaysTryTypes: true,
        directory: './tsconfig.json'
      }
    },
    react: {
      version: 'detect'
    }
  },

  rules: {
    'jsx-no-lambda': 0,
    semi: [2, 'never'],
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'object-shorthand': [0, 'never'],
    quotes: 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'member-ordering': 0,
    'object-literal-sort-keys': 0,
    'no-shadowed-variable': 0,
    'no-consecutive-blank-lines': 0,
    'no-string-literal': 0,
    'jsx-no-multiline-js': 0,
    'jsx-boolean-value': 0,
    'arrow-parens': 0,
    'no-implicit-dependencies': 0,
    'no-submodule-imports': 0,
    'no-case-declarations': 1,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/indent': 'off',
    'jsx-alignment': 0,
    'jsx-wrap-multiline': 0,
    '@typescript-eslint/camelcase': 0,
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'import/extensions': 'off',
    'no-param-reassign': 1,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input']
      }
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 'off',
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-boolean-value': 1,
    'react/self-closing-comp': 1,
    'react/jsx-no-bind': 0,
    'react/sort-comp': 'off',
    'react/jsx-pascal-case': 1,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 1,
    'no-nested-ternary': 'off',
    'react/destructuring-assignment': [0, 'always'],
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-closing-tag-location': 1,
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-will-update-set-state': 1,
    'react/no-access-state-in-setstate': 1,
    // 'react/button-has-type': 1,
    'jsx-quotes': 1,
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/alt-text': 2,
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'react/jsx-no-target-blank': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'require-yield': 0,
    'space-before-function-paren': 0,
    indent: 'off'
  },
  globals: {
    document: false,
    window: false,
    eruda: false,
    Stats: false
  }
}
