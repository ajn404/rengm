---
sidebarDepth: 4
---

## 目录

[[toc]]

## 概括

技术积累

## node-sass

```shell
cnpm i
```

不然会报错

## vue 过滤器

::: details 查看代码

```js
  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 8) {
        return value.slice(0, 8) + '...'
      }
      return value
    }
  }
```

:::

**在 3.x 中，过滤器已移除，且不再支持。取而代之的是，我们建议用方法调用或计算属性来替换它们。**

## 主动触发 element 表单的检查

::: details 查看代码

```js
this.$refs.ruleForm.validateField("content");
```

:::

## 使用 vuepress 内置组件 codegroup

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

::: tip 在 vue 中实现 p5 有点恶心心 1.使用 toDataURL 把 canvas 转换成 base64 图片地址 2.或者用 refs 把 canvas "appendChild"到 vue 组件中 3.组件中导入 p5,其中 p5 的方法都要加'p5.'，否则会报错
:::

<ClientOnly>
<vue-still-learn></vue-still-learn>
</ClientOnly>
 vue的组件代码如下

::: details 查看代码

```vue
mounted() { this.$nextTick(()=>{ let judgeCanvasExist =
document.getElementById("defaultCanvas0") if(judgeCanvasExist===null) { new
P5(this.main); } }) }, methods: { main(_p5) { let p5 = _p5; let bubbles = [];
const window_width = window.innerWidth; const window_height =
window.innerHeight; p5.setup = () => { p5.createCanvas(window_width / 4,
window_height / 4); for (let i = 0; i < 100; i++) { let x = p5.random(p5.width);
let y = p5.random(p5.height); let r = p5.random(20, 60); let b = new Bubble(x,
y, r); bubbles.push(b); }; let
myCanvas=document.getElementById("defaultCanvas0"); let container =
this.$refs.box; container.appendChild(myCanvas) // let dataUrl =
myCanvas.toDataURL(); //base64 // this.canvasUrl = dataUrl; //
console.log(typeof myCanvas) // console.log(myCanvas.parentNode) // debugger //
myCanvas.parentNode.removeNode(myCanvas) } p5.mouseMoved = () => { for (let i =
bubbles.length - 1; i >= 0; i--) { if (bubbles[i].contains(p5.mouseX,
p5.mouseY)) { bubbles.splice(i, 1); } } } p5.draw = () => { p5.background(0);
for (let i = 0; i < bubbles.length; i++) { if (bubbles[i].contains(p5.mouseX,
p5.mouseY)) { bubbles[i].changeColor(255); } else { bubbles[i].changeColor(0); }
bubbles[i].move(); bubbles[i].show(); } } class Bubble { constructor(x, y, r) {
this.x = x; this.y = y; this.r = r; this.brightness = 0; } changeColor(bright) {
this.brightness = bright; } contains(px, py) { let d = p5.dist(px, py, this.x,
this.y); if (d < this.r) { return true; } else { return false; } } move() {
this.x = this.x + p5.random(-2, 2); this.y = this.y + p5.random(-2, 2); } show()
{ p5.stroke(255); p5.strokeWeight(4); p5.fill(this.brightness, 125);
p5.ellipse(this.x, this.y, this.r * 2); } } } }
```

:::

## 快速复制网页的 cookie

::: details 查看代码

```js
copy(document.cookie);
//粘贴并应用
"复制的内容".split(";").map((c) => (document.cookie = c));
```

:::

## echarts 的图标监听 window 的大小重绘

::: details 查看代码

```js
window.addEventListener("resize", () => {
  this.chartLine.resize();
});
```

:::
<ClientOnly>
<echart-bar-demo></echart-bar-demo>
</ClientOnly>
在博客这里使用的 Echart5 和 vue3,在 mounted 阶段加入上述这行代码，报错了

```js
Uncaught Error: `resize` should not be called during main process.
```

## 获取浏览器 Cookie 的值

::: details 查看代码

```js
const cookie = (name) =>
  `;${document.cookie}`.split(`${name}=`).pop().split(";").shift();
//使用
//cookie('pgv_pvid');
```

:::

## 将 rgb 转换成十六进制

::: details 查看代码

```js
const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//1<<24===1*Math.pow(2,24)
//使用
//rgbToHex(0,51,255)
//toString(16)表示转换成16进制后再转换成字符串
```

:::

## 复制到剪贴板

::: details 查看代码

