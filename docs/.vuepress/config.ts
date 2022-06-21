import {DefaultThemeOptions, defaultTheme} from "vuepress";
import {components} from "./config/components";
import {navbarConfig} from "./config/navbar";


import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'


const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')


export default defineUserConfig({
    title: "",
    description: "",
    base: "/",
    open:true,
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
    plugins:[
        registerComponentsPlugin({
            components:components
          }),
    ],
    theme: defaultTheme({
        navbar: navbarConfig
      }),
    host:'0.0.0.0',
    port:8088,
    
});
