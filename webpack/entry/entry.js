// 入口文件可以是一个入口，也可以是多个.


// 配置单个入口文件
module.exports = {
  entry: './path/to/my/entry/file.js'
}

// 配置多个入口文件，怎么配置？

// 打包的入口文件，从这个文件开始绘制依赖关系图。
// 如从file.js的依赖开始，import的文件
// File.js ---  EUI
//         ---  Vue router
//         ---  公共的css文件
//         ---  公共的js工具文件，utils.js等   ---  utils-formatter.js
//                                            ---  utils-valid.js 等等
//         ---  App.vue  ---  
//         attendance.vue  salary.vue等等页面是在路由里面配置了有哪些页面，那么这些页面是怎么解析并生成依赖图的呢？          

