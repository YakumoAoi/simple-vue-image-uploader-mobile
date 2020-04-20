const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./dist'),
    publicPath: '/dist/',
    filename: 'uploader.js',
    libraryTarget: 'commonjs'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias:{
      'vue$': 'vue/dist/vue.js'
    },
    extensions: ['*','.js','.vue','.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo:true,
    overlay: true,
  },
  performance: {
    hints:false
  },
  devtool: '#eval-source-map'
}

if(process.env.NODE_ENV === 'production'){
  module.exports.devtool = '#source-map'

  module.exports.plugins=(module.exports.plugins||[]).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:'"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      courseMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}