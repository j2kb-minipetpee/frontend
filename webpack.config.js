const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => ({
  mode: argv.mode,
  entry: {
    main: './src/index.tsx',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/,
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.png|jpg|gif|svg|ttf|woff|woff2|eot|ttf|otf$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          // limit: 100,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  optimization: {},
});
