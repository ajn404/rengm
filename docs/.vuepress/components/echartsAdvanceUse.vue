<template>
  <div class="box">
    <el-cascader
      v-model="selectOption"
      :options="cascaderOptions"
      @change="handelSelectOptionChange"
      class="cascader"
    />
    <div id="echart-advance-use"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import * as echarts from "echarts";

import { nextTick } from "vue";

import { defaultoption, simpleLineOption } from "../common/echartOptions";
import * as echartsAllOptions from "../common/echartOptions";

const selectOptions = {};
const optionName = [];

for (let echartsOption in echartsAllOptions) {
  selectOptions[`${echartsOption}`] = echartsAllOptions[`${echartsOption}`];
  optionName.push(echartsOption);
}

const selectOption = ref("");

//@ts-ignore
selectOption.value = optionName[0];

const cascaderOptions = [
  {
    value: "defaultoption",
    label: "默认",
  },
  {
    label: "简单示例",
    children: [
      {
        value: "simpleLineOption",
        label: "简单折线图",
      },
    ],
  },
];

let myChart = null;

const handelSelectOptionChange = (val) => {
  const targetName = val[val.length - 1];
  const target = selectOptions[targetName];

  if (myChart) {
    myChart.dispose();
  }

  // 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(document.getElementById("echart-advance-use"));

  // 绘制图表
  myChart.setOption(target);

  if (window && typeof window !== "undefined")
    window.onresize = () => {
      myChart.resize();
    };
};

nextTick(() => {
  handelSelectOptionChange([selectOption.value]);
});
</script>

<style scoped>
.box{
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
#echart-advance-use {
  width: 100%;
  height: 500px;
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>