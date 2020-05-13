const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin') 需要解构，正确方式如下
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: "./src/index.ts", //入口文件
  output: {
    filename: "main.js" //编译后的文件叫什么
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'] //在import的时候，可以省略后缀：import xxx from './src/index'不必写成 './src/index.js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/, //遇到这些类型的文件，应该使用什么（loader)去解析
      use: 'ts-loader',
      exclude: /node_modules/ //排除某些文件：在编译时，不去处理node_modules下面的文件
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map', //判断是开发还是生产，决定是否使用source-map，来减少打包时间，减少资源浪费
  //webpack-dev-server 也有一些参数可以配置:本地开发服务器配置
  devServer: {
    open: true, //第一次构建完成后自动打开浏览器
    contentBase: './dist', //开发环境运行时，是基于哪个文件夹作为根目录运行的
    stats: 'errors-only', //webpack启动后在控制台打印哪些信息
    compress: false, //不启用压缩：注意这里的压缩是文件的压缩如gzip等
    host: 'localhost',
    port: 8089
  },
  plugins: [
    new CleanWebpackPlugin({
      //build之前清理一下指定路径
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      //编译的时候使用哪个html模板
      template: './src/template/index.html',
      minify: {
        removeComments: false, // 改为false
        collapseWhitespace: false, // 改为false
        removeAttributeQuotes: false // 改为false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
        }
    })
  ]
}

