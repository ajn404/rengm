<template>
  <div class="threeContainer" ref = "container"></div>

</template>

<script setup lang="ts">

import { ref, nextTick, watchEffect, toRefs,watch } from "vue"
import { isClient } from "@vueuse/core";
import * as threeFunc from './ts/shader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as  TWEEN  from '@tweenjs/tween.js'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
import { CSS3DRenderer, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

const extraModule = {
  OrbitControls: OrbitControls,
  TWEEN:TWEEN,
  TrackballControls:TrackballControls,
  CSS3DRenderer:CSS3DRenderer,
  CSS3DSprite:CSS3DSprite
}
import { useRoute } from 'vue-router'
const route = useRoute()
const container = ref(null)

watch(
    ()=>route.meta,
    ()=>{
      if (isClient&&!container.value.innerHTML) {
        let funcName = route.meta.method || "method";
        threeFunc[funcName]( container, extraModule);
      }
    })

</script>

<style lang="scss">
.threeContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>