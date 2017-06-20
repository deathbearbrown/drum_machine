'use strict';

// Webpack dependencies
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Main webpack config
module.exports = {
  entry: './app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/app.bundle.js'
  },
  devtool: "cheap-eval-source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets:['es2015','react']
          }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: false,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
