<template>
  <div class="basic-3d">
    <div ref="box"></div>
  </div>
</template>
<script lang="ts" setup>
import "element-plus/dist/index.css";
import {
    ref, 
    getCurrentInstance, 
    onUnmounted, 
    nextTick,
    toRefs,
    defineProps} from "vue";
import { ElMessage } from "element-plus";
import { isClient } from "@vueuse/core";
import * as cdn from "../common/cdnUrl"

//vue中使用P5的方式
import * as p5MainFunc from "../common/p5WebGlBasic"
const props = defineProps({
    renderType:String,
    renderFunc:String
})
const propsValue = toRefs(props)
const box = ref(null)




let defaultMethod ="defaultFunc"
if(p5MainFunc[propsValue.renderFunc.value])
defaultMethod = propsValue.renderFunc.value

const clearFunc = (p5) => {
  document.querySelector("#basic-3d").innerHTML = "";
};
let p5;

import {isElementNotInViewport} from '../common/utils.ts'
if(isClient)
import(cdn.p5Cdn).then(()=>{
  p5 = window.p5;
  //本地开发，或者就这样？
  nextTick(()=>{
    let target = box._value 
    target.id= propsValue.renderFunc.value
    window.p5DrawLoop = defaultMethod
    new p5(p5MainFunc[defaultMethod], target.id);

    window.addEventListener("scroll",()=>{
      
      if(isElementNotInViewport(target)){
        window.p5DrawLoop = defaultMethod
      }else{
        window.p5DrawLoop = ""
      }
      console.log(window.p5DrawLoop)
      
    })

  })
})
onUnmounted(()=>{
  window.p5DrawLoop = ""
})
</script>
<style scoped lang="scss">
.basic-3d {
  display: flex;
  gap: 30px;
  flex-direction: column;
  &>div{
max-width: 100%;
  max-height: 80%;

  overflow: hidden;
  display: flex;
  place-items: center;
  flex-direction: column;
  }
}
</style>
