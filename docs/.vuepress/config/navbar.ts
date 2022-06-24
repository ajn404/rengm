const home:any = {
    text:'主页',
    link:'/'
}

const element:any = {
    text:'element-plus使用',
    children:[
        {
            text:'关于本栏目',
            link:'/elementPlus/README'
        },
        {
            text:'element button',
            link:'/elementPlus/eleButton'
        },
    ]
}

const p5 :any ={
    text:'思维拓展',
    children:[
        {
            text:'关于本栏目',
            link:'/p5/README'
        },
        {
            text:'p5 start',
            link:'/p5/p5-start'
        }
    ]
}

const dataV : any = {
    text:'数据可视化',
    children:[
        {
            text:'echarts 使用',
            link:'/dataVisualization/README'
        }
    ]
}


export const navbarConfig = [
    home,
    element,
    p5,
    dataV
];
