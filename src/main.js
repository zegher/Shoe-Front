import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

//initiate the websocket
const websocket = new WebSocket('wss://shoe-api-cyzq.onrender.com/primus')

websocket.addEventListener('open', () => {
    console.log('Websocket connected');
});

websocket.addEventListener('close', (event) => {
    console.log('Websocket closed: ', event);
});

websocket.addEventListener('error', (event) => {
    console.log('Websocket error: ', event);
});



app.use(router)
app.mount('#app')