const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  devtool:false,
  entry:'./src/index.tsx',
  output:{
    path:path.join(__dirname, 'dist'),
    filename:'[name].[hash:5].js'
  },
  devServer:{
    hot:true,
    // contentBase:path.join(__dirname, 'dist'),
    historyApiFallback:{
      index:'./index.html'
    },
    port:'9000'
  },
  resolve:{
    extensions:['.ts','.tsx','.js','.json'],
    alias:{
      '@':path.resolve('src')
    }
  },
  module:{
    rules:[
      {
        test:/.tsx?$/,
        use:'ts-loader'
      },
      {
        test:/.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new webpack.HotModuleReplacementPlugin()
  ]
}