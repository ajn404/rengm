const home:any = {
    text:'主页',
    link:'/'
}

const element:any = {
    text:'element-plus使用',
    children:[
        {
            text:'关于本栏目',
            link:'/elementPlus/README.md'
        },
        {
            text:'element button',
            link:'/elementPlus/eleButton.md'
        },
    ]
}

const p5 :any ={
    text:'思维拓展',
    children:[
        {
            text:'关于本栏目',
            link:'/p5/README.md'
        },
        {
            text:'p5 start',
            link:'/p5/p5-start.md'
        },
        {
            text:'p5接口参数',
            link:'/p5/reference.md'
        }
    ]
}

const dataV : any = {
    text:'数据可视化',
    children:[
        {
            text:'echarts 使用',
            link:'/dataVisualization/README.md'
        },{
            text:'高级使用echarts',
            link:'/dataVisualization/echartsAdvanceUse.md'
        }
    ]
}


export const navbarConfig = [
    home,
    element,
    p5,
    dataV
];
