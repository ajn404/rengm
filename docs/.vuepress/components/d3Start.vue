<template>
  <div class="d3-start">
    <h3>d3示例</h3>
    <svg id="d3-start" width="600" height="500">
      <rect width="100" height="100" x="10" y="10" />
      <rect width="100" height="100" x="490" y="10" />
      <rect width="100" height="100" x="10" y="390" />
      <rect width="100" height="100" x="490" y="390" />
    </svg>
  </div>

</template>

<script setup>
import * as d3 from "d3";
import {nextTick} from "vue";

const data = [45,67,96,84,41];

const draw = () => {
  const svg =  d3.select('#d3-start');
  const rect = svg.select('rect')
  const rects = svg.selectAll('rect')
  console.log('rects',rects,rects.__proto__)
  // rect.datum(data)
  // rects.datum(data)
  rects.data(data)
}

nextTick(()=>{
  draw()
})

</script>

<style scoped>
.d3-start {
  width: 100%;
}

svg {
  background: lightgray;
  margin: 0 auto;
  display: block;
  transform-origin: center 0;
  transform: scale(.2);
}
</style>