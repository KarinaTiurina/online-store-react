const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
  mode: 'production',

  target: 'node',

  entry: path.resolve(process.cwd(), 'initializers', 'server', 'index.js'),

  devtool: 'source-map',

  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'server.js'
  },

  externals: [
    nodeExternals()
  ],

  module: {
    exprContextCritical: false,
    rules: [
      { test: /\.css$/, use: 'ignore-loader' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
      __SERVER__: true,
      __CLIENT__: false
    })
  ]
});
