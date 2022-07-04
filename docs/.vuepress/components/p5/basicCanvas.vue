
<template>
    <div class="box">
        <canvas id="basic-canvas"></canvas>
        <el-button @click="changeLoop">{{ope}}</el-button>
    </div>
</template>
<script lang='ts' setup>
import { ref, nextTick ,onUnmounted,toRef } from "vue";
import * as canvasFunc from "./ts/canvasFuncs.js"


const draw = () => {
     window.p5DrawLoop = "particles"
    canvasFunc.particles()
}
nextTick(() => {
    draw()
})

onUnmounted(()=>{
    window.p5DrawLoop  = ""
})

const ope = ref("停止")

const changeLoop = ()=>{
    window.p5DrawLoop = window.p5DrawLoop?"":"particles"
    ope.value = p5DrawLoop?"停止":"重启"
}


</script>

<style lang="scss" scoped>
.box{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
}
canvas {
    width: 100%;
    height: 100%;
    display: block;
}
</style>
