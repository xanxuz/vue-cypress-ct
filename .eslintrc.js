module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:cypress/recommended'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        exports: 'only-multiline'
      }
    ],
    indent: 'off',
    'vue/script-indent': [
      'error',
      2,
      {
        switchCase: 1,
        baseIndent: 1
      }
    ],
    'vue/order-in-components': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/this-in-template': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/name-property-casing': [ 'error', 'PascalCase' ],
    'vue/no-multi-spaces': 'error',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/attribute-hyphenation': [ 2, 'always' ],
    'vue/prop-name-casing': [ 'error', 'camelCase' ],
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/require-prop-types': 'error',
    'vue/component-name-in-template-casing': [ 'error', 'PascalCase' ],
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'error',
    'vue/html-self-closing': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/no-template-shadow': 'error',
    'vue/require-default-prop': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/no-v-html': 'error',
    'vue/array-bracket-spacing': 'error',

    'array-bracket-spacing': [ 'error', 'always' ],
    'array-bracket-newline': [ 'error', { multiline: true } ],
    'array-element-newline': [ 'error', 'consistent' ],
    'computed-property-spacing': [ 'error', 'always' ],
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  overrides: [
    {
      files: [ 'src/**/*spec.js' ],
      env: {
        jest: true
      }
    }
  ]
}
