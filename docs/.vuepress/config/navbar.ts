const front_end:any = {
    text: "前端(琐碎)",
    children: [
        {
            text: "前端代码技巧总结",
            link: "/vue_still_learn/",
        },
        {
            text: "webpack摸爬滚打",
            link: "/vue_still_learn/webpack",
        },
        {
            text: "博客搭建记录",
            link: "/vuepress_config/"
        },
        
        {
            link: '/something_help_dev/leetcode',
            text: '纠结的算法历史'
        },
        {
            link:'/style_learn/style',
            text: 'css细节'
        },
        {
            link:'/vue_still_learn/vuex_learn',
            text:'vuex4.x官方文档学习'
        },
        {
            text: 'vim',
            link: '/something_help_dev/vim'
        },
        {
            text: '动画-A13',
            link: '/fantastic/a11'
        },
        {
            text: '图表',
            link: '/something_help_dev/charts'
        },
        {
            link: '/fantastic/coding_chanlenges/p5_001',
            text: 'canvas 星空'
        },
        {
            link: '/fantastic/coding_chanlenges/p5_002',
            text: 'canvas L-system'
        },
        {
            text: 'pixi',
            link: '/game/pixi-demo'
        },
        {
            text: 'web audio api',
            link: '/fantastic/audio'
        },
        {
            text:'prime spiral',
            link: '/fantastic/coding_chanlenges/primeSpiral'
        },
        {
            text:'詩歌',
            link: '/fantastic/singpoem/huozai'
        },
        {
            text:'面试总结',
            link:'/interview/'
        },
        {
            text:'资源导航',
            link:'/resource'
        },
        {
            text: "element-plus陈列",
            link: "/ep",
        },
        {
            text: "element-plus源码分析",
            link: "/sourceCodeAnalyze/note",
        },
        {
            text: '原神日记',
            link: '/game/genshine'
        },
    ],
};

const p5:any={
    text:'p5',
    children:[
        {
            text:'reference',
            link: '/fantastic/p5_reference/reference'
        },
    ]
}


const back_end:any = {
    text:'后端',
    children:[
        {
            text:'Java',
            link:'/back_end_start/java'
        },
        {
            text:'Node',
            link:'/back_end_start/node'
        },
    ]
}

const link:any={
    text:'GitHub',
    link:'https://github.com/ajn404/ngm.github.io'
} 




const systemFrontEnd:any = {
        text:'前端(系统)',
        children:[
            {
                text:'vue3-完整入门',
                link:'/vue_still_learn/vue3'
            },
            {
                link: '/alimap/',
                text: '构建知识体系'
            },
        ]
}

export const navbarConfig = [
    front_end,
    systemFrontEnd,
    back_end,
    p5,
    link,
];
