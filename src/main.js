import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(ArcoVue)

document.body.setAttribute('arco-theme', 'dark')

app.mount('#app')
