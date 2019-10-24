## 安装webpack cnpm install webpack webpack-cli --save-dev
## 安装babel cnpm install babel-loader @babel/core --save-dev
## 安装babel-polyfill(全局引入支持es6函数)  cnpm install babel-polyfill --save-dev 
## 安装plugin-transform-runtime(局部按需支持es6函数)   cnpm install @babel/plugin-transform-runtime @babel/runtime --save-dev
## 安装typescript ts-loader cnpm install typescript ts-loader --save-dev
## 安装less cnpm i less less-loader --save-dev
## 安装sass cnpm i sass node-sass --save-dev
## 提取css代码为单独文件 cnpm i extract-text-webpack-plugin@next --save-dev


####4、专题四-- webpack工程化
#####//  "devDependencies": {
#####///    "@babel/core": "^7.6.2", //babel 核心
#####///    "babel-loader": "^8.0.6", // babel loader
#####/// **********************************************************
#####///    "@babel/preset-env": "^7.6.2", // 告诉babel以何种目标编译 常有规范es2015 es2016 es2017 env(常用) 配置文件：.babelrc
#####/// ********************************************************************************************************************
#####///    "@babel/plugin-transform-runtime": "^7.6.2", // 局部引入es6方法
#####///    "@babel/runtime": "^7.6.2", // 局部引入es6方法
#####/// ********************************************************** **********************************************************
#####///    "babel-polyfill": "^6.26.0", // 全局引入es6方法（代码量大）
#####/// ********************************************************** **********************************************************
#####///    "ts-loader": "^6.2.0", // typeScript loader
#####///    "typescript": "^3.6.3", // type
#####/// ********************************************************** **********************************************************
#####///    "webpack": "^4.41.0",
#####///    "webpack-cli": "^3.3.9"
#####/// ********************************************************** **********************************************************
#####///    "css-loader": "^3.2.0",
#####///    "style-loader": "^1.0.0",
#####/// ********************************************************** **********************************************************

#####///  },
##### 4.1 引入css
##### 4.1.1 css-loader让css可以用js读取，style-loader让css可以被style引入，顺序很重要，css-loader=》 style-loader (loader执行从后面执行)