[[toc]]
## style
### vertical-align默认baseline
::: details 显示全部
```html
 <div class="box">
        <div class="item">和所有以梦为马的诗人一样<br></div>
        <div class="item">和所有以梦为马的诗人一样<br>和所有以梦为马的诗人一样<br></div>
        <div class="item">和所有以梦为马的诗人一样<br>和所有以梦为马的诗人一样<br></div>
        <div class="item">和所有以梦为马的诗人一样<br>和所有以梦为马的诗人一样<br></div>
        <div class="item">和所有以梦为马的诗人一样<br>和所有以梦为马的诗人一样<br>和所有以梦为马的诗人一样<br></div>
        大家能看到
    </div>
```
```css
.box{
    height: 100px;
}
.item{
    /* vertical-align: top; */
    vertical-align: middle;
    display: inline-block;
}
```
:::

## css3
### transform rotate translate
::: details 查看代码
- polariod.vue
```vue
<template>
<div class="polariod">
  <section class="polaroid-gallery">
    <h1 class="title">polariod card </h1>
    <figure class="polaroid-card">
      <img
          src="https://picsum.photos/200/200?random=1"
          width="200px"
          height="200px"
          alt="swan">
      <figcaption
          class="polaroid-card-caption">
        swan</figcaption>
    </figure>

    <figure class="polaroid-card">
      <img
          src="https://picsum.photos/200/200?random=2"
          width="200px"
          height="200px"
          alt="swan">
      <figcaption
          class="polaroid-card-caption">
        swan</figcaption>
    </figure>

    <figure class="polaroid-card">
      <img
          src="https://picsum.photos/200/200/?random=3"
          width="200px"
          height="200px"
          alt="swan">
      <figcaption
          class="polaroid-card-caption">
        swan</figcaption>
    </figure>

    <figure class="polaroid-card">
      <img
          src="https://picsum.photos/200/200?random=4"
          width="200px"
          height="200px"
          alt="swan">
      <figcaption
          class="polaroid-card-caption">
        swan</figcaption>
    </figure>

  </section>
</div>
</template>
<style scoped>

.polariod{
  background-image: url('https://picsum.photos/id/119/1980/1080');
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  padding: 50px 0;
  /*min-height: 100vh;*/
}

.polaroid-gallery{
  text-align: center;
}


.title{
  font-size: 2em;
  font-weight: 400;
  color: #333;


}

.polaroid-card{
  display: inline-block;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 4px 4px 8px -4px  rgba(0, 0, 0, .8);
}

.polaroid-card:hover{
  transform: scale(1.3) !important;
}




.polaroid-card-caption{
  text-align: center;
  font-family: "Maker Felt",sans-serif;
  font-size: 14px;
  margin-top: 8px;
  letter-spacing: 2px;

}

.polaroid-card:nth-of-type(even){
  transform:rotate(-8deg)
}
.polaroid-card:nth-of-type(even)::before{
  content: '';
  display: block;
  background-color:rgba(222, 220, 200, .66) ;
  width: 80px;
  height: 25px;
  transform:rotate(-25deg) translate(-30px,-25px);
}


.polaroid-card:nth-of-type(odd){
  transform:rotate(9deg)
}

.polaroid-card:nth-of-type(odd)::before{
  content: '';
  display: block;
  background-color:rgba(222, 220, 200, .66) ;
  width: 80px;
  height: 25px;
  transform:translate(140px,-18px) rotate(25deg) ;
}

</style>
```
:::
<ClientOnly>
<polariod></polariod>
</ClientOnly>

## transition
### [transition-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)
::: details 查看详情
@[code{1-95} vue{}:no-line-numbers](../.vuepress/components/collections/css3/transition_timing_function.vue)
:::
<ClientOnly>
<transition-timing-function></transition-timing-function>
</ClientOnly>  

## setup cubic_bezier 
::: tip 提示
初次使用setup的template,很nice
:::
::: details 查看详情
@[code{1-61} vue{}:no-line-numbers](../.vuepress/components/collections/css3/cubic_bezier.vue)
:::
<ClientOnly>
<cubic-bezier></cubic-bezier>
</ClientOnly>

## 多列布局练习

<ClientOnly>
<multi-column-index></multi-column-index>
</ClientOnly>