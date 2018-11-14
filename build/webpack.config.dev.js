'use strict'
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: [
    './Vue/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}