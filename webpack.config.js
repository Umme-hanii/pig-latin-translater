const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '')
    },
    host: 'localhost',
    port: 3002
  },
  mode: 'production'
}