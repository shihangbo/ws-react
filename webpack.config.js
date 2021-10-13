const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
module.exports = {
  mode,
  devtool:'source-map',
  entry:'./src/index.tsx',
  output:{
    path:path.join(__dirname, 'dist'),
    filename:'bundle.js'
  },
  devServer:{
    hot:true,
    // contentBase:path.join(__dirname, 'dist'),
    historyApiFallback:{
      index:'./index.html'
    },
    port:'9000',
    proxy: {
      '/api/': {
        target: 'http://localhost:20000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  },
  resolve:{
    extensions:['.ts','.tsx','.js','.json'],
    alias:{
      '@':path.resolve(__dirname,'src'),
      '~':path.resolve(__dirname,'node_modules')
    }
  },
  module:{
    rules:[
      {
        test:/\.(t|j)sx?$/,
        loader:'ts-loader',
        exclude:/node_modules/
      },
      {
        test:/\.(t|j)sx?$/,
        enforce:'pre',
        loader:'source-map-loader'
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.(jpg|png|gif|svg|jpeg)$/,
        use:['url-loader']
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