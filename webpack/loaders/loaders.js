// webpack只能识别js和json文件。Loaders把其他文件转换成合理的module，然后webpack把这些文件加入依赖图谱

// test: 指明哪些文件需要被转换
// use: 表明用哪个loader去转换此种类型文件

module.export = {
  module: {
    rules: [
      {
        test: /.txt$/, use: 'raw-loader'   // 告诉webpack,当你在require()/import描述里面遇到文件名称是.txt结尾的文件名时，
      }                                    // 在打包前，先用raw-loader去把这个文件给转换一下
    ]
  }
}

// 注意1： 是module.rules里面定义loader。
// 注意2： /.txt$/: 表示所有以.txt结尾的文件。
//        '/.txt$/' || "/.txt$/": 表示名字为.txt的单个文件  正则匹配规则如此


