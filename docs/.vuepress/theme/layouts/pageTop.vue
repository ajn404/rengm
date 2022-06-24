<template>
  <div class="pageTop">
    <div id="pageTop"></div>
  </div>
</template>
<script lang="ts" setup>
import "element-plus/dist/index.css";
import { ref } from "vue";
import { ElMessage } from "element-plus";

//vue中使用P5的方式
import { isClient } from '@vueuse/core'
if(isClient)
import("p5/lib/p5.js").then((res) => {
  try {
    const p5 = res.default;
    if (p5 && typeof p5 === "function") {
      new p5(main, "pageTop");
    }
  } catch (e) {
    ElMessage.warning(e);
  }
});


const main = (_p5) => {
  let p5 = _p5;



  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, 20);
    p5.background(0)
  };
};
</script>
<style scoped lang="scss">
#pageTop {
  max-width: 100%;
  max-height: 80%;

  overflow: hidden;
  display: flex;
  place-items: center;
  flex-direction: column;
}
</style>
