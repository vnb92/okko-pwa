const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = env => ({
  mode: env.mode,
  devtool: `source-map`,
  entry: {
    index: './src/index.js',
    initServiceWorker: './src/service-worker/initServiceWorker.js',
  },
  output: {
    path: path.join(__dirname, 'docs'),
    publicPath: '',
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    writeToDisk: env.sw ? true : false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: env.mode === 'development' }
          },
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/service-worker/service-worker.js', to: 'service-worker.js' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new webpack.EnvironmentPlugin({
      DEV: env.mode === 'development',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin({ sourceMap: true })],
  },
});
