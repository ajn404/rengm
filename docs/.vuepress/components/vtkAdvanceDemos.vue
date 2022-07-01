<template>
  <div class="vtk-use">
    <el-cascader
      v-model="selectMethhod"
      :options="methods"
      @change="handleChange"
      class="cascader"
    />
    <div id="vtk-use"></div>
  </div>
</template>
<script lang="ts" setup>
import "element-plus/dist/index.css";
import {ref, getCurrentInstance, onUnmounted, nextTick} from "vue";
import { ElMessage } from "element-plus";
import { isClient } from "@vueuse/core";

//vue中使用P5的方式
import * as vtkDemo from "../common/vtkDemo"
const funcs ={}
for(let vtkDemoItem in vtkDemo){
  funcs[`${vtkDemoItem}`] = vtkDemo[`${vtkDemoItem}`]
}
const selectMethhod = ref([]);

let defaultMethod = "defaultFunc"
const methods = [
  {label:"default",value:"defaultFunc"},
];
const clearFunc = () => {
  document.querySelector("#vtk-use").innerHTML = "";
};
let p5;
if(isClient)
nextTick(()=>{
  //本地开发，或者就这样？
  nextTick(()=>{
    vtkDemo[defaultMethod]()
  })
})
onUnmounted(()=>{
  window.p5DrawLoop = ""
})
const handleChange = (arr) => {
      try{
        if (vtk) {
         funcs[arr[arr.length - 1]]()
        }
      }catch (e){
        console.log(e)
        ElMessage.warning('可能cdn的vtk还没有加载好').then(
          ()=>{
            ElMessage.warning('可能没写这个函数')
          }
        )

      }
};

</script>
<style scoped lang="scss">
#vtk-use {
  max-width: 100%;
  max-height: 80%;

  overflow: hidden;
  display: flex;
  place-items: center;
  flex-direction: column;
}
.vtk-use {
  display: flex;
  gap: 30px;
  flex-direction: column;
}
</style>
