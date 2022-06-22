import ElementPlus from 'element-plus'
import store from './store/index.js'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }){
        app.use(ElementPlus);
        app.use(store)
    },
    setup(){},
    rootComponents: [],
  })