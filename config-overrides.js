const {
  override,
  addLessLoader,
  fixBabelImports,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    addLessLoader({
      javascriptEnabled: true,
    }),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    // 配置路径别名
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    })
  ),
};
