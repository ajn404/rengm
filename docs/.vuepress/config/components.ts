const { path } = require('@vuepress/utils')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}

const p5_components_keys = [
    {name:'p5Start',path:'p5Start'},
    {name:'basicCanvas',path:'basicCanvas'}
    
];

const echarts_components_keys = [
    {name:'echartsUse',path:'echartsUse'},
    {name:'echartsAdvanceUse',path:'echartsAdvanceUse'},
    {name:'dynamicEchartsDemo',path:'dynamicEchartsDemo'},
    {name:'eleButtonText',path:'eleButtonText'}
]

const basic_3d_components = [
    {name:'basic3d',path:'basic3d'},
    {name:'vtkDemo',path:'vtkDemo'}
    
]

const vtk_components = [
    {
        name:'vtkDemo',
        path:'vtk/vtkDemo'
    },
    {
        name:'pdrReader',
        path:'vtk/pdrReader'
    }
]

const defaultComponentKeys = [
    {name:'demo',path:'demo'},
    {name:'home',path:'home'},
    {name:'eleButton',path:'eleButton'},
    {name:'eleButtonLoading',path:'eleButtonLoading'},
    ];
const componentKeys=[
    ...defaultComponentKeys,
    ...p5_components_keys,
    ...echarts_components_keys,
    ...basic_3d_components,
    ...vtk_components
]
const components = {};
componentKeys.forEach(component => {
    components[component.name] = resolve(`../components/${component.path}.vue`)
})

export default components