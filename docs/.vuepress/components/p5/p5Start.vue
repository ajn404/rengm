<template>
  <div class="p5-start">
    <el-cascader-panel
      v-model="selectMethhod"
      :options="methods"
      @change="handleChange"
      class="cascader"
    >
      <template #default="{ node, data }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf">({{ data.children.length }})</span>
      </template>
    </el-cascader-panel>
    <div id="p5-start"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, getCurrentInstance, onUnmounted, nextTick, readonly } from "vue";
import { ElMessage } from "element-plus";
import { isClient } from "@vueuse/core";

//vue中使用P5的方式
import * as p5MainFunc from "./ts/p5Main";
const funcs = {};
for (let p5MainFuncItem in p5MainFunc) {
  funcs[`${p5MainFuncItem}`] = p5MainFunc[`${p5MainFuncItem}`];
}
const selectMethhod = ref([]);

let defaultMethod = "defaultFunc";
import { allMethods } from "./ts/p5Start";

const methods = readonly(allMethods);
const clearFunc = () => {
  document.querySelector("#p5-start").innerHTML = "";
};
let p5;
if (isClient)
  nextTick(() => {
    clearFunc();
    p5 = window['p5'];
    //本地开发，或者就这样？
    nextTick(() => {


      // debugger;
      defaultMethod = "rayCast";

      new p5(p5MainFunc[defaultMethod], "p5-start");
      window["p5DrawLoop"] = defaultMethod;


    });
  });
onUnmounted(() => {
  window["p5DrawLoop"] = "";
});
const handleChange = (arr:any) => {
  try {
    if (p5 && typeof p5 === "function") {
      let funcName = arr[arr.length - 1];
      window["p5DrawLoop"] = funcName;
      //清除之前的
      clearFunc();
      //新建计算和canvas
      if (["quickSort", "bubbleSort","rayCast"].includes(funcName)) {
        document.querySelector("#p5-start").requestFullscreen();
      }
      new p5(funcs[funcName] || p5MainFunc.defaultFunc, "p5-start");
    }
  } catch (e) {
    console.log(e);
    ElMessage.warning("可能cdn的p5还没有加载好");
  }
};
</script>
<style scoped lang="scss">
#p5-start {
  overflow: hidden;
  display: flex;
  place-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.p5-start {
  display: flex;
  gap: 50px;
  flex-direction: column;
}
  :deep(.cascader .el-cascader-menu__wrap ){
    height: 40vh !important;
  }
  :deep(.cascader .el-cascader-menu){
    color: var(--c-text)!important;
  }
</style>
