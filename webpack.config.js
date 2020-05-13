const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode:'development',//指定环境，生成：production
  devServer: {
    // 服务根目录
    contentBase:__dirname+"/dist",
    // 服务主机
    host:'localhost',
    // 服务端口
    port:8080,
    // 代码热更新
    hot:true,
    // 默认打开浏览器
    open:true,
    // 默认打开的页面
    openPage:'index.html',
    // 接口代理，作用相当大
    proxy:{
        "/api":{
            target:"http://lemall.futurefe.com"
        }
    }
  },
  entry: './src/main.js',
  output: {
    path: __dirname + 'dist',
    filename: '[name].[hash].js',
    publicPath:'/',
    // 打包模块名称
    library:'webpack-demo',
    // 打包模块方式，umd实际上是AMD+CMD混合
    libraryTarget:'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader','postcss-loader'],
        exclude: /node_modules/,
      },{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },{
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },{
        test: /\.(sass|scss)$/,
        use: ['style-loader','css-loader','postcss-loader','sass-loader'],
        exclude: /node_modules/,
      },{
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
          }
        },
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: __dirname + '/public',
        to: __dirname + '/dist',
        ignore: ['.*']
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}