```js
const copyToClipboard = async (text) => navigator.clipboard.writeText(text);
//使用
//copyToClipboard('hello world')
//Clipboard API是下一代的剪贴板操作方法，比传统的document.exeCommand()方法更强大、更合理
//如果你把上面的代码，粘贴到开发者工具里面运行，就会报错。因为代码运行的时候，开发者工具窗口是当前页，这个页面不存在 Clipboard API 依赖的 DOM 接口。一个解决方法就是，相关代码放到setTimeout()里面延迟运行，在调用函数之前快速点击浏览器的页面窗口，将其变成当前页。
//参照https://www.ruanyifeng.com/blog/2021/01/clipboard-api.html
/*
setTimeout(async () => {
  copyToClipboard('hello world')
}, 2000);
*/
```

:::

## 数组去重

::: details 查看代码

```js
(target) => {
  let arr = target;
  let res = [new Set(arr)];
  return res;
};
```

:::

## 深拷贝

::: details 查看代码

```js
function deepClone(target) {
  debugger;
  let result;
  if (typeof target === "object") {
    if (Array.isArray(target)) {
      result = [];
      for (let i in target) {
        result.push(deepClone(target[i]));
      }
    } else if (target === null) {
      result = null;
    } else if (target.constructor === RegExp) {
      result = target;
    } else {
      result = {};
      for (let i in target) {
        result[i] = deepClone(target[i]);
      }
    }
  } else {
    result = target;
  }
  return result;
}
```

:::

## 使用 Map 深拷贝

::: details 查看代码

```js
function deepCloneMethod(target) {
  const map = new Map();
  function isObject(val) {
    return val != null && typeof val === "object";
  }
  function clone(target) {
    if (isObject(target)) {
      let cloneTarget = Array.isArray(target) ? [] : {};
      if (map.get(target)) {
        return map.get(target);
      }
      map.set(target, cloneTarget);
      for (const key in target) {
        cloneTarget[key] = clone(target[key]);
      }
      return cloneTarget;
    } else {
      return target;
    }
  }
  return clone(target);
}
```

:::

## 判断字符串是否全为空

```js
str.match(/^[ ]*$/);
```

## 判断对象是否为空

::: details 查看代码

```js
//使用Object.keys()或者Object.getOwnPropertyNames()
const obj = {};
const arr = Object.keys(obj);
console.log(arr.length > 0);
//使用JSON.stringfy()
console.log(JSON.stringify(obj) !== "{}");
```

:::
::: tip 注意
Object.keys(), 它返回一个数组，这个数组由对象中可枚举的自有属性的名称组成。
Object.getOwnPropertyNames() 返回一个数组,该数组对元素是 obj 自身拥有的枚举或不可枚举属性名称字符串。
:::

## 检查日期是否有效

::: details 查看代码

```js
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
//使用
//isDateValid(new Date())
//true
//new Date()
//Thu Nov 18 2021 21:11:16 GMT+0800 (中国标准时间)
//格林威治的子午线向东偏移8小时
```

:::

## 查找一年中的某一天

::: details 查看代码

```js
const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
//dayOfYear(new Date())
//322
```

:::

## 大写字符串

::: details 查看代码

```js
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
//使用
//capitalize('heiheiheiyohei')
```

:::

## [create-vue](https://www.npmjs.com/package/create-vue/v/3.0.0-beta.6)

```bash
npm init vue@next
```

## 给所有的 div 一个 outline 样式

::: details 查看代码

```js
[].forEach.call($$("div"), (a) => {
  a.style.outline =
    "5px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
});
```

:::

## 屏幕录制

::: details 查看代码

- index.js

```js
let btn = document.querySelector(".record-btn");
btn.addEventListener("click", async function () {
  let stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });
  const mine = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
    ? "video/webm;codecs=vp9"
    : "video/webm";
  let mediaRecoder = new MediaRecorder(stream, {
    mimeType: mine,
  });
  let chunks = [];
  mediaRecoder.addEventListener("dataavailable", function (e) {
    chunks.push(e.data);
  });
  mediaRecoder.addEventListener("stop", function () {
    let blob = new Blob(chunks, {
      type: chunks[0].type,
    });
    let url = URL.createObjectURL(blob);
    let video = document.querySelector(".video");
    video.src = url;
    let a = document.createElement("a");
    a.href = url;
    a.download = "video.webm";
    a.click();
  });
  mediaRecoder.start();
});
```

html

```html
<video width="600px" class="video" controls="controls"></video>
<button class="record-btn">开始录制</button>
```

:::

