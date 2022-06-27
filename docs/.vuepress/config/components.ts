const { path } = require('@vuepress/utils')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}

const p5_components_keys = [
    'p5Start'
];

const echarts_components_keys = [
    'echartsUse','echartsAdvanceUse','dynamicEchartsDemo'
]


const defaultComponentKeys = ['demo', 'home', 'eleButton', 'eleButtonLoading'];
const componentKeys=[...defaultComponentKeys,...p5_components_keys,...echarts_components_keys]
const components = {};
componentKeys.forEach(name => {
    components[name] = resolve(`../components/${name}.vue`)
})

export default components