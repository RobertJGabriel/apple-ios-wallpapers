const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const glob = require('glob');
module.exports = {
  context: __dirname + '/app/',
  entry: {
    'popup.min.js': './scripts.babel/popup.js',
    'bundle.min.css': [
      './styles/vendor/bootstrap.css',
      './styles/app/popup.css',
    ],
  },
  output: {
    path: path.resolve(__dirname, '/docs'),
    filename: '[name]'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.min.css"),
    new PurifyCSSPlugin({
      purifyOptions: {
        whitelist: ['*tln-*', '*hljs-*', '*hljs*', '*editor-*'],
      },
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'app/*.html')),
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    //
  ]

};