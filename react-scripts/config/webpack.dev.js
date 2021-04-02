import webpack from 'webpack'
import webpackServer from 'webpack-dev-server'
import { resolve } from 'path'

import baseConfig from '../config/webpack.base.js'

export default () => {
  const webpackConfig = {
    ...baseConfig,
    mode: 'development',
  }

  const devServerOptions = {
    stats: 'errors-only',
    // open: true,
  }

  const compiler = webpack(webpackConfig)
  const server = new webpackServer(compiler, devServerOptions)

  server.listen(8080, '127.0.0.1', () => {
    // console.log('Starting server on http://localhost:8080')
  })
}

// module.exports = {
//   devtool: 'cheap-module-eval-source-map',
//   devServer: {
//     contentBase: './public'
//   }
// }
