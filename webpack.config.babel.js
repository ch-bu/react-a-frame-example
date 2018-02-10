const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/scripts/main.jsx',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'app'),
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          babelrc: false,
          presets: ['es2017', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'app/scss'),
        loader: 'style-loader!css-loader!sass-loader'
        // use: [
        //   {
        //     loader: "style-loader"
        //   }, {
        //     loader: "css-loader"
        //   }, {
        //     loader: "sass-loader",
        //     options: {
        //       includePaths: ["./app/scss"]
        //     }
        //   }
        // ]
      },
      { test: /\.png$/,
        loader: "url-loader?mimetype=image/png"
      },
      { test: /\.jpg$/,
        loader: "url-loader?mimetype=image/jpg"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      // https://github.com/kangax/html-minifier#options-quick-reference
      minify: {
        collapseWhitespace: true
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      include: /\.min\.js$/,
      minimize: true,
      comments: false
    }),
  ]
};
