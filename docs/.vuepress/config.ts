import { defaultTheme } from "vuepress";
import { navbarConfig } from "./config/navbar";
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'

//插件
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { containerPlugin } = require('@vuepress/plugin-container')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')

const { path } = require('@vuepress/utils')

const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}
//todo添加公共组件
const componentKeys = ['demo']
const components = {};
componentKeys.forEach(name => {
    components[name] = resolve(`components/${name}.vue`)
})

export default defineUserConfig({
    title: "",
    description: "",
    base: "/",
    open: true,
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {

        },
    }),
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "images/favicon.ico",
            },
        ],

    ],
    plugins: [
        registerComponentsPlugin({
            components: components
        }),
        backToTopPlugin(),
        containerPlugin({
            // options
        }),
        nprogressPlugin()
    ],
    clientConfigFile:resolve('./clientAppEnhance.ts'),
    theme: defaultTheme({
        navbar: navbarConfig
    }),
    host: '0.0.0.0',
    port: 8088,

});
