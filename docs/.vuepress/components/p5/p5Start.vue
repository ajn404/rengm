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
import {ref, getCurrentInstance, onUnmounted, nextTick} from "vue";
import { ElMessage } from "element-plus";
import { isClient } from "@vueuse/core";

//vue中使用P5的方式
import * as p5MainFunc from "../../common/p5Main"
const funcs ={}
for(let p5MainFuncItem in p5MainFunc){
  funcs[`${p5MainFuncItem}`] = p5MainFunc[`${p5MainFuncItem}`]
}
const selectMethhod = ref([]);

let defaultMethod = "defaultFunc"
const methods = [
  {label:"default",value:"defaultFunc"},
  {
    label: "场景1（偏交互2D和生成艺术）",
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
    label: "场景2（偏游戏）",
    children: [
      {
        label: "移动拼图",
        value: "slidePuzzle",
      },
    ],
  },
  {
    label:"场景3（webgl）",
    children: [
      {
        label: "geometries",
        value: "geometries"
      },
      {
        label:"sinCos3D",
        value:"sinCos3D"
      },
      {label:"震级",value:'earthQuake'}
    ]
  },
  {
    label:"非演示场景(熟悉api)",
    children: [
      {
        label:"3d box",
        value:"boxRef"
      },
      {
        label:"3d box 旋转",
        value:"boxRef1"
      }
    ]
  },
  {
    label:"场景4(应用)",
    children:[
      {
        label:'有丝分裂',
        value:'mitosis'
      }
    ]
  }
];
const clearFunc = () => {
  document.querySelector("#p5-start").innerHTML = "";
};
let p5;
if(isClient)
nextTick(()=>{
   p5 = window.p5;
  //本地开发，或者就这样？
  nextTick(()=>{
    new p5(p5MainFunc[defaultMethod], "p5-start");
    window.p5DrawLoop = defaultMethod
  })
})
onUnmounted(()=>{
  window.p5DrawLoop = ""
})
const handleChange = (arr) => {
      try{
        if (p5 && typeof p5 === "function") {
          window.p5DrawLoop = arr[arr.length - 1]
          //清除之前的
          clearFunc();
          //新建计算和canvas
           new p5(funcs[arr[arr.length - 1]]||p5MainFunc.defaultFunc, "p5-start");

      
        }
      }catch (e){
        console.log(e)
        ElMessage.warning('可能cdn的p5还没有加载好').then(
          ()=>{
            ElMessage.warning('可能没写这个函数')
          }
        )

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
