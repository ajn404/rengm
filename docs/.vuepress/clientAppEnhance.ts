import ElementPlus,{ElMessage} from 'element-plus'
import "element-plus/dist/index.css"
import "@/public/styles/index.scss"
import store from './store/index.js'
import { defineClientConfig } from '@vuepress/client'
console.log('%crengm\n%crewrite ngm','color:yellow;font-size:3em;','color:red;font-size:1.5em')

export default defineClientConfig({
    enhance({ app, router, siteData }){
        app.use(ElementPlus);
        app.use(store)
        // router.beforeEach(item=>{
             // console.log(item)
             // console.log(siteData)
        // })
        
    },
    setup(){
        return {
            ElMessage
        }
    },
    rootComponents: [
        
    ],
  })