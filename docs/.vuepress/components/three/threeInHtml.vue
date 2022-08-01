<template>
<div class="componentContainer">


    <div class="img-box">
        <div class="box-item">
            <img class="img" src="/rengm/images/background.jpg" />
            <p>诺埃尔</p>
        </div>

     <div class="box-item">
            <img class="img" src="/rengm/images/background.jpg" />
            <p>诺埃尔</p>
        </div>
         <div class="box-item">
            <img class="img" src="/rengm/images/background.jpg" />
            <p>诺埃尔</p>
        </div>
         <div class="box-item">
            <img class="img" src="/rengm/images/background.jpg" />
            <p>诺埃尔</p>
        </div>
         <div class="box-item">
            <img class="img" src="/rengm/images/background.jpg" />
            <p>诺埃尔</p>
        </div>
         <div class="box-item">
            <img class="img" src="/rengm/images/background.jpg" />
            <p>诺埃尔</p>
        </div>
         <div class="box-item">
            <img class="img" src="/rengm/images/background.jpg" />
            <p>诺埃尔</p>
        </div>
         <div class="box-item">
            <img class="img" src="/rengm/images/background.jpg" />
            <p>诺埃尔</p>
        </div>
        
    </div>
    
    <div class="threeContainer" ref = "container"></div>
</div>
</template>

<script setup lang="ts">

import { ref, nextTick, watchEffect, toRefs,watch } from "vue"
import { isClient } from "@vueuse/core";
import * as threeFunc from './ts/threeInHtml'

import { useRoute } from 'vue-router'
const route = useRoute()
const container = ref(null)

watch(
    ()=>route.meta,
    ()=>{
            if (isClient&&!container.value.innerHTML) {
              let funcName:string= route.meta.method.toString() || "method";
              threeFunc[funcName]( container );
              }
  })

</script>

<style lang="scss">


.componentContainer{
    position: absolute;
    left: 0;
    top: 0;
}

.threeContainer {
    position:fixed;
    left: 0;
    top:0;
    z-index: -1;
    height: 100vh;
    width: 100vw;
}

.img-box{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15vh;
    flex-wrap: wrap;
    .box-item{

        text-align: center;
        font-size: 2em;
        font-weight: bold;
    }


    .box-item:nth-child(3n){
        .img{
            transform: rotate(90deg);
        }
        text-align: right;
    }

}


.img{
    width: 40vw;
}
</style>