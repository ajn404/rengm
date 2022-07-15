<template lang="pug">
.demo3-1 
    p linear-gradient(to left ,red,green)
center 图一
.degbox
    - for (var i = 1; i <= 36; i++)
            .deg 
center 图二
.moreColor
center 图三 添加更多的颜色
.moreColor.percent background: linear-gradient(45deg, #000000 0 ,#111111 10%,#222222 20%,#333333 30%,#444444 40%,#555555 50%,#aaaaaa 100%);
.moreColor.same background: linear-gradient(45deg, #000000 0 ,#111111 10%,#aaaaaa 100%);
center 上面两个图不一样

</template>
<style lang="scss" scoped>
.demo3-1,.moreColor{
    width:100%;
    height:300px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 2em;
    font-weight: bolder;
    background:linear-gradient(to left ,red,green);
}
.moreColor{
    background: linear-gradient(90deg,red,blue,green,yellow,pink,gray,black,white,#ff00ff,#665544,#123456);
    color: #fff;
        opacity: .5;
    &.percent{
        background: linear-gradient(
            45deg, #000000 0 ,#111111 10%,#222222 20%,#333333 30%,#444444 40%,#555555 50%,#aaaaaa 100%
        );
    }

    &.same{
        background: linear-gradient(
            45deg, #000000 0 ,#111111 10%,#aaaaaa 100%
        );
    }
}

.degbox{
    display: flex;
    flex-wrap: wrap;
}

.deg{
    height: 6em;
    width: 16.6%;
}

$n: 36;
  @while $n > 0 {
    .deg:nth-child(#{$n}) {
      background: linear-gradient( ($n * 10deg),rgba(10 * $n, 255 - 10 * $n, random(255), $n * 0.02),#ff99ff);
    }
    $n: $n - 1;
  }

</style>
