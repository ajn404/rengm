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

const mindExpand :any ={
    text:'思维拓展',
    children:[
        {
            text:'关于本栏目',
            link:'/mindExpand/README.md'
        },
        {
            text:'p5',
            children:[
                {
                    text:'使用p5的有趣项目',
                    link:'/mindExpand/p5-start.md',
                },
                {
                    text:'p5 sound',
                    link:'/mindExpand/p5-sound.md'
                },
        
                {
                    text:'p5接口参数',
                    link:'/mindExpand/reference.md'
                },
                {
                    text:'3D基本原理',
                    link:'/mindExpand/3d-basic.md'
                },
            ]
        },
        {
            text:'canvas原生',
            children:[
                {
                    text:'五颜六色的🐛',
                    link:'/mindExpand/canvas.md'
                },     
            ]
        },      
        {
            text:'webgl(threejs)',
            link:'/mindExpand/three.md',
            children:[
                {
                    text:'vtk',
                    link:'/mindExpand/vtk.md'
                },
            ]
        }
    ]
}

const dataV : any = {
    text:'数据可视化',
    children:[
        {
            text:'关于本栏目',
            link:'/dataVisualization/README.md'
        },{
            text:'快用echarts',
            link:'/dataVisualization/echartsAdvanceUse.md'
        },
        {
            text:"动态echarts",
            link: '/dataVisualization/dynamicEcharts.md'
        }
    ]
}

const other : any = {
    text:'基础',
    children:[
        {
            text:'关于本栏目',
            link:'/basic/README.md'
        },
        {
            text:'css',
            link:'/basic/css/cssDemo'
        },
        {
            text:'ecma',
            link:'/basic/js/ecma2021'
        }
    ]
}


export const navbarConfig = [
    
    mindExpand,
    dataV,
    other,
    element,
    home,
];
