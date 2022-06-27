<template>
    <div class="box">
        <el-cascader
                v-model="selectOption"
                :options="cascaderOptions"
                @change="handelSelectOptionChange"
                class="cascader"
        />
        <div id="dynamic-echarts"></div>
        <el-button @click="stop">停止</el-button>
        <el-button @click="start">重新开始</el-button>
    </div>
</template>

<script lang="ts" setup>
    import { ref,onUnmounted } from "vue";
    import * as echarts from "echarts";
    import { nextTick } from "vue";
    import * as echartsAllOptions from "../common/echartOptions";

    const selectOptions = {};
    const selectOption = ref("");
    const cascaderOptions = [
        {
            value: "dynamicBarChart",
            label: "动态柱状图",
        }
    ];
    let myChart = null;


    for (let echartsOption in echartsAllOptions) {
        selectOptions[`${echartsOption}`] = echartsAllOptions[`${echartsOption}`];
    }
    //@ts-ignore
    selectOption.value = cascaderOptions[0].value;


    let dynamicBarChartData = [];

    let time1,time2;
    //动态柱状图
    const dynamicBarChartFunc=()=>{
        for (let i = 0; i < 5; ++i) {
            dynamicBarChartData.push(Math.round(Math.random() * 200));
        }
        const run =()=>{
            for (let i = 0; i < dynamicBarChartData.length; ++i) {
                if (Math.random() > 0.9) {
                    dynamicBarChartData[i] += Math.round(Math.random() * 2000);
                } else {
                    dynamicBarChartData[i] += Math.round(Math.random() * 200);
                }
            }
            myChart.setOption({
                series: [
                    {
                        type: 'bar',
                        data:dynamicBarChartData
                    }
                ]
            });
        }
        time1 = setTimeout(function () {
            run();
        }, 0);
        time2 = setInterval(function () {
            run();
        }, 1000);

    }

    const start=()=>{
        dynamicBarChartData = []
        handelSelectOptionChange(["dynamicBarChart"])
    }

    const stop =()=>{
        clearTimeout(time1)
        time1=null;
        clearInterval(time2)
        time2=null;
    }
    onUnmounted(()=>{
       stop()
    })



    const handelSelectOptionChange = (val) => {
        const targetName = val[val.length - 1];
        const target = selectOptions[targetName];

        if (myChart) {
            myChart.dispose();
        }
        // 基于准备好的dom，初始化echarts实例
        myChart = echarts.init(document.getElementById("dynamic-echarts"));
        // 绘制图表
        myChart.setOption(target);
        if(targetName=="dynamicBarChart"){
            dynamicBarChartFunc()
        }

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
    #dynamic-echarts {
        width: 100%;
        height: 500px;
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>