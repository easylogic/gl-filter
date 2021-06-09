const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const webpack = require('webpack'); //to access built-in plugins


const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    library: "EasyLogicGLFilter",
    libraryTarget: "umd",
    path: path.resolve(__dirname, '../dist'),
    filename: 'gl-filter.js',
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']

          }
        }
      }
    ]
  },
};