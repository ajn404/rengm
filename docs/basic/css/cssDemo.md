---
routeMeta : { 
customLayout : false
}
---

## demo-1 flex 布局

flexbox 是 一种一维布局，只能处理一行或者一列。

<ClientOnly>
<css-demo cssPractice="demo1-1"></css-demo>
</ClientOnly>

## 写基础的好生无趣，放飞了

::: details scss核心代码
@[code scss{18-41}:no-line-numbers](../../.vuepress/components/basic/template/cssDemos/Demo2_1.vue))
:::

<ClientOnly>
<css-demo cssPractice="demo2-1"></css-demo>
</ClientOnly>

## grid布局 瞎写
<ClientOnly>
<css-demo cssPractice="demo2-2"></css-demo>
</ClientOnly>


## css 渐变
渐变色彩实际上不是颜色（color），而是图像（image）对象，通常用来作为元素背景。


<ClientOnly>
<css-demo cssPractice="demo3-1"></css-demo>
</ClientOnly>


::: tip linear-gradient语法
<pre>linear-gradient( 
  [ &lt;angle&gt; | to &lt;side-or-corner&gt; ,]? &lt;color-stop&gt; [, &lt;color-stop&gt;]+ )
  \---------------------------------/ \----------------------------/
              渐变轴线的定义                 颜色停止点的定义  

<code>&lt;side-or-corner&gt;</code> = [left | right] || [top | bottom]
<code>&lt;color-stop&gt;</code> = &lt;color&gt; [ &lt;percentage&gt; | &lt;length&gt; ]?
</pre>
:::

::: details 图二
@[code vue:no-line-numbers](../../.vuepress/components/basic/template/cssDemos/Demo3_1.vue))
:::


## 透明边框
<ClientOnly>
<css-demo cssPractice="demo3-2"></css-demo>
</ClientOnly>
