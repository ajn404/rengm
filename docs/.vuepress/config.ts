import {defineUserConfig} from "vuepress";
import type {DefaultThemeOptions} from "vuepress";
import {components} from "./config/components";
import {navbarConfig} from "./config/navbar";


export default defineUserConfig<DefaultThemeOptions>({
    title: "",
    description: "",
    base: "/",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "images/favicon.ico",
            },
        ],
  
    ],
    themeConfig: {
        logo: "/images/logo.png",
        logoDark:"",
        navbar: navbarConfig,
        sidebar: "auto",
    },
    plugins: [
        "@vuepress/plugin-toc",
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-nprogress",
        [
            '@vuepress/register-components',
            {
                components: components,
            },
        ],
    
    ],
    host:'0.0.0.0',
    port:8088,
    
});
