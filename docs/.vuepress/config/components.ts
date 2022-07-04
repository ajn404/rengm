const { path } = require('@vuepress/utils')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}

const p5_components_keys = [
    { name: 'p5Start', path: 'p5/p5Start' },
    { name: 'basicCanvas', path: 'p5/basicCanvas' }

];

const echarts_components_keys = [
    { name: 'echartsUse', path: 'echarts/echartsUse' },
    { name: 'echartsAdvanceUse', path: 'echarts/echartsAdvanceUse' },
    { name: 'dynamicEchartsDemo', path: 'echarts/dynamicEchartsDemo' },
]

const basic_3d_components = [
    { name: 'basic3d', path: 'three/basic3d' }
]

const vtk_components = [
    { name: 'vtkDemo', path: 'vtk/vtkDemo' },
    { name: 'pdrReader', path: 'vtk/pdrReader' }
]

const ele_components = [
    { name: 'eleButton', path: 'element/eleButton' },
    { name: 'eleButtonLoading', path: 'element/eleButtonLoading' },
    { name: 'eleButtonText', path: 'element/eleButtonText' }
]



const defaultComponentKeys = [
    { name: 'demo', path: 'demo' },
    { name: 'home', path: 'home' }

];
const componentKeys = [
    ...defaultComponentKeys,
    ...p5_components_keys,
    ...echarts_components_keys,
    ...basic_3d_components,
    ...vtk_components,
    ...ele_components,
]
const components = {};
componentKeys.forEach(component => {
    components[component.name] = resolve(`../components/${component.path}.vue`)
})

export default components