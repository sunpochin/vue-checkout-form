import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import "bootstrap"; // 從nodeModule中載入Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import css file

createApp(App).mount('#app')
