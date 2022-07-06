import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
import store from './store/index.js'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, router, siteData }){
        app.use(ElementPlus);
        app.use(store)
        // router.beforeEach(item=>{
             // console.log(item)
             // console.log(siteData)
        // })
        
    },
    setup(){},
    rootComponents: [],
  })