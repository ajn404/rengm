<template lang="pug">
.threeContainer(
    ref="container"
)

</template>

<script setup lang="ts">

import { ref, nextTick, watchEffect, toRefs } from "vue";
import { isClient } from '@vueuse/core'
import * as threeFunc from './ts/threeFuncs.ts'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

const extraModule = {
    OrbitControls: OrbitControls,
    TWEEN:TWEEN,
    TrackballControls:TrackballControls,
    CSS3DRenderer:CSS3DRenderer,
    CSS3DSprite:CSS3DSprite
}
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const container = ref(null)
nextTick(() => {
    if (isClient) {
        let funcName = route.meta.method || "initThree"
        threeFunc[funcName](THREE, container, extraModule)
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