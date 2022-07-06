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

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const container = ref(null)
nextTick(() => {
    if (isClient) {
        let funcName = route.meta.method
        threeFunc[funcName](THREE, container)

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