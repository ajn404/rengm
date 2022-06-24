import { defaultTheme } from "vuepress";
import { navbarConfig } from "./config/navbar";
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import { localTheme } from './theme'

//插件
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { containerPlugin } = require('@vuepress/plugin-container')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
// const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

const { path } = require('@vuepress/utils')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}
//todo添加公共组件
const p5_components_keys = [
    'p5Start'
];
let componentKeys = ['demo', 'home', 'eleButton', 'eleButtonLoading','echartsUse'];
componentKeys=[...componentKeys,...p5_components_keys]

const components = {};
componentKeys.forEach(name => {
    components[name] = resolve(`components/${name}.vue`)
})

export default defineUserConfig({
    title: "",
    description: "",
    base: "/rengm/",
    open: true,
    public: `/.vuepress/public`,
    bundler: viteBundler({
        viteOptions: {
            css: {
                postcss: {
                    plugins: [
                        // 自定义 postcss 插件
                        {
                            // 插件名称
                            postcssPlugin: 'charset-removal',
                            // 获取 @ 规则
                            AtRule: {
                                // 处理全部 @charset 规则
                                charset: (atRule) => {
                                    // 移除规则
                                    atRule.remove()
                                }
                            }
                        }
                    ]
                }

            },
            server:{

            },
            build:{
                rollupOptions:{
                    external:['p5']
                }
            }
        },
        vuePluginOptions: {

        },

    }),
    plugins: [
        registerComponentsPlugin({
            components: components
        }),
        backToTopPlugin(),
        containerPlugin({
            // options
        }),
        nprogressPlugin(),
        // docsearchPlugin()
    ],
    clientConfigFile: resolve('./clientAppEnhance.ts'),
    theme: localTheme({
        // default theme options
        navbar:navbarConfig
      }),
    host: '0.0.0.0',
    port: 8088,

});
