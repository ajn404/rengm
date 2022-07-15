<template lang="pug">
.demo2-2
    - for (var i = 1; i <= 25; i++)
        .item
</template>

<style lang="scss" scoped>
.demo2-2 {
  margin: 1em;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 1fr;
  grid-template-rows: 20% 20% 20% 20% 1fr;

  width: 100%;
  height: 25vw;
  background: #000;
  .item {
    background: #fff;
    border: 1px solid #e0e0e0;
  }

  $n: 25;
  @while $n > 0 {
    .item:nth-child(#{$n}) {
      background-color: rgba(10 * $n, 255 - 10 * $n, 255, $n * 0.02);
    }
    $n: $n - 1;
  }
}
</style>
