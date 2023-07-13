const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin, default: loader } = require('vue-loader')



module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "vue-style-loader",
          "style-loader",
          "css-loader",
          "postcss-loader", 
          "sass-loader"       
        ],
      },
      {
        test: /\.m?js$/,
        use: [
          "babel-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: "file-loader"
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "static"},
      ]
    }),
    new VueLoaderPlugin() 
  ]
};