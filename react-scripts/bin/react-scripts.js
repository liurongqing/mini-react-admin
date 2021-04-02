#!/usr/bin/env node
import build from '../config/webpack.prod.js'
import dev from '../config/webpack.dev.js'

const args = process.argv.slice(2)

// 开发
if (args[0] === 'start') {
  dev()
}

// 生产
if (args[0] === 'build') {
  build()
}
