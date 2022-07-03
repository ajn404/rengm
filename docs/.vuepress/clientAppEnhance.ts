import ElementPlus from 'element-plus'
import store from './store/index.js'
import { defineClientConfig } from '@vuepress/client'
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

export default defineClientConfig({
    enhance({ app, router, siteData }){
        app.use(ElementPlus);
        app.component('customLayout',ParentLayout)
        app.use(store)
        router.beforeEach(item=>{
            // console.log(item)
            // console.log(siteData)
        })
        
    },
    setup(){},
    rootComponents: [],
  })