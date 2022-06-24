<template>
  <div class="p5-start">
    <el-cascader
      v-model="selectMethhod"
      :options="methods"
      @change="handleChange"
      class="cascader"
    />
    <div id="p5-start"></div>
  </div>
</template>
<script lang="ts" setup>
import "element-plus/dist/index.css";
import { ref , getCurrentInstance ,onUnmounted} from "vue";
import { ElMessage } from "element-plus";
import { isClient } from "@vueuse/core";

//vue中使用P5的方式
import {LSystem, main, angularMotion, slidePuzzle, polarCoordinates} from "../common/p5Main";
const funcs = {
  main: main,
  LSystem: LSystem,
  angularMotion: angularMotion,
  slidePuzzle: slidePuzzle,
  polarCoordinates:polarCoordinates
};
const selectMethhod = ref([]);
const methods = [
  {
    label: "场景1",
    children: [
      {
        value: "main",
        label: "main",
      },
      {
        value: "LSystem",
        label: "LSystem",
      },
      {
        value: "angularMotion",
        label: "angularMotion"
      },
      {
        value: 'polarCoordinates',
        label: 'polarCoordinates'
      }
    ],
  },
  {
    label: "场景2",
    children: [
      {
        label: "移动拼图",
        value: "slidePuzzle",
      },
    ],
  },
];

let {ctx:that} = getCurrentInstance()
// that.$forceUpdate()

const clearFunc = (p5) => {
  document.querySelector("#p5-start").innerHTML = "";
};


let p5;
if(isClient)
import('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js').then(()=>{
  p5 = window.p5;
})

onUnmounted(()=>{
  window.p5DrawLoop = ""
})

const handleChange = (arr) => {
      try{
        if (p5 && typeof p5 === "function") {
          window.p5DrawLoop = arr[arr.length - 1]
          //清除之前的
          clearFunc(p5);
          //新建计算和canvas
           new p5(funcs[arr[arr.length - 1]], "p5-start");
        }
      }catch (e){
        console.log(e)
        ElMessage.warning('可能cdn的p5还没有加载好')
      }

};
</script>
<style scoped lang="scss">
#p5-start {
  max-width: 100%;
  max-height: 80%;

  overflow: hidden;
  display: flex;
  place-items: center;
  flex-direction: column;
}
.p5-start {
  display: flex;
  gap: 30px;
  flex-direction: column;
}
</style>
