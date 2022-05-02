const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: 'all',
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vender: {
          chunks: 'all',
          name: 'vendor',
          enforce: true,
          priority: 1,
          test: /[\\/]node_modules[\\/]/,
        },
        lottie: {
          chunks: 'all',
          name: 'vendor/lottie',
          enforce: true,
          priority: 10,
          test: /[\\/]node_modules[\\/]lottie-web/,
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
});
