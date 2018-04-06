import Config from 'webpack-config'
import webpack from 'webpack'
import path from 'path'
export default new Config().extend('webpack_configs/webpack.base.config.js').merge({
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    path.join(__dirname, '/../src/index.jsx')
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
