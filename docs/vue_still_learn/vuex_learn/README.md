## 状态管理之vuex

```bash
npm init vue@next
```

### package.json
::: details 查看代码
```json
  "dependencies": {
    "vue": "^3.2.14",
    "vue-router": "^4.0.11",
    "vuex": "^4.0.2"
  },
  "devDependencies": {
    "@cypress/vite-dev-server": "^2.1.1",
    "@cypress/vue": "^3.0.3",
    "@vitejs/plugin-vue": "^1.9.3",
    "@vitejs/plugin-vue-jsx": "^1.2.0",
    "cypress": "^8.5.0",
    "start-server-and-test": "^1.14.0",
    "typescript": "~4.3.5",
    "vite": "^2.6.3",
    "vue-tsc": "^0.3.0"
  }
```
:::
### main.ts
::: details 查看代码
```ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
```
:::
>每个 Vue 应用都是通过用 createApp 函数创建一个新的应用实例开始的
>
>传递给 createApp 的选项用于配置根组件。当我们挂载应用时，该组件被用作渲染的起点。
### App.vue
