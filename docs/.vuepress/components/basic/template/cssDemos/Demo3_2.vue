<template lang="pug">
.opacityBorder 
    .example1 background-clip: padding-box;
    .example2
    .example3 background-clip: text;-webkit-background-clip: text;color: transparent;
    el-icon.bottom <Bottom />
    center css实现字体颜色的渐变
</template>


<script lang="ts" setup>
import {Bottom} from '@element-plus/icons-vue';
</script>

<style lang="scss" scoped>
.opacityBorder {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  div {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #ffffff;
    background-position: center;
    background-size: 100%;
  }

  .example1 {
    border: 10px solid hsla(0, 0%, 100%, 0.5);
    background-clip: padding-box;
    -webkit-background-clip: padding-box;
  }

  .example2 {
    border: medium dashed hsla(5, 16%, 99%, 0.5);
    background-clip: padding-box;
    -webkit-background-clip: padding-box;
  }

  .bottom{
    transform: rotate(180deg);
    font-size: 2em;
    font-weight: bold;
  }

  .example3{
    
    color: transparent;
    background: linear-gradient(to left , red ,blue);
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 2em;
  }
}
</style>
