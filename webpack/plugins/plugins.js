// 用于做一些打包优化、资源管理(assets)、和环境变量优化等工作

// 1、先require进来，再加入plugins数组
// 2、可以在一个配置里面重复多次使用相同的plugin去实现不同的功能，用new去创造plugin的实例，配置不同的option即可

const HtmlWebpackPlugin = require('html-webpack-plugin');  // 要先installed via npm ?

module.export = {
  plugins: [
    new HtmlWebpackPlugin({ template: './scr/index.html' })   // 在应用里面产生一个html文件，并自动注入打包后的内容？
  ]
}

