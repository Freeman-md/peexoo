import { createApp } from 'vue'


import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import './assets/css/lightbox.min.css'
// import './assets/js/lightbox.min.js'
// import './assets/js/jquery-3.3.1.min.js'

createApp(App).use(store).use(router).mount('#app')
