const { merge } = require('webpack-merge');

const commontConfig = require('./webpack.common.conf');

module.exports = merge(commontConfig, {
  mode: 'development',
  devtool: 'source-map',
});
