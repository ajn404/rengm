<template>
<div id="main">

</div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';

import {nextTick } from 'vue'

nextTick(()=>{
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('main'));
// 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });

  if(window&&typeof window !== "undefined")
  window.onresize = ()=>{
    myChart.resize()
  }
})



</script>

<style scoped>
#main{
  width: 100%;
  height: 200px;
}
</style>