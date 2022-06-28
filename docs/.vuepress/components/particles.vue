
<template>
    <div class="box">
        <canvas id="particles"></canvas>
    </div>
</template>
<script lang='ts' setup>
import { ref, nextTick } from "vue";
import * as canvasFunc from "../common/canvasFuncs.js"
const draw = () => {
    canvasFunc.particles()
}
nextTick(() => {
    draw()
})


</script>

<style lang="scss" scoped>
canvas {
    width: 100%;
    height: 100%;
    display: block;
}
</style>
