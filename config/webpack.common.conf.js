const EslintWebpackPlugin = require('eslint-webpack-plugin');
const { appResolve } = require('./path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: appResolve('./dist'),
  },
  module: {
    rules: [
      // 处理ts
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      // 处理less
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      // 处理图片 使用webpack5内置的assert module type 处理
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'assert',
        generator: {
          filename: 'img/[name].[hash:8].[ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
    ],
  },
  plugins: [new EslintWebpackPlugin({})],
};
