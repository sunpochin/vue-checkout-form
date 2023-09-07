import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import "bootstrap"; // 從nodeModule中載入Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import css file
import { store } from './store.js';

const app = createApp(App);
// createApp(App).use(router).mount('#app')
app.use(store);
app.mount('#app');
