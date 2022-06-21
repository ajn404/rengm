import ElementPlus from 'element-plus'
import store from './store/index.js'

import { defineClientAppEnhance } from '@vuepress/client'
export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(ElementPlus);
    app.use(store)
})
