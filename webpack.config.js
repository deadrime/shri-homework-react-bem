const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.styl(us)?$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      },
      {
        test: /\.(gif|bmp|jpg|jpeg|png)$/,
        use: [ 'url-loader' ],
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
      },
      // {
      //   test: /\.svg\?jsx$/,
      //   use: ['@svgr/webpack', 'url-loader']
      // },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
      filename: './index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CheckerPlugin(),
  ]
}
