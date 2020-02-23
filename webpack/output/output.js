// 指定打包完后的文件的文件名以及文件放置的位置
// 默认打包后的文件名是main.js, 放在/dist下面，生成的其他一些如图片资源等文件也是放在/dist下面
// 也可以自己配置：
const path = require('path');
module.exports = {
  output: {
    path: path.resolve(___dirname, 'dist'),   //  代表路径是当前项目文件夹下的/dist？如LILYxx/dist?
    filename: 'my-first-webpack.bundle.js'
  }
}