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
const extraModule = {
    OrbitControls: OrbitControls
}
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const container = ref(null)
nextTick(() => {
    if (isClient) {
        let funcName = route.meta.method||"initThree"
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