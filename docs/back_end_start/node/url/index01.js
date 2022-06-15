const url = require('url');
let parseUrl = 'http://nodejs.cn/api/url.html#class-url'

let urlObj = url.parse(parseUrl)

console.log(urlObj)