module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // 👈 Thêm dòng này
    babelOptions: {
      presets: ['@babel/preset-env']
    }
  },
}