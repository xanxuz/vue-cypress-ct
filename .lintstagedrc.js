module.exports = {
  '*.{js,vue}': [
    'vue-cli-service lint',
    'eslint --ignore-path .gitignore . --fix'
  ]
}
