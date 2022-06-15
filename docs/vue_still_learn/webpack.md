## 目录
[[toc]]

## webpack
## script标签之间的隐式依赖
<strong>project</strong>  
``` diff
    build_learn
    |- package.json
+   |- index.html
+   |- /src
+       |- index.js
```
<strong>index.html</strong>
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test your webpack</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
</head>
<body>
    <script src="./src/index.js"></script>
</body>
</html>
```
<strong>src/index.js</strong>
``` js
function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack'],'');
    return element
}

document.body.appendChild(component())
```
<strong>package.json</strong>
``` json
{
  "name": "build_learn",
  "version": "1.0.0",
  "description": "a package for learning build",
  "private":true,
  "author": "ajn404",
  "license": "MIT",
  "scripts": {
    "start": "webpack  --config webpack.config.js"
  },
  "dependencies": {
    "webpack": "^5.58.1",
    "webpack-cli": "^4.9.0"
  }
}
```
## 创建bundle
project
``` diff
  |- package.json
+ |- /dist
+   |- index.html
- |- index.html
  |- /src
    |- index.js
```
执行 `npx webpack` 
``` shell
npx webpack       
asset main.js 69.5 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1010 bytes 5 modules
cacheable modules 532 KiB
  ./src/index.js 225 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

## [关于模块方法](https://www.webpackjs.com/api/module-methods/)

## 使用配置文件webpack.config.js
``` js
const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}
//我们可以通过配置方式指定loader规则，插件，解析选项
```
 执行`npx webpack  --config webpack.config.js`
# [接下来是管理资源章节](https://www.webpackjs.com/guides/asset-management/)
## 加载css
``` shell
npm install --save-dev style-loader css-loader
```
webpack.config.js
``` js
const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
```
style.css
``` css
.hello{
    color: red;
}
```
src/index.js
~~~ js
import _ from 'lodash'
import './style.css'

function component(){
    var element = document.createElement('div');
    
    element.innerHTML = _.join(['Hello','webpack'],'');
    element.classList.add('hello');

    return element
}

document.body.appendChild(component())
~~~

 执行`npx webpack  --config webpack.config.js`
 浏览器打开index.html发现头部多了一个style:golf:

``` html
<style>.hello{
    color: red;
}</style>
```
<strong>之后的webpack配置学习，遇到什么，就在下面总结什么</strong>

## 项目中的webpack
::: details vue.config.js
##### 使用CopyWebpackPlugin的
```js
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: '/',
  // configureWebpack: {
  //   devtool: 'source-map'
  // },
  chainWebpack: config => {
    // 添加新的svg-sprite-loader处理svgIcon
    config.module
    .rule('svgIcon')
    .test(/\.svg$/)
    .include
    .add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')  // 一定要添加use
    .loader('svg-sprite-loader')
    .tap(options => {
      options = {
        symbolId: 'icon-[name]'
      }
      return options
    })

    // 原有的svg图像处理loader添加exclude
    config.module
      .rule('svg')
      .exclude
      .add(resolve('src/icons'))
      .end()
    config.resolve.alias
      .set('static',resolve('static'))
    config.module
    .rule('images')
      .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 2000, esModule: false })); // 配置线上图片转base64。 app 已有做浏览器缓存。转换过大，会加大首屏加载时长
  },
  devServer: {
    proxy: {
      '/index.php': {
        target: 'http://preapiconsole.71360.com/api/app/obor-nginx-php/',
        changeOrigin: true,
        pathRewrite: {
          '^/index.php': ''
        }
      },
      '/index_upload.php': {
        // target:'https://api.71360.com/api/app/obor-nginx-php/',
        target: 'https://preapiconsole.71360.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/index_upload.php': ''
        }
      },
      '/index.java': {
        target:'http://luying2.oa.nbseo.cn/',
        changeOrigin: true,
        pathRewrite: {
          '^/index.java': ''
        }
      },
      '/upload': {
        target:'https://preapiconsole.71360.com/api/app/',
        changeOrigin: true,
        pathRewrite: {
          '^/upload': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    },
    plugins:[
    	new CopyWebpackPlugin([{
    		from: './download',
        to:'./download' ,
    	}])
    ]
  },
}
```
#### 另一个
```js
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
// 替换富文本源代码文件
const fs = require('fs')
try {
  const file_str = fs.readFileSync(path.join(__dirname, './src/utils/kindeditor-all.js'), 'utf8')
  const modify_path = path.join(__dirname, './node_modules/kindeditor/kindeditor-all.js')
  fs.writeFile(modify_path, file_str, function(err) {
    if (err) {
      console.log('错误页面', err)
    } else {
      console.log('kindeditor替换成功！')
    }
  })
} catch (err) {
  console.log('kindeditor替换失败!', err)
}
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {outputStyle: "expanded"}
      }
    }
  },
  configureWebpack: config => { // 基于环境配置
    if (config.mode === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 1024 * 24, // 对超过24k的数据压缩
            deleteOriginalAssets: false // 是否删除源文件
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
    config.plugin('define').tap(args => {
      args[0]['process.env'].VUE_APP_BUILD_TIME = JSON.stringify(new Date().toLocaleString())
      return args
    })
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/index.php': {
        target: 'http://preapiconsole.71360.com/api/app/obor-nginx-php/',
        changeOrigin: true,
        pathRewrite: {
          '^/index.php': ''
        }
      },
      // 'https://pretyapi.71360.com/
      '/to_zhu.php/': {
        target: 'https://presiteadminapi.71360.com/',
        // target: 'https://xcxapi.71360.com',// 正式环境
        // target: 'http://prexcxapi.71360.com', // 预发布环境
        changeOrigin: true,
        pathRewrite: {
          '^/to_zhu.php/': ''
        }
      }
    }
  },
  lintOnSave: false,
  productionSourceMap: false
}

```
:::


