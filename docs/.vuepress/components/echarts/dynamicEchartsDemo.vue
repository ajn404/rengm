<template>
    <div class="box">
        <el-cascader
                v-model="selectOption"
                :options="cascaderOptions"
                @change="handelSelectOptionChange"
                class="cascader"
        />
        <el-select
                v-model="selectType"
                placeholder="选择图表类型"
                size="large"
                @change="start"
        >
            <el-option
                    v-for="item in selectTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
            />
        </el-select>
        <div id="dynamic-echarts"></div>

        <el-button @click="stop">停止</el-button>
        <el-button @click="start">重新开始</el-button>
    </div>
</template>

<script lang="ts" setup>
    import { ref,onUnmounted } from "vue";
    import * as echarts from "echarts";
    import { nextTick } from "vue";
    import * as echartsAllOptions from "../../common/echartOptions";

    const selectOptions = {};
    const selectOption = ref("");
    const cascaderOptions = [
        {
            value: "dynamicBarChart",
            label: "动态echarts图表",
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
                        realtimeSort: true,
                        name: '某公司职场',
                        type: selectType.value,
                        data:dynamicBarChartData,
                        step:true,
                        colorBy:'data',
                        color: [
                            {
                                type: 'linear',
                                colorStops: [{
                                    offset: 0, color: '#4b5a31' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#505860' // 100% 处的颜色
                                }]
                            },
                            {
                                type: 'linear',
                                colorStops: [{
                                    offset: 0, color: '#505860' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#556d69' // 100% 处的颜色
                                }]
                            },
                            {
                                type: 'linear',
                                colorStops: [{
                                    offset: 0, color: '#556d69' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#59c0bc' // 100% 处的颜色
                                }]
                            },
                            {
                                type: 'linear',
                                colorStops: [{
                                    offset: 0, color: '#59c0bc' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#e0e0d8' // 100% 处的颜色
                                }]
                            },
                            {
                                type: 'linear',
                                colorStops: [{
                                    offset: 0, color: '#e0e0d8' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#4b5a31' // 100% 处的颜色
                                }]
                            },
                        ],
                        label: {
                            show: true,
                            position: 'right',
                            valueAnimation: true
                        }
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

    const selectType = ref('bar')
    const selectTypeOptions =[
        {value:'line',label:'折线'},
        {value:'bar',label:'柱状'},
        {value:'pie',label:'饼图'},
        {value:'scatter',label:'点图'},
    ]


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
        height: 50vh;
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>