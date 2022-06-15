const {path} = require('@vuepress/utils')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}

const leetCodeKeys=[
    'Stack'
];
const leetCodeComponents={};
for(let i=0;i<leetCodeKeys.length;i++){
    leetCodeComponents[leetCodeKeys[i]]=resolve(`../../something_help_dev/leetcode/${leetCodeKeys[i]}.vue`)
}


const p5_reference = [
    'angelsRotation',
    'angularMotion',
    'draw',
    'describe',
    'triangle',
    'polarCoordinates',
    'polarCoordinatesDemo'
];
const p5_referenceComponents={};
for(let i=0;i<p5_reference.length;i++){
    p5_referenceComponents[p5_reference[i]]=resolve(`../../fantastic/components/${p5_reference[i]}.vue`)
}


export const components = {
    MyDemo: resolve('../components/draft/my-demo'),
    workcal: resolve('../components/draft/workcal'),
    Home: resolve('../components/home'),
    VueStillLearn: resolve('../components/vue3_still_learn/vue-still-learn'),
    NestedLines: resolve('../components/vue3_still_learn/nestedLines'),
    ElementDemo: resolve('../components/element-demo'),
    PixiDemo: resolve('../components/game/pixi-demo'),
    ResponsiveImages: resolve('../components/responsiveImages/index'),
    WaterfallsFlow: resolve('../components/common/components/waterfallsFlow'),
    AEleven: resolve('../components/fantastic/a11'),
    Charts: resolve('../components/fantastic/charts'),
    starField: resolve('../components/fantastic/coding_chanlenges/startField'),
    lSystem: resolve('../components/fantastic/coding_chanlenges/LSystem'),
    primeSpiral:resolve('../components/fantastic/coding_chanlenges/primeSpiral'),
    selfAvoiding: resolve('../components/fantastic/coding_chanlenges/selfAvoding'),
    elementAnalyze: resolve('../components/sourceCodeAnalyze/index'),
    themeChalk:resolve('../components/sourceCodeAnalyze/components/themeChalk'),
    screenRecord:resolve('../components/fantastic/screenRecord'),
    echartBarDemo:resolve('../../vue_still_learn/static/echart_demo/index'),
    vuexLearn:resolve('../components/vue3_still_learn/vuex_learn'),
    clearState:resolve('../components/vue3_still_learn/clearState'),
    polariod:resolve('../components/collections/css3/polariod'),
    transitionTimingFunction:resolve('../components/collections/css3/transition_timing_function'),
    cubicBezier:resolve('../components/collections/css3/cubic_bezier'),
    eventBubbleCapture:resolve('../../vue_still_learn/components/base/event_bubble_capture'),
    underscoreEx:resolve('../../vue_still_learn/components/underscore_ex/index'),
    fullScreen:resolve('../../vue_still_learn/components/FullScreen'),
    multiColumnIndex:resolve('../components/common/components/multi-column/multiColumnIndex.vue'),
    audioControl:resolve('../components/fantastic/audio/control.vue'),
    huozai:resolve('../components/collections/singapoem/huozai/index.vue'),
    ...leetCodeComponents,
    ...p5_referenceComponents
};
