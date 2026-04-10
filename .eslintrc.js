// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {       // ✅ This belongs here in ESLint
    ecmaVersion: 2020    // Or whatever version you were trying to set
  },
  rules: {
    // your rules...
  }
}