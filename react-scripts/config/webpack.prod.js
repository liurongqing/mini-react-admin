import webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'
import { resolve } from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

import baseConfig from '../config/webpack.base.js'

export default () => {
  const config = {
    ...baseConfig,
    mode: 'production',
    plugins: [
      ...baseConfig.plugins,
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
            to: './',
            globOptions: {
              ignore: [resolve('public/index.html')],
            },
          },
        ],
      }),
    ],
  }

  webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      // 处理错误
      console.log(err, stats)
    }
    // 处理完成
  })
}

// // const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// // const CopyPlugin = require('copy-webpack-plugin')
// // // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// // module.exports = {
// //   plugins: [
// //     new CleanWebpackPlugin(),
// //     new CopyPlugin({
// //       patterns: [
// //         {
// //           from: 'public',
// //           to: './',
// //         },
// //       ],
// //     }),
// //     // new BundleAnalyzerPlugin()
// //   ],
// // }
