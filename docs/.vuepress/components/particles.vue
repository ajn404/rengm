
<template>
    <div class="box">
        <canvas id="particles"></canvas>
    </div>
</template>
<script lang='ts' setup>
import { ref, nextTick ,onUnmounted, } from "vue";
import * as canvasFunc from "../common/canvasFuncs.js"
const draw = () => {
     window.p5DrawLoop = "particles"
    canvasFunc.particles()
}
nextTick(() => {
    draw()
})

onUnmounted(()=>{
    window.p5DrawLoop = ""
})


</script>

<style lang="scss" scoped>
canvas {
    width: 100%;
    height: 100%;
    display: block;
}
</style>
