import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import xhr from './components/xhr.vue'
import xhr1 from './components/xhr1.vue'
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: xhr },
        { path: '/xxx', component: xhr1 }
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
