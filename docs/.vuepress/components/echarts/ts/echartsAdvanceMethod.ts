export const methods = [
    {
        value: "defaultOption",
        label: "默认",
    },
    {
        label: "折线图",
        children: [
            {
                value: "simpleLineOption",
                label: "简单折线图",
            },
            {
                value: "areaChart",
                label: "面积图"
            },
            {
                value: "areaHighLightOption",
                label: "区域高亮图"
            },

        ],
    },
    {
        label: '曲线图',
        children: [
            {
                label: '函数生成数据',
                value: 'lineFunction'
            },
            // {
            //     label:'LifeExpectancy(echarts-gl会报错)',
            //     value:'LifeExpectancy'
            // }
        ]
    }
]