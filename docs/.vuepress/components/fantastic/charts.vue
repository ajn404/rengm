<template>
    <div class="chart-box">
        <h2>
            apexCharts
        </h2>

        <h3>
            docs demo
        </h3>
        <div ref="lineChart">
        </div>

        <h3>
            areaChart
        </h3>
        <div ref="areaChart"></div>

        <h3>烛蜡图(K线图)</h3>
        <h4>包含四个数据，即开盘价、最高价、最低价、收盘价，所有的k线都是围绕这四个数据展开，反映大势的状况和价格信息</h4>
        <div ref="candlestick">
        </div>

        <h3>heat map(热点图)</h3>
        <div ref="heatmap"></div>

        <h3>tree map(树形图)</h3>
        <h4>Treemap一词很好的表示了一个Tree状结构转化为平面空间矩形的状态，就像一张地图，指引我们发现探索数据背后的故事。</h4>
        <div ref="treemap"></div>

        <h3>radar(雷达图)</h3>
        <div ref="radar"></div>
        <luo-xuan></luo-xuan>
    </div>
</template>

<script>
    import ApexCharts from 'apexcharts'
    import LuoXuan from './luoXuan.vue'

    export default {
        name: "charts",
        mounted() {
            this.inintApexCharts();
            this.initAreaChart();
            //k线图
            this.initCandletick();
            //热点图
            this.initHeatMap();
            //树形图
            this.initTreeMap();
            this.initRadar();
            //为啥会报错嘞
            this.$nextTick(function(){
              setTimeout(function (){
                console.clear()
              },10000)
            })
        },
        methods: {
            //line chart
            inintApexCharts() {
                // console.log(ApexCharts);
                // console.log(this.$refs.chart)
                // console.log(document.getElementById('chart'))
                // console.log(this.$refs.chart ===document.getElementById('chart'))
                const options = {
                    chart: {
                        type: 'line'
                    },
                    series: [{
                        name: 'sales',
                        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                    }],
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    }
                };
                let chart = new ApexCharts(this.$refs.lineChart, options);
                chart.render()
            },
            //area chart
            initAreaChart() {
                const options = {
                    chart: {
                        type: 'area'
                    },
                    stroke: {
                        curve: 'stepline'
                    },
                    series: [{
                        name: 'sales',
                        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                    }],
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    }
                };
                let chart = new ApexCharts(this.$refs.areaChart, options);
                chart.render()
            },
            //k线图
            initCandletick() {
                const options = {
                    chart: {
                        type: 'candlestick'
                    },
                    series: [{
                        data: [
                            [1538856000000, [6593.34, 6600, 6582.63, 6600]],
                            [1538856900000, [6595.16, 6604.76, 6590.73, 6593.86]]
                        ]
                    }]
                };
                let chart = new ApexCharts(this.$refs.candlestick, options);
                chart.render()
            },
            //热点图
            initHeatMap() {
                const options = {
                    chart: {
                        type: 'heatmap'
                    },
                    series: [
                        {
                            name: "Series 1",
                            data: [{
                                x: 'W1',
                                y: 22
                            }, {
                                x: 'W2',
                                y: 29
                            }, {
                                x: 'W3',
                                y: 13
                            }, {
                                x: 'W4',
                                y: 32
                            }]
                        },
                        {
                            name: "Series 2",
                            data: [{
                                x: 'W1',
                                y: 43
                            }, {
                                x: 'W2',
                                y: 43
                            }, {
                                x: 'W3',
                                y: 43
                            }, {
                                x: 'W4',
                                y: 43
                            }]
                        }
                    ]
                };
                let chart = new ApexCharts(this.$refs.heatmap, options);
                chart.render()
            },
            //树形图
            initTreeMap() {
                const options = {
                    chart: {
                        height: 350,
                        type: "treemap",
                    },
                    series: [
                        {
                            data: [
                                {
                                    x: "javascript",
                                    y: 2000,
                                },
                                {
                                    x: "typescript",
                                    y: 500,
                                },
                                {
                                    x: "css",
                                    y: 800,
                                },
                                {
                                    x: "html",
                                    y: 500,
                                },
                                {
                                    x: "algorithm",
                                    y: 2000,
                                },
                                {
                                    x: "go",
                                    y: 600,
                                },
                                {
                                    x: "node",
                                    y: 800,
                                }
                            ],
                        },
                    ]
                };
                let chart = new ApexCharts(this.$refs.treemap, options);
                chart.render()
            },

            initRadar(){
                const option = {
                    chart:{
                        type:'radar'
                    },
                    series: [
                        {
                            name: "琴",
                            data: [45, 80,80, 50, 50, 10]
                        },
                        {
                            name: "可莉",
                            data: [80, 50, 0, 100, 80, 100]
                        },
                        {
                            name:'魈',
                            data: [100, 100, 100, 100, 80, 100]
                        }
                    ],
                    labels: ['输出', '辅助', '奶妈', '建模', '脾气', '培养难度']
                };
                let chart = new ApexCharts(this.$refs.radar,option);
                chart.render()
            }


        },
        components:{
            LuoXuan
        }
    }
</script>
<style scoped>

</style>
