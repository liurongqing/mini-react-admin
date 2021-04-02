import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'

export default {
  // entry: './src/index.js',
  output: {
    path: resolve('./dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
// const config = {
//   // entry: './src/main.ts',
//   // output: {
//   //   path: resolve('./dist'),
//   //   filename: '[name].[chunkhash].js'
//   // },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: 'babel-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   // plugins: [
//   //   new HtmlWebpackPlugin({
//   //     template: './public/index.html',
//   //   }),
//   // ],
//   resolve: {
//     extensions: ['.ts', '.js'],
//     alias: {
//       '~': resolve('./src'),
//     },
//   },
// }

// module.exports = config
