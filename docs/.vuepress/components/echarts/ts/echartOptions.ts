import * as echarts from 'echarts';
//抄抄代码

// Gradient Stacked Area Chart
export const areaChart = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
        text: '渐变堆积面积图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(128, 255, 165)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(1, 191, 236)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
        },
        {
            name: 'Line 2',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(0, 221, 255)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(77, 119, 255)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
        },
        {
            name: 'Line 3',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(55, 162, 255)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(116, 21, 219)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
        },
        {
            name: 'Line 4',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 0, 135)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(135, 0, 157)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
        },
        {
            name: 'Line 5',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 191, 0)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(224, 62, 76)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 150]
        }
    ]
};

export const simpleLineOption = {
    title: {
        text: '简单折线'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }
    ]
};

//区域高亮图
export const areaHighLightOption = {
    xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '30%']
    },
    visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [
            {
                gt: 1,
                lt: 3,
                color: 'rgba(0, 0, 180, 0.4)'
            },
            {
                gt: 5,
                lt: 7,
                color: 'rgba(0, 0, 180, 0.4)'
            }
        ]
    },
    series: [
        {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
                color: '#5470C6',
                width: 5
            },
            markLine: {
                symbol: ['none', 'none'],
                label: { show: false },
                data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
            },
            areaStyle: {},
            data: [
                ['2019-10-10', 200],
                ['2019-10-11', 560],
                ['2019-10-12', 750],
                ['2019-10-13', 580],
                ['2019-10-14', 250],
                ['2019-10-15', 300],
                ['2019-10-16', 450],
                ['2019-10-17', 300],
                ['2019-10-18', 100]
            ]
        }
    ]
};

// 默认,用于开发
export const defaultOption = {
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [
        {
            type: 'candlestick',
            data: [
                [20, 34, 10, 38],
                [40, 35, 30, 50],
                [31, 38, 33, 44],
                [38, 15, 5, 42]
            ]
        }
    ]
};

//柱状图
//动态排序柱状图


export const dynamicBarChart = {
    xAxis: {
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: ['我是第一', '我才是', '我想躺平', '哈哈哈哈哈', '看不见我'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 5
    },
    series: [
        {
            realtimeSort: true,
            name: '某公司职场',
            type: 'bar',
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        }
    ],
    legend: {
        show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 1000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
};

function lineFunctionFunc(x) {
    x /= 10;
    return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
}
function lineFunctionGenerateData() {
    let data: any = [];
    for (let i = -200; i <= 200; i += 0.1) {
        data.push([i, lineFunctionFunc(i)]);
    }
    return data;
}
export const lineFunction = {
    animation: false,
    grid: {
        top: 40,
        left: 50,
        right: 40,
        bottom: 50
    },
    xAxis: {
        name: 'x',
        minorTick: {
            show: true
        },
        minorSplitLine: {
            show: true
        }
    },
    yAxis: {
        name: 'y',
        min: -100,
        max: 100,
        minorTick: {
            show: true
        },
        minorSplitLine: {
            show: true
        }
    },
    dataZoom: [
        {
            show: true,
            type: 'inside',
            filterMode: 'none',
            xAxisIndex: [0],
            startValue: -20,
            endValue: 20
        },
        {
            show: true,
            type: 'inside',
            filterMode: 'none',
            yAxisIndex: [0],
            startValue: -20,
            endValue: 20
        }
    ],
    series: [
        {
            type: 'line',
            showSymbol: false,
            clip: true,
            data: lineFunctionGenerateData()
        }
    ]
}

// import LifeExpectancyData from '../../../public/data/life-expectancy-table.json'
// export const LifeExpectancy =  {
//     grid3D: {},
//     tooltip: {},
//     xAxis3D: {
//       type: 'category'
//     },
//     yAxis3D: {
//       type: 'category'
//     },
//     zAxis3D: {},
//     visualMap: {
//       max: 1e8,
//       dimension: 'Population'
//     },
//     dataset: {
//       dimensions: [
//         'Income',
//         'Life Expectancy',
//         'Population',
//         'Country',
//         { name: 'Year', type: 'ordinal' }
//       ],
//       source: LifeExpectancyData
//     },
//     series: [
//       {
//         type: 'bar3D',
//         // symbolSize: symbolSize,
//         shading: 'lambert',
//         encode: {
//           x: 'Year',
//           y: 'Country',
//           z: 'Life Expectancy',
//           tooltip: [0, 1, 2, 3, 4]
//         }
//       }
//     ]
//   };
