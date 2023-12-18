import './assets/main.css'

import { createApp } from 'vue'
import Login from './components/Login.vue'
import Body from './components/Body.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/home', component: Body },
    { path: '/login', component: Login },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
  })
  
const app = Vue.createApp({})

app.use(router);
app.mount('#app');