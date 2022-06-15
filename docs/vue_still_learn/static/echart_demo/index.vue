<template>
  <div class="echart-damo">
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "echartDemo",
  mounted() {
    this.$nextTick(function () {
      this.myChart = echarts.init(document.getElementById("main"));
      this.initChart();
    //   这里为啥报错，百思不解
      // window.addEventListener("resize", () => {
      //   setTimeout(() => {
      //     this.myChart.resize();
      //   }, 500);
      // });
    });
  },
  data() {
    return {
      myChart: "",
      option: {
        title: {
          text: "ECharts 示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  watch: {
    option: {
      handler: function () {
        this.initChart();
      },
    },
  },
  methods: {
    initChart() {
      // 基于准备好的dom，初始化echarts实例
      // 绘制图表
      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style>
#main {
  width: 100%;
  height: 200px;
}
</style>