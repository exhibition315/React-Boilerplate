const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const APPLICATION_PHASE = process.env.APPLICATION_PHASE || 'PRODUCTION';
// const IS_LOCAL = APPLICATION_PHASE === 'LOCAL';
const isAnalyze = process.argv.includes('--analyze');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  context: __dirname,
  entry: {
    'React-Boilerplate': resolve('src/index.jsx'),
  },
  output: {
    path: resolve('build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    alias: {
      '@': resolve('./src'),
      '@img': resolve('./assets/img'),
      '@animation': resolve('./assets/animation'),
      '@api': resolve('./src/api'),
      '@common': resolve('./src/common'),
      '@components': resolve('./src/components'),
      '@hooks': resolve('./src/services/hooks'),
      '@store': resolve('./src/store'),
      '@utils': resolve('./src/services/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpeg|git|svg|ttf|eof|woff(2)?)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash:8].[ext]',
          outputPath: 'assets/',
          publicPath: '/assets/',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new HtmlWebPackPlugin({
      template: resolve('template/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: `${resolve('template')}/robots.txt`, to: 'robots.txt' }],
    }),
    new Dotenv({
      path: `./.env/${APPLICATION_PHASE.toLowerCase()}.env`,
      systemvars: true,
    }),
    new CompressionPlugin({
      test: [/\.js(\?.*)?$/i, /\.css(\?.*)?$/i, /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/i],
    }),
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
  ],
};
