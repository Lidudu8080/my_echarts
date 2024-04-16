import { createApp } from 'vue'
import router from "@/router/index.js"
import store from "@/store/index.js"
import "@/styles/app.less"
import App from './App.vue'
createApp(App).use(router).use(store).mount('#app')
