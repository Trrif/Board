import webpack from 'webpack'
import Config from 'webpack-config'

export default new Config().extend('webpack_configs/webpack.base.config.js').merge({
  devtool: 'source-map',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })]
})
