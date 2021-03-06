# react 脚手架

#### 准备

```javascript
npm install 依赖包[@版本号] -g  //安装到全局环境
npm install 依赖包[@版本号] --save //安装到dependencies
npm install 依赖包[@版本号] --save-dev //安装到devDependencies
npm init    //创建package.json
```

#### 开发环境依赖的包

```javascript
babel-core          
babel-loader
babel-plugin-syntax-dynamic-import //支持import()语法
babel-plugin-transform-class-properties //使class的属性支持箭头函数
babel-preset-env    //支持es2015、2016、2017语法
babel-preset-react  //支持jsx语法
css-loader          //用于打包css文件
file-loader         //用于打包文件
html-webpack-plugin //根据模板生成的html文件
html-webpack-include-assets-plugin  //向指定html文件嵌入资源文件
postcss-loader      //强大的处理css的插件系统
autoprefixer        //postcss的一个插件，自动为部分css添加前缀来兼容不同厂商的浏览器
less-loader         //将less文件编译成css
less
sass-loader         //将sass文件编译成css
style-loader        //将css嵌入html的head标签中
uglifyjs-webpack-plugin //压缩js代码
url-loader          //对file-loader的一层封装用于打包图片
webpack            
webpack-merge       //合并多个webpack配置
webpack-dev-server //node服务器用于开发环境的部署
rimraf              //用于删除文件夹和文件
cross-env           //兼容不同平台的环境变量设置
copyfiles           //用于拷贝不经过webpack编译的文件
```

#### 生产环境依赖的包

```javascript
react
react-dom
react-router-dom
```