module.exports = {
  extends: [ '@commitlint/config-conventional' ],

  // Rules -> https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
  rules: {
    'scope-case': [ 1, 'always', 'pascal-case' ]
  }
}
