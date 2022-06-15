---
sidebarDepth: 10
title: 学一学node吧
---


# 《nodejs 10实战》

## http模块

### 创建http服务器和客户端
> 创建简单的nodejs服务器端
@[code{1-9} js{}](./node/http/index01.js)

> http.createServer()方法返回的是http模块封装的一个基于事件的http服务器。
> 同样，http.request是其封装的一个http客户端工具，可以用来向http服务器发起请求。
> 上面的req和res分别是http.IncomingMessage和http.ServerResponse的实例。
::: tip http.Server的事件主要有： 
- request：最常用的事件，当客户端请求到来时，该事件被触发，提供req和res两个参数，表示请求和响应信息。
- connection：当TCP连接建立时，该事件被触发，提供一个socket参数，是net.Socket的实例。
- close：当服务器关闭时，触发事件（注意不是在用户断开连接时）。
:::

> http.createServer其实就是添加了一个request事件监听
@[code{1-11} js{}](./node/http/index02.js)

[http.incomingMessage](http://nodejs.cn/api/http/class_http_incomingmessage.html)
是HTTP请求的信息，提供3个事件
- data
- end
- close

http.IncomingMessage提供的属性主要有：
- method：HTTP请求的方法，如GET。
- headers：HTTP请求头。
- url：请求路径。
- httpVersion：HTTP协议的版本

> 融合上述知识
@[code{1-25} js{}](./node/http/index03.js)

http.ServerResponse是返回给客户端的信息，其常用的方法为：
- res.writeHead(statusCode,[headers])：向请求的客户端发送响应头。
- res.write(data,[encoding])：向请求发送内容。
- res.end([data],[encoding])：结束请求。

### 客户端向ttp服务器发送请求

以上方法都是http模块在服务器端的使用，接下来看客户端的使用。向http服务器发起请求的方法有：
- http.request(option[,callback])：option为json对象，主要字段有host、port（默认为80）、method（默认为GET）、path（请求的相对于根的路径，默认是“/”）、headers等。该方法返回一个httpClientRequest实例。
- http.get(option[,callback])：http.request()使用HTTP请求方式GET的简便方法。

@[code{1-15} js{}](./node/http/index04.js)

> 利用http.get()方法也可以实现同样的效果
@[code{1-13} js{}](docs/back_end_start/node/http/index05.js)

> 与服务端一样，http.request()和http.get()方法返回的是一个http.ClientRequest()实例。

::: tip http.ClientRequest()类主要的事件和方法有：
- response：当接收到响应时触发。
- request.write(chunk[,encoding][,callback])：发送请求数据。
- res.end([data][,encoding][,callback])：发送请求完毕，应该始终指定这个方法。
:::

@[code{1-18} js{}](./node/http/index06.js)

## http2模块

## url模块

> 使用url模块只需要在文件中通过require('url')引入即可。

::: tip url模块是一个分析、解析url的模块，主要提供以下三种方法：
- url.parse(urlStr[,parseQueryString][,slashesDenoteHost])：解析一个url地址，返回一个url对象。
- url.format(urlObj)：接收一个url对象为参数，返回一个完整的url地址。
- url.resolve(from, to)：接收一个base url对象和一个href url对象，像浏览器那样解析，返回一个完整地址。
:::
  
@[code{1-6} js{}](./node/url/index01.js)
