## 暂时 p5 好像不能直接导入，想想办法

## 看源码，引入 p5.js 后，p5 挂载到 window 上了

<CodeGroup>

<CodeGroupItem title="demo.vue" active>

@[code js{1-143}:no-line-numbers](../.vuepress/components/demo.vue))

  </CodeGroupItem>

  <CodeGroupItem title="p5Start.vue">

@[code js{1-143}:no-line-numbers](../.vuepress/components/p5Start.vue))

  </CodeGroupItem>

  <CodeGroupItem title="p5Main.ts">

@[code js{1-409}:no-line-numbers](../.vuepress/common/p5Main.ts))

  </CodeGroupItem>

</CodeGroup>


## p5-start切换canvas，但之前的drawing任务好像一直再执行

## window挂载能解决上面的问题，但是解决的不是很好，同样可以用local Storage