<ClientOnly>
<screen-record></screen-record>
</ClientOnly>

## 代理页面解决跨域(子页面 iframe 访问父页面)

::: details 查看详情

##### 父页面 server1/index.html

@[code{1-23} js:no-line-numbers](./static/server1/index.html)

##### 子页面 server2/index.html

@[code{1-31} js:no-line-numbers](./static/server2/index.html)

##### 代理页面 server1/iframe.html

@[code{1-18} js:no-line-numbers](./static/server1/iframe.html)
:::
::: details 记录
在公司二次开发 ueditor 的时候遇到了跨域，
情况是当时想把 ueditor 的静态文件传到 cdn 文件目录下
，项目访问直接在 index.html 或者 webpack 里配置引用，
富文本可以正常显示，但是涉及到弹框的 js 文件会报跨域的错误，
问题出在了 cdn 上的弹框内部 js 访问或操作当前页面中 DOM 导致的跨域，
预想的解决方法：配置 config 中的 iframeUrlMap，同是把 dialog 的文件拷贝在到线上目录下
:::

## v8

::: tip 如何执行 JavaScript
将源码 （进行词法分析和语法分析）转为 AST（抽象语法树），然后解释器将其转为字节码， 如果该字节码-是热点代码，则编译器直接将其转为机器码（并把机器码保存下来，以备下次使用）， 若不是热点代码，则由解释器 解释执行字节码 ----------JIT
:::
::: tip JIT 与 AOT
JIT （Just-In-Time）--即时编译 ，边编译边运行
AOT （ahead of time）运行前进行编译
:::

## 局域网分享代码方案

<CodeGroup>
  <CodeGroupItem title="安装">

```bash:no-line-numbers
npm install -g keppler
```

  </CodeGroupItem>

  <CodeGroupItem title="使用" active>

```bash:no-line-numbers
keppler "My awesome project"
```

  </CodeGroupItem>
</CodeGroup>

## 生成器示例

```js:no-line-numbers
function *foo(){
    var x= yield 2;
    z++;
    var y = yield(x*z);
    console.log(x,y,z);
}

var z=1;
var it1 = foo();
var it2 = foo();

var val1 =it1.next().value;
console.log(val1)
// 2
var val2 = it2.next().value;
console.log(val2)
// 2
var val3 = it1.next(val2*10).value;
console.log(val3);
// x=20,z=2;40
var val4 = it2.next(val3*5).value;
// 600
console.log(val4);


it1.next(val4/2).value;
// 20 300 3
it2.next(val4/2).value;
// 200 300 3
```

## vue slot 常用

::: details 查看

- 父组件

```vue
<template v-slot:zt_add></template>
```

- 子组件

```vue
<slot name="zt_add">
</slot>
```

:::

## 事件冒泡与事件捕获

::: details 代码详情
@[code{1-152} vue{39-80}:no-line-numbers](./components/base/event_bubble_capture.vue)
:::

## vue3自定义指令
::: details 查看详情
@[code{1-104} vue{}:no-line-numbers](./components/advanced/dialog_drag.vue)
:::
- 上述事件...和自定义指令写在下面的组件中
<ClientOnly>
<event-bubble-capture></event-bubble-capture>
</ClientOnly>


## 数组对象平铺后遍历处理属性结构的数据(自理的树状对象的垃圾处理方法)
::: details 查看详情
@[code{1-60} js{}:no-line-numbers](./components/base/tree.js)
:::

## JS type coercion
[你真的了解‘==’么](https://eqeq.js.org/#zh)
```js
1=='1'
// true
1==='1'
// false
if(1){
  console.log(5)
}
// 5
if(0){
  console.log(5)
}
// 
-0 === +0
// true
Object.is(-0,+0)
// false
NaN === NaN
// false
object.is(NaN,NaN)
// true

```

## 网页全屏/退出全屏
```js
const doc = document;
const html = doc.documentElement;

const enter =
  html.requestFullscreen ||
  html.webkitRequestFullScreen ||
  html.mozRequestFullScreen ||
  html.msRequestFullscreen;

const exit =
  doc.exitFullscreen ||
  doc.webkitCancelFullScreen ||
  doc.mozCancelFullScreen ||
  doc.msExitFullscreen;

const enterFullScreen = () => {
  enter && enter.call(html);
};

const exitFullScreen = () => {
  exit && exit.call(doc);
};

export { enterFullScreen, exitFullScreen };

```

<ClientOnly>
<full-screen></full-screen>
</ClientOnly>