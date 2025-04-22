/*
 * FIXES:
 * 
 * New Webpack syntax -> ES6 modules & latest webpack version
 * Deprecates some old webpack plugin, parsed to newest methods:
 * Clean/Copy/Extract/Uglify -> Terser + css-minimizer
 * 
*/
import { path } from 'path'
// const path = require('path');
import { merge } from 'webpack-merge'
// const { merge } = require('webpack-merge');
import { webpackCommon } from './common.config.js'
// const webpackCommon = require('./common.config');

// webpack plugins

import {  HtmlWebpackPlugin } from 'html-webpack-plugin'
// const HtmlWebpackPlugin = require('html-webpack-plugin');
import { DefinePlugin } from 'webpack'
// const { DefinePlugin } = require('webpack');
import { CssMinimizerPlugin } from 'css-minimizer-webpack-plugin'
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
import CopyPlugin from 'copy-webpack-plugin'
// const CopyPlugin = require('copy-webpack-plugin');
import CleanWebpackPlugin from 'clean-webpack-plugin'
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import { MiniCssExtractPlugin } from 'mini-css-extract-plugin'
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

import { TerserPlugin } from 'terser-webpack-plugin'
// const TerserPlugin = require('terser-webpack-plugin');



//
export default merge(webpackCommon, {
  bail: true,
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // 
    filename: '[name]-[contenthash].min.js',
    chunkFilename: '[id]-[contenthash].js',
    publicPath: '/',
    assetModuleFilename: '[name]-[hash][ext]'
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false
          },
          output: {
            comments: false
          }
        },
        extractComments: false
      }),
      new CssMinimizerPlugin()
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../static/index.html'),
      
      //
      favicon: path.resolve(__dirname, '../static/favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../static'),

          //
          globOptions: {
            ignore: ['**/index.html', '**/favicon.ico']
          }
        }
      ]
    }),
    new CleanWebpackPlugin(),
    //      
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].min.css'
    })
  ]
  
});

