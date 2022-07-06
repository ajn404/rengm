<template lang="pug">
.initThreeContainer(
    ref="container"
)

</template>

<script setup lang="ts">

import {  ref,nextTick,watchEffect,toRefs} from "vue";
import {isClient} from '@vueuse/core'
import * as threeFunc from './ts/threeFuncs.ts'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const container = ref (null)
nextTick(()=>{
    if(isClient)
    // import('https://unpkg.com/three@0.108.0/build/three.js').then(()=>{
        threeFunc.initThree(THREE,container)
    // }
        
    // )
})

</script>